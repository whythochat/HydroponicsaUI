const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  writejson: (data) => ipcRenderer.send('writeserial', data),
  saveconfig: () => ipcRenderer.send('saveconfig'),
})