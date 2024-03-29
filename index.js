const { app, BrowserWindow, ipcMain } = require('electron');
const  fs = require('fs');
const path = require("node:path");
const spawner = require('child_process').spawn;


const filePath = './setup.json';
var jsonData = {
  setup: 'done'
}

function writeJSONToFile(filePath, jsonData) {
  fs.writeFile(filePath, JSON.stringify(jsonData, null, 4), (err) => {
      if (err) {
          console.error('Error writing JSON file:', err);
      } else {
          console.log('JSON file has been saved successfully.');
      }
  });
}

const createWindow = () => {
  const win = new BrowserWindow({

    //fullscreen: true,
    autoHideMenuBar: true,
    width: 800,
    height: 480,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  ipcMain.on('saveconfig', () => {
    writeJSONToFile(filePath, jsonData);
  });

  ipcMain.on('writejson', (event, data) => {
    const pyprocess = spawner('python', ['wri.py', data]); 
    pyprocess.stdout.on();   
  });

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
  const pythonprocess = spawner('python', ['rec.py']);
  pythonprocess.stdout.on('data', (data) => {
    console.log('From python: ' + data)
  })
});



