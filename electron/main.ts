import { app, BrowserWindow, ipcMain, shell } from "electron";
//import { createRequire } from 'node:module'
import { fileURLToPath } from "node:url";
import path from "node:path";
// import fs from 'fs';
import Store from "electron-store";
import { colorPalettes } from '../src/components/utils/ColorPalettes.json';
//const require = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const store = new Store();

const versionPhase = "beta";

const OPERATIVE_SYSTEM = process.platform;

store.set("colorPalettes", ""); //Restore default color palettes
store.set("colorPalettes", colorPalettes);

if (!store.get("colorPalettesSet")) {
  store.set("selectedColorPalette", 0);
  store.set("colorPalettesSet", true);
}

if (store.get("full-screen") === undefined) {
  store.set("full-screen", true);
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
    width: 664,
    height: 768,
    maximizable: OPERATIVE_SYSTEM !== 'linux',
    resizable: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
    },
    show: false,
    minWidth: 664,
    minHeight: 768,
    frame: OPERATIVE_SYSTEM === "darwin",
    fullscreen: OPERATIVE_SYSTEM === "darwin" ? false : store.get("full-screen") as boolean,
    autoHideMenuBar: true,
  });

  win.maximize();

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
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
      splash.destroy();
    }
    if (win) {
      win.show();
      win.setMenu(null);
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

// ipcMain.handle("app-metrics", async () => {
//   return app.getAppMetrics();
// });

// ipcMain.handle("write-file", async (_, filePath, data) => {
//   try {
//     fs.writeFileSync(filePath, data, "utf-8");
//     return true;
//   } catch (error) {
//     console.error("Error writing file:", error);
//     return false;
//   }
// });

// ipcMain.on("read-file", (event, filePath) => {
//   try {
//     const data = fs.readFileSync(filePath, "utf-8");
//     event.returnValue = data;
//   } catch (error) {
//     console.error("Error reading file:", error);
//     event.returnValue = null;
//   }
// });
// ipcMain.on("modify-file", (event, filePath, newData) => {
//   try {
//     const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
//     const updatedData = { ...data, ...newData };
//     fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), "utf-8");
//     event.returnValue = true;
//   } catch (error) {
//     console.error("Error modifying file:", error);
//     event.returnValue = false;
//   }
// });
// ipcMain.handle("get-app-path", async () => {
//   return app.getPath('userData');
// });
ipcMain.on("app-version", async (event) => {
  event.returnValue = versionPhase + ' ' + app.getVersion();
});
ipcMain.on("open-external", async (_, url) => {
  shell.openExternal(url);
});
ipcMain.on("full-screen", async (event) => {
  event.returnValue = win ? win.isFullScreen() : false;
});
ipcMain.on("set-full-screen", async (_, value) => {
  store.set("full-screen", value);
  win?.setFullScreen(value);
});
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
ipcMain.handle("get-os", async () => {
  return OPERATIVE_SYSTEM;
});
