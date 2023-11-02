import { app, ipcMain, dialog, BrowserWindow } from 'electron'
import path from 'path'
import os from 'os'


// needed in case process is undefined under Linux
const platform = process.platform || os.platform()

let mainWindow

async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog({})
  if (!canceled) {
    return filePaths[0]
  }
}

async function openGame() {

  //var bit = await PLAY.hunt(ActPly.OPEN_PLAY, { val: 0 })
  return {}
}

async function createWindow() {

  ipcMain.handle('dialog:openFile', handleFileOpen)
  ipcMain.handle('game:openGame', openGame)

  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
    width: 480,
    height: 480,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
    }
  })

  mainWindow.setPosition(-950, 250);

  //mainWindow.setPosition(950, 250);
  mainWindow.maximize();

  console.log("in the beginning...")

  // IPC listener
  ipcMain.on('electron-store-get', async (event, val) => {

    bit = await TIME.hunt(ActTme.INIT_TIME, { val: 0 })
    event.returnValue = JSON.stringify(bit);

  });
  ipcMain.on('electron-store-set', async (event, key, val) => {
    store.set('alligator', 0);
  });


  mainWindow.loadURL(process.env.APP_URL)

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools()
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools()
    })
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
