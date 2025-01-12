{
  /***************
   * COMPONENTS *
   **************/
}
import HomeMenu from "./components/home/HomeMenu";
import ElementData from "./components/PeriodicTable/ElementData";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Test } from "./components/home/Test";
import CrystallineStructure from "./components/Crystalline Structure/CrystallineStructure";
import BohrModelPage from "./components/BohrModel/BohrModelPage";
import BondsPage from "./components/Bonds/BondsPage";
import SettingsPage from "./components/SettingsPage";
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

function App() {
  useEffect(() => {
    window.data.store.set("colorPalettes", colorPalettes);
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <TitleBar />
      <HashRouter>
        <Navbar />
        <div id='content' className="flex-1 overflow-y-scroll p-0">
          <Routes>
            <Route path="/" element={<HomeMenu />} />
            <Route path="/test" element={<Test />} />
            <Route path="/element/:atomicNumber" element={<ElementData />} />
            <Route
              path="CrystallineStructure"
              element={<CrystallineStructure />}
            />
            <Route path="BohrModel" element={<BohrModelPage />} />
            <Route path="Bonds" element={<BondsPage />} />
            <Route path="Settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </HashRouter>
      <ScrollStyleConfig />
    </div>
  );
}

export default App;
