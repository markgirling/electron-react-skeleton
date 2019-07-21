const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  if (process.env.NODE_ENV == "production") {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    win.loadURL("http://0.0.0.0:3000/index.html");
  }
}

app.on('ready', createWindow);
