// preload.js
const { contextBridge, webFrame, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  zoomIn: () => webFrame.setZoomLevel(webFrame.getZoomLevel() + 1),
  zoomOut: () => {
    webFrame.setZoomLevel(webFrame.getZoomLevel() - 1);
  },
  message: () => {
    console.log("Hello from preload.js, I am working Perfectly");
  },
  sendMessageToMain: (msg) => ipcRenderer.send("message-to-main", msg),
  messageFromMain: (callback) => {
    ipcRenderer.on("message-to-render", (event, arg) => {
      callback(arg);
    });
  },
  closeWindow: () => ipcRenderer.send("window-close"),
  minimizeWindow: () => ipcRenderer.send("window-minimize"),
  maximizeWindow: () => ipcRenderer.send("window-maximize"),
});

console.log(process.versions);
