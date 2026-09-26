import json
import base64
import time
import subprocess
import urllib.request
import os

PORT = 9222
URL = "http://localhost:4173"
OUTPUT_DIR = r"C:\Users\danis\OneDrive\Desktop\portfolio-re"

# Launch Chrome with remote debugging
chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome_path,
    f"--remote-debugging-port={PORT}",
    "--headless=new",
    "--disable-gpu",
    "--window-size=1440,900",
    URL
])

time.sleep(3)

try:
    # Get WebSocket debugger URL
    resp = urllib.request.urlopen(f"http://127.0.0.1:{PORT}/json")
    tabs = json.loads(resp.read().decode('utf-8'))
    ws_url = tabs[0]['webSocketDebuggerUrl']

    import websocket  # check if websocket-client is installed
except Exception as e:
    print(f"Direct WS failed or module missing: {e}")
finally:
    proc.terminate()
