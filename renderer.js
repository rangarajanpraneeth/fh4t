const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
   const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
         nodeIntegration: true
      }
   });

   mainWindow.loadFile(path.join(__dirname, 'app.html'));
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
   if (process.platform !== 'darwin') {
      app.quit();
   }
});

app.on('activate', function () {
   if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
   }
});
