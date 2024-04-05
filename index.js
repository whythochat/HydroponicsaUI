const { app, BrowserWindow, ipcMain } = require('electron');
const  fs = require('fs');
const path = require("node:path");
const spawner = require('child_process').spawn;


const filePath = './setup.json';


function writeJSONToFile(filePath, choice) {
  var jsonData;
  switch (choice) {
    case 0:
      jsonData = {
        setup: 'not'
      }
    case 1:
      jsonData = {
        setup: 'done'
      }
  }
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
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  ipcMain.on('saveconfig', (data) => {
    writeJSONToFile(filePath, data);
  });

  ipcMain.on('writeserial', (event, data) => {
    const pyprocess = spawner('python', ['wri.py', data[0], JSON.stringify(data[1])]); 
    pyprocess.stdout.on('data', (data) => {
      console.log('From python: ' + data)
    })  
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
        const process = spawner('python', ['wri.py', 2]);
        pyprocess.stdout.on('data', (data) => {
          console.log('From python: ' + data)
        })  
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



