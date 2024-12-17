const {
  app,
  BrowserWindow,
  Menu,
  ipcMain,
  globalShortcut,
} = require("electron");
const { createWindow } = require("./Window");

let win; // Declare win
let mainWindowState; // Declare mainWindowState

app.on("ready", () => {
  // Create window after app is ready
  const windowData = createWindow();
  win = windowData.win; // Assign win
  mainWindowState = windowData.mainWindowState; // Assign window state
});

// Save the state when the app is about to quit
app.on("will-quit", () => {
  if (win && mainWindowState) {
    console.log("Saving window state");
    mainWindowState.saveState(win);
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    const windowData = createWindow(); // Re-create window on macOS when re-activating
    win = windowData.win;
    mainWindowState = windowData.mainWindowState;
  }
});

app.on("browser-window-focus", () => {
  console.log("Window focused");
});

app.on("browser-window-blur", () => {
  console.log("Window blurred");
});

ipcMain.on("window-close", () => {
  win.close();
});

ipcMain.on("window-minimize", () => {
  win.minimize();
  console.log("widnow is minimized");
});

ipcMain.on("window-maximize", () => {
  if (win.isMaximized()) {
    win.restore();
  } else {
    win.maximize();
  }
});
app.on("will-quit", () => {
  globalShortcut.unregisterAll(); // Unregister all shortcuts
});
