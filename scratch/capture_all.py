import subprocess
import time
import urllib.request
import json
import websocket
import base64
import os

PORT = 9228
USER_DATA = r"C:\Users\danis\AppData\Local\Temp\chrome_portfolio_cdp"
OUT_DIR = r"C:\Users\danis\OneDrive\Desktop\portfolio-re"
URL = "http://localhost:4173"

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

def cdp_send(ws, req_id, method, params=None):
    ws.send(json.dumps({'id': req_id, 'method': method, 'params': params or {}}))
    while True:
        raw = ws.recv()
        data = json.loads(raw)
        if data.get('id') == req_id:
            return data.get('result', {})

try:
    tabs = json.loads(urllib.request.urlopen(f'http://127.0.0.1:{PORT}/json').read().decode())
    target = None
    for t in tabs:
        if t.get('type') == 'page' and URL in t.get('url', ''):
            target = t
            break
    if not target:
        target = tabs[0]

    ws = websocket.create_connection(target['webSocketDebuggerUrl'])
    print("Connected to Page WebSocket!")

    req_id = 1
    time.sleep(1.5)

    sections = [
        ('hero', 'shot_01_hero.png'),
        ('about', 'shot_02_about.png'),
        ('skills', 'shot_03_skills.png'),
        ('projects', 'shot_04_projects.png'),
        ('education', 'shot_05_education.png'),
        ('certifications', 'shot_06_certifications.png'),
        ('experience', 'shot_07_experience.png'),
        ('contact', 'shot_08_contact.png')
    ]

    for sec_id, filename in sections:
        scroll_code = f"""
        const el = document.getElementById('{sec_id}');
        if (el) {{
            window.scrollTo(0, el.offsetTop);
        }}
        """
        cdp_send(ws, req_id, 'Runtime.evaluate', {'expression': scroll_code})
        req_id += 1
        time.sleep(1.0)

        shot = cdp_send(ws, req_id, 'Page.captureScreenshot', {'format': 'png'})
        req_id += 1

        img_data = base64.b64decode(shot.get('data', ''))
        filepath = os.path.join(OUT_DIR, filename)
        with open(filepath, 'wb') as f:
            f.write(img_data)
        print(f"Captured {filename} ({len(img_data)} bytes)")

    # Mobile Emulation (390 x 844)
    cdp_send(ws, req_id, 'Emulation.setDeviceMetricsOverride', {
        'width': 390,
        'height': 844,
        'deviceScaleFactor': 2,
        'mobile': True
    })
    req_id += 1
    time.sleep(0.5)

    mobile_sections = [
        ('hero', 'shot_mobile_hero.png'),
        ('about', 'shot_mobile_about.png'),
        ('skills', 'shot_mobile_skills.png'),
        ('projects', 'shot_mobile_projects.png'),
        ('contact', 'shot_mobile_contact.png')
    ]

    for sec_id, filename in mobile_sections:
        scroll_code = f"""
        const el = document.getElementById('{sec_id}');
        if (el) {{
            window.scrollTo(0, el.offsetTop);
        }}
        """
        cdp_send(ws, req_id, 'Runtime.evaluate', {'expression': scroll_code})
        req_id += 1
        time.sleep(1.0)

        shot = cdp_send(ws, req_id, 'Page.captureScreenshot', {'format': 'png'})
        req_id += 1

        img_data = base64.b64decode(shot.get('data', ''))
        filepath = os.path.join(OUT_DIR, filename)
        with open(filepath, 'wb') as f:
            f.write(img_data)
        print(f"Captured {filename} ({len(img_data)} bytes)")

    ws.close()
    print("All captures completed successfully!")
finally:
    proc.terminate()
