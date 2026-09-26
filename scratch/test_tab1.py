import subprocess, time, urllib.request, json, websocket

USER_DATA = r'C:\Users\danis\AppData\Local\Temp\chrome_check_tab1'
proc = subprocess.Popen([
    r'C:\Program Files\Google\Chrome\Application\chrome.exe',
    '--remote-debugging-port=9234',
    f'--user-data-dir={USER_DATA}',
    '--remote-allow-origins=*',
    '--headless=new',
    'http://localhost:4173/'
])
time.sleep(2.5)
try:
    tabs = json.loads(urllib.request.urlopen('http://127.0.0.1:9234/json').read().decode())
    target_tab = next(t for t in tabs if t.get('type') == 'page' and 'localhost' in t.get('url'))
    print("Found Target Tab:", target_tab['url'])

    ws = websocket.create_connection(target_tab['webSocketDebuggerUrl'])
    ws.send(json.dumps({'id': 1, 'method': 'Runtime.evaluate', 'params': {'expression': '''
        JSON.stringify(Array.from(document.querySelectorAll("section")).map(s => ({
            id: s.id,
            offsetTop: s.offsetTop,
            height: s.offsetHeight
        })))
    '''}}))
    while True:
        r = json.loads(ws.recv())
        if r.get('id') == 1:
            print("Sections measured:", r.get('result', {}).get('result', {}).get('value'))
            break
    ws.close()
finally:
    proc.terminate()
