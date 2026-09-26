import subprocess
import time
import urllib.request
import json
import websocket
import base64
import os

PORT = 9249
USER_DATA = r"C:\Users\danis\AppData\Local\Temp\chrome_preloader_test"
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

time.sleep(2.0)

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
    rpc(ws, 1, "Page.enable")
    rpc(ws, 2, "Runtime.enable")

    # Reload to catch the preloader freshly
    rpc(ws, 3, "Page.reload")
    # Wait ~0.8s so counter is around 40-70%
    time.sleep(0.7)

    shot = rpc(ws, 4, 'Page.captureScreenshot', {'format': 'png'})
    img_data = base64.b64decode(shot.get('data', ''))
    with open(os.path.join(OUT_DIR, 'preloader_desktop.png'), 'wb') as f:
        f.write(img_data)
    print("Captured preloader_desktop.png")

    # Mobile test
    rpc(ws, 5, 'Emulation.setDeviceMetricsOverride', {
        'width': 390,
        'height': 844,
        'deviceScaleFactor': 2,
        'mobile': True
    })
    rpc(ws, 6, "Page.reload")
    time.sleep(0.7)

    shot = rpc(ws, 7, 'Page.captureScreenshot', {'format': 'png'})
    img_data = base64.b64decode(shot.get('data', ''))
    with open(os.path.join(OUT_DIR, 'preloader_mobile.png'), 'wb') as f:
        f.write(img_data)
    print("Captured preloader_mobile.png")

    ws.close()
    print("PRELOADER CAPTURE COMPLETE!")
except Exception as e:
    print("Error:", e)
finally:
    proc.terminate()
