const {app, BrowserWindow} = require('electron');
const path = require('path')
function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      minWidth: 800,
      minHeight: 610,
      /*webPreferences: {
        preload: path.join(__dirname, '/src/js/preload.js')
      }*/
    })
  
    win.loadFile(__dirname + '/src/views/signin.html')
  }

app.whenReady().then(() => {
    createWindow()
  })

  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })
  