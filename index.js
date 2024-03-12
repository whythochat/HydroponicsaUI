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
  parser.on('data', console.log(data))
});

