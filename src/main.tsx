//import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/style.css";
import { ColorPaletteProvider } from "./components/context/ColorPaletteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  //   <ColorPaletteProvider>
  //     <App />
  //   </ColorPaletteProvider>
  // </React.StrictMode>
  <ColorPaletteProvider>
    <App />
  </ColorPaletteProvider>
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
