const { app, BrowserWindow, Menu, ipcMain } = require("electron");

//Main Process Events file
require("./modules/mainProcessEvents.js");

// Handle the message from the render process
ipcMain.on("message-to-main", (event, arg) => {
  console.log(arg); // "Hello from the render process!"
  // You can send a reply if needed
  event.reply("message-to-render", "Hello from the main process!");
});
