import urllib.request, json, websocket, subprocess, time, base64, os

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
proc = subprocess.Popen([
    chrome_path,
    '--remote-debugging-port=9225',
    '--remote-allow-origins=*',
    '--headless=new',
    '--disable-gpu',
    '--window-size=1440,900',
    'http://localhost:4173'
])
time.sleep(3)

def rpc(ws, req_id, method, params=None):
    ws.send(json.dumps({'id': req_id, 'method': method, 'params': params or {}}))
    while True:
        resp = json.loads(ws.recv())
        if resp.get('id') == req_id:
            return resp.get('result', {})

try:
    tabs = json.loads(urllib.request.urlopen('http://127.0.0.1:9225/json').read().decode('utf-8'))
    ws = websocket.create_connection(tabs[0]['webSocketDebuggerUrl'])

    # Query all sections
    sections = rpc(ws, 1, 'Runtime.evaluate', {
        'expression': 'Array.from(document.querySelectorAll("section")).map(s => ({ id: s.id, offsetTop: s.offsetTop }))',
        'returnByValue': True
    })
    print('Sections found:', json.dumps(sections, indent=2))

    section_list = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'experience', 'contact']
    
    for sec_id in section_list:
        print(f"Scrolling to #{sec_id}...")
        rpc(ws, 2, 'Runtime.evaluate', {
            'expression': f'''
                const el = document.getElementById("{sec_id}");
                if (el) {{
                    window.scrollTo(0, el.offsetTop);
                }}
            '''
        })
        time.sleep(1.0)
        shot = rpc(ws, 3, 'Page.captureScreenshot', {'format': 'png'})
        data = base64.b64decode(shot.get('data', ''))
        filename = f"capture_{sec_id}.png"
        with open(filename, 'wb') as f:
            f.write(data)
        print(f"Saved {filename} ({len(data)} bytes)")

    # Mobile capture (390 x 844)
    rpc(ws, 4, 'Emulation.setDeviceMetricsOverride', {
        'width': 390,
        'height': 844,
        'deviceScaleFactor': 2,
        'mobile': True
    })
    time.sleep(0.5)

    for sec_id in ['hero', 'skills', 'projects', 'contact']:
        rpc(ws, 5, 'Runtime.evaluate', {
            'expression': f'''
                const el = document.getElementById("{sec_id}");
                if (el) {{
                    window.scrollTo(0, el.offsetTop);
                }}
            '''
        })
        time.sleep(1.0)
        shot = rpc(ws, 6, 'Page.captureScreenshot', {'format': 'png'})
        data = base64.b64decode(shot.get('data', ''))
        filename = f"mobile_capture_{sec_id}.png"
        with open(filename, 'wb') as f:
            f.write(data)
        print(f"Saved {filename} ({len(data)} bytes)")

    ws.close()
finally:
    proc.terminate()
    print("Done!")
