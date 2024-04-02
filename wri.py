import serial
import json
import sys

ser = serial.Serial(port='/dev/ttyS0', baudrate=9600, timeout=1)

func = sys.argv[1]

match func:
    case 1:
        ser.write("DO pH Calibration")
    case 2:
        ser.write("Turn on the lights")
    case 3:
        data = sys.argv[2]
        ser.write(data)