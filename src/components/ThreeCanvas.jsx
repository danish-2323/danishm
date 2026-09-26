import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas({ mouseX = 0, mouseY = 0 }) {
  const containerRef = useRef(null);
  const targetMouse = useRef({ x: 0, y: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    targetMouse.current = { x: mouseX, y: mouseY };
  }, [mouseX, mouseY]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08090a, 0.0018);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 180);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Subtle 3D Depth Points (restrained dust / coordinate points)
    const particleCount = 140;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const opacities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 360;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 220;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
      opacities[i] = Math.random() * 0.4 + 0.1;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom point texture / circular appearance
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0, 'rgba(242, 242, 240, 0.85)');
    gradient.addColorStop(0.5, 'rgba(145, 166, 181, 0.4)');
    gradient.addColorStop(1, 'rgba(8, 9, 10, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 16, 16);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.PointsMaterial({
      size: 2.2,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0x91a6b5,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Architectural Depth Grid Lines (very faint floor/perspective plane)
    const gridHelper = new THREE.GridHelper(300, 30, 0x292d31, 0x181a1d);
    gridHelper.position.y = -70;
    gridHelper.position.z = -20;
    scene.add(gridHelper);

    // Thin coordinate crosshair in 3D space
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x292d31,
      transparent: true,
      opacity: 0.35,
    });
    const linePoints = [];
    linePoints.push(new THREE.Vector3(-150, 40, -40));
    linePoints.push(new THREE.Vector3(150, 40, -40));
    const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
    const horizLine = new THREE.Line(lineGeo, lineMat);
    scene.add(horizLine);

    // Animation loop & IntersectionObserver pause
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();

      // Subtle continuous drift
      points.rotation.y += delta * 0.02;
      points.rotation.x += delta * 0.01;

      // Mouse Parallax Lerp
      currentMouse.current.x += (targetMouse.current.x - currentMouse.current.x) * 0.04;
      currentMouse.current.y += (targetMouse.current.y - currentMouse.current.y) * 0.04;

      camera.position.x = currentMouse.current.x * 25;
      camera.position.y = -currentMouse.current.y * 20;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Clean disposal
      geometry.dispose();
      material.dispose();
      texture.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60"
      aria-hidden="true"
    />
  );
}
