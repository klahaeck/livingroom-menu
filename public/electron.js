const { app, BrowserWindow, Tray, Menu } = require('electron');
const path = require('path');
// const fs = require('fs');
// const url = require('url');
const appUpdater = require('./autoupdater');
const isDev = require('electron-is-dev');

let tray;
let window;

app.dock.hide();

app.on('ready', () => {
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Quit', click: () => { app.quit(); } }
  ]);

  // Setup the menubar with an icon
  // let icon = nativeImage.createFromDataURL(base64Icon);
  tray = new Tray(path.join(__dirname, 'Template.png'));

  tray.setToolTip('Fallon Living Room Remote');

  tray.on('click', function(event) {
    if (event.altKey) {
      tray.popUpContextMenu(contextMenu);
    } else {
      toggleWindow();
    }

    // Show devtools when command clicked
    if (window.isVisible() && process.defaultApp && event.metaKey) {
      window.openDevTools({mode: 'detach'});
    }
  });

  tray.on('right-click', function() {
    tray.popUpContextMenu(contextMenu);
  });

  window = new BrowserWindow({
    width: 300,
    height: 320,
    show: false,
    frame: false,
    resizable: false,
    darkTheme: true,
    // skipTaskbar: true
    // useContentSize: true,
    // icon: path.join(__dirname, 'icon.png')
    // autoHideMenuBar: true
  });

  // Tell the popup window to load our index.html file
  window.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

  // window.loadURL('https://fallondev.com/livingroom');
  // window.webContents.on('did-finish-load', function() {
  //   fs.readFile(__dirname + '/public/test.css', 'utf-8', function(error, data) {
  //     if(!error) {
  //       // var formatedData = data.replace(/\s{2,10}/g, ' ').trim();
  //       window.webContents.insertCSS(data);
  //     }
  //   });
  // });

  // Only close the window on blur if dev tools isn't opened
  window.on('blur', () => {
    if(!window.webContents.isDevToolsOpened()) {
      window.hide();
    }
  });

  if (!isDev) {
    // Initate auto-updates on macOs and windows
    appUpdater();
  }
});

const toggleWindow = () => {
  if (window.isVisible()) {
    window.hide();
  } else {
    showWindow();
  }
};

const showWindow = () => {
  const trayPos = tray.getBounds();
  const windowPos = window.getBounds();
  let x, y = 0;
  if (process.platform == 'darwin') {
    x = Math.round(trayPos.x + (trayPos.width / 2) - (windowPos.width / 2));
    y = Math.round(trayPos.y + trayPos.height);
  } else {
    x = Math.round(trayPos.x + (trayPos.width / 2) - (windowPos.width / 2));
    y = Math.round(trayPos.y + trayPos.height * 10);
  }


  window.setPosition(x, y, false);
  window.show();
  window.focus();
};

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
