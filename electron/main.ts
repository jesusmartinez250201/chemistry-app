import { app, BrowserWindow, ipcMain } from "electron";
//import { createRequire } from 'node:module'
import { fileURLToPath } from "node:url";
import path from "node:path";
import Store from "electron-store";
//const require = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const store = new Store();

const colorPalettes = [
  {
    name: "Modo claro",
    colors: ["#F8F9FA", "#A7AEB5", "#81888F", "#212529", "#050608"],
    background: "#F8F9FA",
    "3dBackground": "#F8F9FA",
    navbarBackground: "#212529",
    controlsHeaderBackground: "#050608",
    controlsBackground: "#A7AEB5",
    lines3d: "#050608",
    text: "#050608",
    textTitles: "#050608",
    textLegend: "#050608",
    textControlsHeader: "#F8F9FA",
    navbarFillIcons: "#F8F9FA",
    controlsIcons: "050608",
    navbarIcons: "#F8F9FA",
    navbarText: "#F8F9FA",
    buttonHover: "#81888F",
    selectedButton: "#81888F",
    selectedButtonHover: "#F8F9FA",
    sliderColor: "#81888F",
    sliderThumb: "#F8F9FA",
    checkbox: "#212529",
    scrollbarTrack: "#F8F9FA",
    scrollbarThumb: "#81888F",
    scrollbarThumbHover: "#050608",
    controlsScrollbarTrack: "#A7AEB5",
    controlsScrollbarThumb: "#81888F",
    controlsScrollbarThumbHover: "#050608",
  },
  {
    name: "Modo oscuro",
    colors: ["F8F9FA", "#CED4DA", "#7C8C9C", "#56606B", "#212529"],
    background: "#212529",
    "3dBackground": "#212529",
    navbarBackground: "#212529",
    controlsHeaderBackground: "#56606B",
    controlsBackground: "#56606B",
    lines3d: "#CED4DA",
    text: "#CED4DA",
    textTitles: "#F8F9FA",
    textLegend: "#7C8C9C",
    textControlsHeader: "#F8F9FA",
    navbarFillIcons: "#F8F9FA",
    controlsIcons: "#CED4DA",
    navbarIcons: "#F8F9FA",
    navbarText: "#F8F9FA",
    buttonHover: "#7C8C9C",
    selectedButton: "#7C8C9C",
    selectedButtonHover: "#F8F9FA",
    sliderColor: "#CED4DA",
    sliderThumb: "#7C8C9C",
    checkbox: "#7C8C9C",
    scrollbarTrack: "#212529",
    scrollbarThumb: "#56606B",
    scrollbarThumbHover: "#7C8C9C",
    controlsScrollbarTrack: "#56606B",
    controlsScrollbarThumb: "#7C8C9C",
    controlsScrollbarThumbHover: "#CED4DA",
  },
];

if (!store.get('colorPalettesSet')) {
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
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: (store.get("colorPalettes") as typeof colorPalettes)[store.get("selectedColorPalette") as number].navbarBackground,
      symbolColor: (store.get("colorPalettes") as typeof colorPalettes)[store.get("selectedColorPalette") as number].navbarText,
    },
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
