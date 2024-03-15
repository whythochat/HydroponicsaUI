const { app, BrowserWindow } = require('electron');
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

const port = new SerialPort({
  path: '/dev/ttyS0',
  baudRate: 9600,
})

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

function send() {
  port.write('Hello Uday')
}

const createWindow = () => {
  const win = new BrowserWindow({

    fullscreen: true,
    autoHideMenuBar: true
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow();
  var receivedData = ''
  port.on('data', data => {
    // Convert buffer data to string
    var strData = data.toString();
    // Concatenate the string data
    receivedData += strData;
    // Check if you received a complete message
    if (receivedData.endsWith('END')) {
        // Process the complete message
        console.log('Received message:', receivedData);
        // Clear the buffer for the next message
        receivedData = '';
        send()
    }
  });

});

