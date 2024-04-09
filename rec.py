import serial
import json

ser = serial.Serial(port='com6', baudrate=9600, timeout=1)    #Open port with baud rate

while True:
    while True:
        if ser.in_waiting > 0:
            break
    line = ser.readline().decode()
    print(line)
    line = json.loads(line)
    with open('info.json', 'w') as f:
        json.dump(line, f)