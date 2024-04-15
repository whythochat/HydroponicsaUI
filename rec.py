import serial
import json


import gc
gc.collect()

ser = serial.Serial(port='/dev/ttyS0', baudrate=9600, timeout=1000)    #Open port with baud rate

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

