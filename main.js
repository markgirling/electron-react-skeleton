const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  if (process.env.NODE_ENV === 'development') {
    win.loadURL("http://0.0.0.0:3000/index-dev.html");
  } else {
    win.loadFile(path.join(__dirname, 'index-prod.html'));
  }
}

app.on('ready', createWindow);
