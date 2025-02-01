//import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/style.css";
import { ColorPaletteProvider } from "./components/context/ColorPaletteContext.jsx";
import { FullScreenProvider } from './components/context/fullScreenContext';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <FullScreenProvider>
    <ColorPaletteProvider>
      <App />
    </ColorPaletteProvider>
  </FullScreenProvider>
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
