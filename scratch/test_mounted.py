import subprocess, time, urllib.request, json, websocket

USER_DATA = r'C:\Users\danis\AppData\Local\Temp\chrome_check_offsets3'
proc = subprocess.Popen([
    r'C:\Program Files\Google\Chrome\Application\chrome.exe',
    '--remote-debugging-port=9232',
    f'--user-data-dir={USER_DATA}',
    '--remote-allow-origins=*',
    '--headless=new',
    'http://localhost:4173'
])
time.sleep(2)
try:
    tabs = json.loads(urllib.request.urlopen('http://127.0.0.1:9232/json').read().decode())
    ws = websocket.create_connection(tabs[0]['webSocketDebuggerUrl'])

    # Poll until mounted
    for i in range(25):
        ws.send(json.dumps({'id': 100 + i, 'method': 'Runtime.evaluate', 'params': {'expression': 'document.querySelectorAll("section").length'}}))
        while True:
            r = json.loads(ws.recv())
            if r.get('id') == 100 + i:
                count = r.get('result', {}).get('result', {}).get('value', 0)
                print(f"Check {i}: {count} sections")
                break
        if count >= 7:
            break
        time.sleep(0.4)

    ws.send(json.dumps({'id': 999, 'method': 'Runtime.evaluate', 'params': {'expression': '''
        JSON.stringify(Array.from(document.querySelectorAll("section")).map(s => ({
            id: s.id,
            offsetTop: s.offsetTop,
            height: s.offsetHeight
        })))
    '''}}))
    while True:
        r = json.loads(ws.recv())
        if r.get('id') == 999:
            print("Layout info:", r.get('result', {}).get('result', {}).get('value'))
            break

    ws.close()
finally:
    proc.terminate()
