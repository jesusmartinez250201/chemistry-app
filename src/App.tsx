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
import { useEffect } from "react";

declare global {
  interface Window {
    data: {
      store: {
        set: (key: string, value: unknown) => void;
      };
    };
  }
}
import { colorPalettes } from './components/utils/ColorPalettes.json';

function App() {

  useEffect(() => {
    window.data.store.set('colorPalettes', colorPalettes);
  }, []);
  return (
    <>
      <HashRouter>
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
      </HashRouter>
    </>
  );
}

export default App;
