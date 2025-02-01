import HomeMenu from "./components/home/HomeMenu";
import ElementData from "./components/PeriodicTable/ElementData";
import { Routes, Route, HashRouter, useLocation } from "react-router-dom";
import CrystallineStructure from "./components/Crystalline Structure/CrystallineStructure";
import BohrModelPage from "./components/BohrModel/BohrModelPage";
import BondsPage from "./components/Bonds/BondsPage";
import SettingsPage from "./components/SettingsPage";
import About from "./components/About";
import TitleBar from "./components/TitleBar";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import ScrollStyleConfig from "./components/ScrollStyleConfig";

declare global {
  interface Window {
    data: {
      store: {
        set: (key: string, value: Array<unknown>) => void;
        get: (key: string) => unknown;
      };
    };
  }
}

import { colorPalettes } from "./components/utils/ColorPalettes.json";

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen">
      <TitleBar />
      <Navbar />
      <div
        id="content"
        className={`flex-1 overflow-y-scroll items-center ${
          location.pathname !== "/" ? "no-scrollbar" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<HomeMenu />} />
          <Route path="/element/:atomicNumber" element={<ElementData />} />
          <Route
            path="CrystallineStructure"
            element={<CrystallineStructure />}
          />
          <Route path="BohrModel" element={<BohrModelPage />} />
          <Route path="Bonds" element={<BondsPage />} />
          <Route path="Settings" element={<SettingsPage />} />
          <Route path="About" element={<About />} />
        </Routes>
      </div>
      <ScrollStyleConfig />
    </div>
  );
}

function App() {
  useEffect(() => {
    window.data.store.set("colorPalettes", colorPalettes);
  }, []);

  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
