import serial
from time import sleep

ser = serial.Serial ("/dev/ttyS0", 9600, timeout=1)    #Open port with baud rate

import sys 

input = sys.argv[1]

if input == 'Hello':
    print('This is from python')


received_data = ser.read(1024)
print (received_data)
ser.write("Hi Uday")
sys.stdout.flush
