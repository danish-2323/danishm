import subprocess
import time
import urllib.request
import json
import websocket
import os

PORT = 9251
USER_DATA = r"C:\Users\danis\AppData\Local\Temp\chrome_hero_landing_test"
URL = "http://localhost:4173/#skills" # Test with an initial hash to ensure it gets cleared and stays at hero!

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

    # Wait for the preloader to reach 100% and unmount
    time.sleep(2.8)

    # Check window.scrollY and current URL
    res = rpc(ws, 3, 'Runtime.evaluate', {
        'expression': "JSON.stringify({ scrollY: window.scrollY, hash: window.location.hash, pathname: window.location.pathname })"
    })
    data = json.loads(res.get('result', {}).get('value', '{}'))
    print("Landing state:", data)

    if data.get('scrollY', -1) == 0:
        print("SUCCESS: Viewport is strictly at 0 (Hero section alone)!")
    else:
        print("FAILED: scrollY is", data.get('scrollY'))

    ws.close()
except Exception as e:
    print("Error:", e)
finally:
    proc.terminate()
