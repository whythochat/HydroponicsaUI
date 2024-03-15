const { app, BrowserWindow } = require('electron');

const spawner = require('child_process').spawn;

const createWindow = () => {
  const win = new BrowserWindow({

    fullscreen: true,
    autoHideMenuBar: true
  })
}

app.whenReady().then(() => {
  createWindow();
  const pass = 'Hello';
  const pythonresp = spawner('python', ['./comms.py', pass]);
  pythonresp.stdout.on('data', (data) => {
    console.log('Received data:', data.toString());
  });
});

