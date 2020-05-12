const {app, BrowserWindow} = require('electron');
const {spawn} = require('child_process');


let pyServer=spawn('C:\\Users\\il\\Desktop\\Новая папка (11)\\venv\\Scripts\\python.exe',['index.py'])


function boot() {
    mainWindow = new BrowserWindow({
        titleBarStyle: "hidden",
        width: 1000,
        height: 700,
    });
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL("http://localhost:8888");
}

app.on('ready', boot)