import { ipcRenderer, contextBridge } from "electron";

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld("ipcRenderer", {
  on(...args: Parameters<typeof ipcRenderer.on>) {
    const [channel, listener] = args;
    return ipcRenderer.on(channel, (event, ...args) =>
      listener(event, ...args)
    );
  },
  off(...args: Parameters<typeof ipcRenderer.off>) {
    const [channel, ...omit] = args;
    return ipcRenderer.off(channel, ...omit);
  },
  send(...args: Parameters<typeof ipcRenderer.send>) {
    const [channel, ...omit] = args;
    return ipcRenderer.send(channel, ...omit);
  },
  invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
    const [channel, ...omit] = args;
    return ipcRenderer.invoke(channel, ...omit);
  },

  // You can expose other APTs you need here.
  // ...
  getAppMetrics() {
    return ipcRenderer.sendSync("app-metrics");
  },
  writeFile(path: string, data: string) {
    return ipcRenderer.sendSync("write-file", path, data);
  },
  readFile(path: string) {
    return ipcRenderer.sendSync("read-file", path);
  },
  modifyFile(path: string, data: object) {
    return ipcRenderer.sendSync("modify-file", path, data);
  },
  getAppPath() {
    return ipcRenderer.invoke("get-app-path");
  },

  quit() {
    ipcRenderer.send("app-quit");
  },
  minimize() {
    ipcRenderer.send("app-minimize");
  },
  maximize() {
    ipcRenderer.send("app-maximize");
  },
  unmaximize() {
    ipcRenderer.send("app-unmaximize");
  },
  isMaximized() {
    return ipcRenderer.sendSync("app-isMaximized");
  },
  restore() {
    ipcRenderer.send("app-restore");
  },
  isFullScreen() {
    return ipcRenderer.sendSync("full-screen");
  },
  setFullScreen(value: boolean) {
    ipcRenderer.send("set-full-screen", value);
  },
});

contextBridge.exposeInMainWorld("data", {
  store: {
    get(key: string) {
      return ipcRenderer.sendSync("electron-store-get", key);
    },
    set(property: string, val: unknown) {
      ipcRenderer.send("electron-store-set", property, val);
    },
    // Other method you want to add like has(), reset(), etc.
  },
});
