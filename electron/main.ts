import { app, BrowserWindow, ipcMain } from "electron";
//import { createRequire } from 'node:module'
import { fileURLToPath } from "node:url";
import path from "node:path";
import Store from "electron-store";
import { colorPalettes } from '../src/components/utils/ColorPalettes.json';
//const require = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const store = new Store();

//store.set("colorPalettes", ''); //Restore default color palettes

if (!store.get('colorPalettesSet') || !store.get('colorPalettes')) {
  store.set('colorPalettes', colorPalettes);
  store.set('selectedColorPalette', 0);
  store.set('colorPalettesSet', true);
}

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │
process.env.APP_ROOT = path.join(__dirname, "..");

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
export const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
export const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;

let win: BrowserWindow | null;
let splash: BrowserWindow | null;

function createWindow() {
  splash = new BrowserWindow({
    width: 350,
    height: 450,
    frame: false,
    transparent: true,
    resizable: false,
    center: true,
    movable: false,
    skipTaskbar: true,
  });

  win = new BrowserWindow({
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
    },
    show: false,
    minWidth: 664,
    minHeight: 630,
    frame: false,
    // titleBarOverlay: {
    //   //color: (store.get("colorPalettes") as typeof colorPalettes)[store.get("selectedColorPalette") as number].navbarBackground,
    //   color: 'transparent',
    //   //symbolColor: (store.get("colorPalettes") as typeof colorPalettes)[store.get("selectedColorPalette") as number].navbarText,
    //   symbolColor: 'transparent',
    // },
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    // win.loadFile(path.join(RENDERER_DIST, 'index.html'))
    splash.loadFile(path.join(process.env.VITE_PUBLIC, "loading.html"));
  }

  const loadMainContent = () => {
    if (!win) return;
    if (VITE_DEV_SERVER_URL && win) {
      win.loadURL(VITE_DEV_SERVER_URL);
    } else {
      win.loadFile(path.join(RENDERER_DIST, "index.html"));
    }
    win.webContents.off("did-finish-load", loadMainContent);
  };

  win.webContents.on("did-finish-load", () => {
    if (splash) {
      splash.hide();
    }
    if (win) {
      win.show();
    }
    //splash.webContents.openDevTools();
  });

  loadMainContent();

  win.webContents.on("before-input-event", (event, input) => {
    if (win) {
      if (input.code === "F12") {
        win.webContents.openDevTools();
      } else if (
        input.code === "F5" ||
        (input.control && input.key.toLowerCase() === "r")
      ) {
        event.preventDefault();
        win.reload();
      }
    }
  });

  win.on("closed", () => {
    if (splash) {
      splash.close();
    }
  });
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.whenReady().then(createWindow);

ipcMain.on("electron-store-get", async (event, val) => {
  event.returnValue = store.get(val);
});
ipcMain.on("electron-store-set", async (_, key, val) => {
  store.set(key, val);
});
ipcMain.on("app-quit", async () => {
  win?.close();
});
ipcMain.on("app-minimize", async () => {
  win?.minimize();
});
ipcMain.on("app-maximize", async () => {
  win?.maximize();
});
ipcMain.on("app-unmaximize", async () => {
  win?.unmaximize();
});
ipcMain.on("app-isMaximized", async (event) => {
  event.returnValue = win?.isMaximized();
});
ipcMain.on("app-restore", async () => {
  win?.restore();
});

