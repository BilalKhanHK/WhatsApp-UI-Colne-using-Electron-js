const { app, BrowserWindow, Menu, globalShortcut } = require("electron");
const path = require("path");
const windowStateKeeper = require("electron-window-state");

const createWindow = () => {
  const mainWindowState = windowStateKeeper({
    defaultWidth: 620,
    defaultHeight: 700,
  });

  const win = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    webPreferences: {
      preload: path.join(__dirname, "../preload.js"),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
    frame: false,
  });
  // Remove the default menu
  Menu.setApplicationMenu(null);
  // Load your React app
  win.loadURL("http://localhost:5173");

  // Manage the window state
  mainWindowState.manage(win);

  globalShortcut.register("Control+R", () => {
    // Only reload if the window is still open
    if (win && !win.isDestroyed()) {
      win.reload();
    }
  });

  globalShortcut.register("Control+Shift+I", () => {
    if (win && !win.isDestroyed()) {
      win.webContents.toggleDevTools(); // Toggle Developer Tools
    }
  });

  globalShortcut.register("Control+Shift+R", () => {
    if (win && !win.isDestroyed()) {
      // Close the current window
      const currentWindow = win;
      currentWindow.close();

      // Wait for the window to close before creating a new one
      currentWindow.on("closed", () => {
        createWindow(); // Create a new window
      });
    }
  });

  // Return the window and state for use in the main process
  return { win, mainWindowState };
};

module.exports = { createWindow };
