const { contextBridge, ipcRenderer } = require('electron/renderer');

contextBridge.exposeInMainWorld('electronAPI', {
  writeserial: (data) => ipcRenderer.send('writeserial', data),
  saveconfig: (data) => ipcRenderer.send('saveconfig', data),
})