const { app, BrowserWindow, ipcMain } = require('electron');
const  fs = require('fs');
const path = require("node:path");
const spawnrec = require('child_process').spawn;
const spawner = require('child_process').spawn;
const date = new Date()

const filePath = './setup.json';

function startReceiving(){
  const pythonprocess = spawnrec('python', ['rec.py']);
  pythonprocess.stdout.on('data', (data) => {
    console.log('From python: ' + data)
  });
  pythonprocess.on('close', (code) => {
    startReceiving();
  });
}

startReceiving();

function writeJSONToFile(filePath, choice) {
  var jsonData;
  switch (choice) {
    case 0:
      jsonData = {
        setup: 'not',
        date : date
      };
    break;
    case 1:
      jsonData = {
        setup: 'done',
        date : date
      };
    break;
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

  ipcMain.on('saveconfig', (event, data) => {
    console.log(data)
    writeJSONToFile(filePath, data);
  });

  ipcMain.on('writeserial', (event,data) => {
    const pyprocess = spawner('python', ['wri.py', data[0], JSON.stringify(data[1])]); 
    pyprocess.stdout.on('data', (data) => {
      console.log('From python: ' + data)
    })  
    setTimeout(() => {
      pyprocess.kill()
    }, 1000)
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
        const process = spawner('python', ['wri.py', 2]);
        process.stdout.on('data', (data) => {
          console.log('From python: ' + data)
        })  
      }
    }
  })

}

app.whenReady().then(() => {
  createWindow();
});



