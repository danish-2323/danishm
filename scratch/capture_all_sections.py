import json
import base64
import time
import subprocess
import urllib.request
import os
import websocket

PORT = 9222
URL = "http://localhost:4173"
OUT_DIR = r"C:\Users\danis\OneDrive\Desktop\portfolio-re"

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome_path,
    f"--remote-debugging-port={PORT}",
    "--remote-allow-origins=*",
    "--headless=new",
    "--disable-gpu",
    "--window-size=1440,900",
    URL
])

time.sleep(3)

def send_cmd(ws, method, params=None, msg_id=1):
    payload = {"id": msg_id, "method": method, "params": params or {}}
    ws.send(json.dumps(payload))
    while True:
        resp = json.loads(ws.recv())
        if resp.get("id") == msg_id:
            return resp.get("result", {})

try:
    resp = urllib.request.urlopen(f"http://127.0.0.1:{PORT}/json")
    tabs = json.loads(resp.read().decode('utf-8'))
    ws_url = tabs[0]['webSocketDebuggerUrl']

    ws = websocket.create_connection(ws_url)
    print("Connected to Chrome via CDP!")

    msg_id = 1

    # Enable Page and Runtime
    send_cmd(ws, "Page.enable", {}, msg_id)
    msg_id += 1
    send_cmd(ws, "Runtime.enable", {}, msg_id)
    msg_id += 1

    # Wait for page animations to stabilize
    time.sleep(2)

    sections = [
        ("hero", "section_01_hero.png"),
        ("about", "section_02_about.png"),
        ("skills", "section_03_skills.png"),
        ("projects", "section_04_projects.png"),
        ("education", "section_05_education.png"),
        ("certifications", "section_06_certifications.png"),
        ("contact", "section_07_contact.png")
    ]

    for sec_id, filename in sections:
        # Scroll element into view
        expr = f"""
        (function() {{
            const el = document.getElementById('{sec_id}');
            if (el) {{
                el.scrollIntoView({{ behavior: 'instant', block: 'start' }});
                return true;
            }}
            return false;
        }})()
        """
        res = send_cmd(ws, "Runtime.evaluate", {"expression": expr}, msg_id)
        msg_id += 1
        time.sleep(1.2)  # Wait for Framer Motion / IntersectionObserver triggers

        # Capture Screenshot
        shot_res = send_cmd(ws, "Page.captureScreenshot", {"format": "png"}, msg_id)
        msg_id += 1
        data = base64.b64decode(shot_res.get("data", ""))
        filepath = os.path.join(OUT_DIR, filename)
        with open(filepath, "wb") as f:
            f.write(data)
        print(f"Captured {filename}")

    # Now Mobile Viewport (390 x 844)
    send_cmd(ws, "Emulation.setDeviceMetricsOverride", {
        "width": 390,
        "height": 844,
        "deviceScaleFactor": 2,
        "mobile": True
    }, msg_id)
    msg_id += 1
    time.sleep(1)

    # Capture Mobile Hero
    expr = "document.getElementById('hero').scrollIntoView({ behavior: 'instant', block: 'start' });"
    send_cmd(ws, "Runtime.evaluate", {"expression": expr}, msg_id)
    msg_id += 1
    time.sleep(1)
    shot_res = send_cmd(ws, "Page.captureScreenshot", {"format": "png"}, msg_id)
    msg_id += 1
    with open(os.path.join(OUT_DIR, "mobile_hero.png"), "wb") as f:
        f.write(base64.b64decode(shot_res.get("data", "")))
    print("Captured mobile_hero.png")

    # Capture Mobile Projects
    expr = "document.getElementById('projects').scrollIntoView({ behavior: 'instant', block: 'start' });"
    send_cmd(ws, "Runtime.evaluate", {"expression": expr}, msg_id)
    msg_id += 1
    time.sleep(1)
    shot_res = send_cmd(ws, "Page.captureScreenshot", {"format": "png"}, msg_id)
    msg_id += 1
    with open(os.path.join(OUT_DIR, "mobile_projects.png"), "wb") as f:
        f.write(base64.b64decode(shot_res.get("data", "")))
    print("Captured mobile_projects.png")

    ws.close()
except Exception as e:
    print(f"Error during capture: {e}")
finally:
    proc.terminate()
    print("Done!")
