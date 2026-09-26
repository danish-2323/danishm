import subprocess
import time
import urllib.request
import json
import websocket
import base64
import os

PORT = 9235
USER_DATA = r"C:\Users\danis\AppData\Local\Temp\chrome_portfolio_real"
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

    # Desktop sections
    sections = [
        ('hero', 'section_hero.png'),
        ('about', 'section_about.png'),
        ('skills', 'section_skills.png'),
        ('projects', 'section_projects.png'),
        ('education', 'section_education.png'),
        ('certifications', 'section_certifications.png'),
        ('experience', 'section_experience.png'),
        ('contact', 'section_contact.png')
    ]

    req_id = 10
    # Set scrollBehavior to auto so scrolls happen instantaneously
    rpc(ws, req_id, 'Runtime.evaluate', {'expression': "document.documentElement.style.scrollBehavior = 'auto'; document.body.style.scrollBehavior = 'auto';"})
    req_id += 1

    for sec_id, filename in sections:
        scroll_code = f"""
        const el = document.getElementById('{sec_id}');
        if (el) {{
            window.scrollTo(0, el.offsetTop);
        }}
        """
        rpc(ws, req_id, 'Runtime.evaluate', {'expression': scroll_code})
        req_id += 1
        time.sleep(0.8)  # Wait for Framer Motion animation

        shot = rpc(ws, req_id, 'Page.captureScreenshot', {'format': 'png'})
        req_id += 1

        img_data = base64.b64decode(shot.get('data', ''))
        filepath = os.path.join(OUT_DIR, filename)
        with open(filepath, 'wb') as f:
            f.write(img_data)
        print(f"Captured Desktop {filename}")

    # Mobile Emulation (390 x 844, scale 2)
    rpc(ws, req_id, 'Emulation.setDeviceMetricsOverride', {
        'width': 390,
        'height': 844,
        'deviceScaleFactor': 2,
        'mobile': True
    })
    req_id += 1
    time.sleep(1.0)

    mobile_sections = [
        ('hero', 'mobile_hero.png'),
        ('about', 'mobile_about.png'),
        ('skills', 'mobile_skills.png'),
        ('projects', 'mobile_projects.png'),
        ('contact', 'mobile_contact.png')
    ]

    for sec_id, filename in mobile_sections:
        scroll_code = f"""
        const el = document.getElementById('{sec_id}');
        if (el) {{
            window.scrollTo(0, el.offsetTop);
        }}
        """
        rpc(ws, req_id, 'Runtime.evaluate', {'expression': scroll_code})
        req_id += 1
        time.sleep(1.2)

        shot = rpc(ws, req_id, 'Page.captureScreenshot', {'format': 'png'})
        req_id += 1

        img_data = base64.b64decode(shot.get('data', ''))
        filepath = os.path.join(OUT_DIR, filename)
        with open(filepath, 'wb') as f:
            f.write(img_data)
        print(f"Captured Mobile {filename}")

    ws.close()
    print("SUCCESS: All section screenshots captured!")
finally:
    proc.terminate()
