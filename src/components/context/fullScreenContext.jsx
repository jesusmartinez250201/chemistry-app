import { createContext, useState } from 'react';

const FullScreenContext = createContext();

export const FullScreenProvider = ({ children }) => {
  const [isFullScreen, setFullScreen] = useState(window.ipcRenderer.isFullScreen());

  const toggleFullScreen = () => {
    setFullScreen(!isFullScreen);
    window.ipcRenderer.setFullScreen(!isFullScreen);
  };

  return (
    <FullScreenContext.Provider value={{ isFullScreen, toggleFullScreen }}>
      {children}
    </FullScreenContext.Provider>
  );
};

export default FullScreenContext;