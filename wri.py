import serial
import json
import sys

ser = serial.Serial(port='com6', baudrate=9600, timeout=1)

fun = sys.argv[1]