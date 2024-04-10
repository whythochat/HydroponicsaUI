import serial
import json


import gc
gc.collect()

ser = serial.Serial(port='/dev/ttyS0', baudrate=9600, timeout=1)    #Open port with baud rate

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
import serial
import time
import json

# Configure the serial port
serial_port = '/dev/ttyS0'  # Change this to match your UART port
baud_rate = 9600  # Change this to match your baud rate

# Open the serial port
ser = serial.Serial(serial_port, baud_rate)

# Open a file for writing
output_file = open('info.json', 'w')  # 'a' for append mode

try:
    while True:
        # Check if there is data available to read
        if ser.in_waiting > 0:
            # Read data from the UART port
            data = ser.read(ser.in_waiting).decode().strip()
            data = json.loads(data)
            print(data)
            # Write the data to the file
            json.dumps(data, output_file)
            output_file.flush()  # Flush the buffer to ensure data is written immediately
        else:
            # Wait for a short time before checking again
            time.sleep(0.1)  # Adjust the sleep duration as needed
finally:
    # Close the serial port and file when done
    ser.close()
    output_file.close()
'''