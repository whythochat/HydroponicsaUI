const { app, BrowserWindow } = require('electron');
const  fs = require('fs');

//const spawner = require('child_process').spawn;


const createWindow = () => {
  const win = new BrowserWindow({

    //fullscreen: true,
    autoHideMenuBar: true,
    width: 854,
    height: 480,
  })
  fs.readFile('./setup.json', 'utf8', (err, data) => {
    if(err) {
      console.log(err);
    }
    else{
      const setup = JSON.parse(data);
      if(setup.setup === 'not'){
        win.loadFile('./setup.html');
      }
      else{
        win.loadFile('./index.html');
      }
    }
  })
}

app.whenReady().then(() => {
  createWindow();
  //const pass = 'Hello';
  //const pythonresp = spawner('python', ['./comms.py', pass]);
  //pythonresp.stdout.on('data', (data) => {
  //  console.log('Received data:', data.toString());
  //});
});

