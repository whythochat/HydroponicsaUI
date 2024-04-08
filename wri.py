import serial
import json
import sys

ser = serial.Serial(port='/dev/ttyS0', baudrate=9600, timeout=1)

func = sys.argv[1]

match func:
    case 3:
        data = sys.argv[2]
        ser.write(data)
        print("Sent setup data")