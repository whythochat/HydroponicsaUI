const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  writejson: (data) => ipcRenderer.send('writejson', data),
  saveconfig: () => ipcRenderer.send('saveconfig'),
})