const { app, BrowserWindow } = require('electron')

//注册并初始化一下electron/remote
const remoteMain = require("@electron/remote/main")
remoteMain.initialize()

app.whenReady().then(createWindow)
function createWindow() {
    let win = new BrowserWindow({
        webPreferences: {
            //启用相关配置
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    //启用electron/remote
    remoteMain.enable(win.webContents)
    win.loadFile('index.html')
}

/*
关于remote模块
  v13以后remote被移出electron，成为可选的package，@electron/remote相关资料非常少，这里记录一下

  npm install --save @electron/remote
  const remoteMain = require("@electron/remote/main")
  remoteMain.initialize()
  remoteMain.enable(win.webContents)
  const { BrowserWindow } = require('@electron/remote')
  
*/