import subprocess
import time
import urllib.request
import json
import websocket
import base64
import os

PORT = 9245
USER_DATA = r"C:\Users\danis\AppData\Local\Temp\chrome_portfolio_clean"
OUT_DIR = r"C:\Users\danis\OneDrive\Desktop\portfolio-re"
URL = "http://localhost:4173/"

proc = subprocess.Popen([
    r'C:\Program Files\Google\Chrome\Application\chrome.exe',
    f'--remote-debugging-port={PORT}',
    f'--user-data-dir={USER_DATA}',
    '--remote-allow-origins=*',
    '--headless=new',
    '--disable-gpu',
    '--window-size=1440,900',
    URL
])

time.sleep(2.5)

def rpc(ws, req_id, method, params=None):
    ws.send(json.dumps({'id': req_id, 'method': method, 'params': params or {}}))
    while True:
        raw = ws.recv()
        data = json.loads(raw)
        if data.get('id') == req_id:
            return data.get('result', {})

try:
    tabs = json.loads(urllib.request.urlopen(f'http://127.0.0.1:{PORT}/json').read().decode())
    target_tab = next(t for t in tabs if t.get('type') == 'page' and 'localhost' in t.get('url'))
    print("Connected to:", target_tab['url'])

    ws = websocket.create_connection(target_tab['webSocketDebuggerUrl'])

    # Enable Page and Runtime
    rpc(ws, 1, "Page.enable")
    rpc(ws, 2, "Runtime.enable")

    time.sleep(1.0)

    # Disable smooth scroll for immediate jump
    rpc(ws, 3, 'Runtime.evaluate', {
        'expression': "document.documentElement.style.scrollBehavior = 'auto'; document.body.style.scrollBehavior = 'auto';"
    })

    # Desktop sections to capture
    sections = [
        ('hero', 'katana_01_hero.png'),
        ('about', 'katana_02_about.png'),
        ('skills', 'katana_03_clash.png'),
        ('projects', 'katana_04_showcase.png'),
        ('specification', 'katana_05_specification.png'),
        ('education', 'katana_06_education.png'),
        ('certifications', 'katana_07_certifications.png'),
        ('contact', 'katana_08_contact.png')
    ]

    req_id = 10
    for sec_id, filename in sections:
        scroll_code = f"""
        (function() {{
            const el = document.getElementById('{sec_id}');
            if (el) {{
                window.scrollTo(0, el.offsetTop);
                window.dispatchEvent(new Event('scroll'));
                return el.offsetTop;
            }}
            return 0;
        }})()
        """
        rpc(ws, req_id, 'Runtime.evaluate', {'expression': scroll_code})
        req_id += 1
        time.sleep(1.0)  # Wait for Framer Motion animation

        shot = rpc(ws, req_id, 'Page.captureScreenshot', {'format': 'png'})
        req_id += 1

        img_data = base64.b64decode(shot.get('data', ''))
        filepath = os.path.join(OUT_DIR, filename)
        with open(filepath, 'wb') as f:
            f.write(img_data)
        print(f"Captured {filename}")

    # Mobile Emulation (390 x 844)
    rpc(ws, req_id, 'Emulation.setDeviceMetricsOverride', {
        'width': 390,
        'height': 844,
        'deviceScaleFactor': 2,
        'mobile': True
    })
    req_id += 1
    time.sleep(0.5)

    mobile_sections = [
        ('hero', 'katana_mobile_01_hero.png'),
        ('about', 'katana_mobile_02_about.png'),
        ('skills', 'katana_mobile_03_clash.png'),
        ('projects', 'katana_mobile_04_showcase.png'),
        ('specification', 'katana_mobile_05_specification.png'),
        ('certifications', 'katana_mobile_06_certifications.png'),
        ('contact', 'katana_mobile_07_contact.png')
    ]

    for sec_id, filename in mobile_sections:
        scroll_code = f"""
        (function() {{
            const el = document.getElementById('{sec_id}');
            if (el) {{
                window.scrollTo(0, el.offsetTop);
                window.dispatchEvent(new Event('scroll'));
                return el.offsetTop;
            }}
            return 0;
        }})()
        """
        rpc(ws, req_id, 'Runtime.evaluate', {'expression': scroll_code})
        req_id += 1
        time.sleep(1.0)

        shot = rpc(ws, req_id, 'Page.captureScreenshot', {'format': 'png'})
        req_id += 1

        img_data = base64.b64decode(shot.get('data', ''))
        filepath = os.path.join(OUT_DIR, filename)
        with open(filepath, 'wb') as f:
            f.write(img_data)
        print(f"Captured {filename}")

    ws.close()
    print("ALL KATANA SECTIONS CAPTURED!")
except Exception as e:
    print("Error:", e)
finally:
    proc.terminate()
