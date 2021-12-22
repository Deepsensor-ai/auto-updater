const { app, BrowserWindow, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');



let mainWindow;
process.env.NODE_ENV = 'production' 
require('update-electron-app')()

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadFile('test.html');
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// mainWindow.once('ready-to-show', () => {
//     console.log("Show..")
//     mainWindow.show = true
//    // autoUpdater.checkForUpdatesAndNotify();
// });


app.on('ready', () => {
  createWindow();
});

// app.on('window-all-closed', function () {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('activate', function () {
//   if (mainWindow === null) {
//     createWindow();
//   }
// });

// ipcMain.on('app_version', (event) => {
//   event.sender.send('app_version', { version: app.getVersion() });
// });

// ipcMain.on('restart_app', () => {
//     autoUpdater.quitAndInstall();
//   });
// autoUpdater.on('update-available', () => {
//     mainWindow.webContents.send('update_available');
//   });
//   autoUpdater.on('update-downloaded', () => {
//     mainWindow.webContents.send('update_downloaded');
//   });
