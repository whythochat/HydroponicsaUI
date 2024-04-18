import serial
import json
import time

import gc
gc.collect()

ser = serial.Serial(port='/dev/ttyS0', baudrate=9600, timeout=0.5)    #Open port with baud rate
'''
while True:
    while ser.in_waiting < 1:
        pass
    line = ser.readline().decode()
    print(line, end="\n")
    line = json.loads(line)
    if type(line) is not dict:
        continue
    with open('info.json', 'w') as f:
        json.dump(line, f)
        f.flush()
'''

while True:
    if ser.in_waiting > 0:
        data = ser.readline().decode().strip()
        jsonData = json.loads(data)
        print(jsonData)
        with open('info.json', 'w') as f:
            json.dump(jsonData, f)
            f.flush()
    else:
        #print("Received nothing")
        time.sleep(0.1)
''''''