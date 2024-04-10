import serial
import json
import sys

ser = serial.Serial(port='/dev/ttyS0', baudrate=9600, timeout=1)

data = sys.argv[2]
ser.write(data.encode())
print("Sent setup data")