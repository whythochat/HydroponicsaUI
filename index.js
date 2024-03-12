const { app, BrowserWindow } = require('electron');

const { SerialPort } = require('serialport')

const createWindow = () => {
  const win = new BrowserWindow({

    fullscreen: true,
    autoHideMenuBar: true
  })

  win.loadFile('index.html')
}

function serialf(){
  const port = new SerialPort({
    path: '/dev/ttyS0',
    baudRate: 9600,
  })
  
  port.on('readable', function () {
    console.log('Data:', port.read())
  })

  port.write('main screen turn on', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message)
    }
    console.log('message written')
  })
}

app.whenReady().then(() => {
  createWindow();
  serialf();
});

