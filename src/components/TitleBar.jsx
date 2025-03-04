import TitlebarIcon from "./Icons/TitlebarIcon";
import CloseIcon from "./Icons/CloseIcon";
import MaximizeIcon from "./Icons/MaximizeIcon";
import MinimizeIcon from "./Icons/MinimizeIcon";
import RestoreIcon from "./Icons/RestoreIcon";
import FullScreenContext from "./context/fullScreenContext";
import { useRef, useState, useEffect, useContext } from "react";

export default function TitleBar() {
  const titleBarRef = useRef(),
    closeRef = useRef(),
    minimizeRef = useRef(),
    maximizeRef = useRef(),
    restoreRef = useRef(),
    [hover, setHover] = useState({ close: false, minimize: false, maximize: false, restore: false }),
    isMaximized = window.ipcRenderer.isMaximized(),
    { isFullScreen, toggleFullScreen } = useContext(FullScreenContext),
    colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')],
    [operativeSystem, setOperativeSystem] = useState(null),
    handleHover = (e) => {
      const { value } = e.target;
      setHover(prev => ({ ...prev, [value]: !prev[value] }));
    };

  useEffect(() => {
    const fetchOS = async () => {
      const os = await window.ipcRenderer.getOS();
      setOperativeSystem(os);
    };
    fetchOS();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.ipcRenderer.isMaximized()) {
        maximizeRef.current.style.display = 'none';
        restoreRef.current.style.display = 'flex';
      } else {
        maximizeRef.current.style.display = 'flex';
        restoreRef.current.style.display = 'none';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMaximized]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'F11') {
        toggleFullScreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleFullScreen]);

  if (operativeSystem === null) {
    return null; // or a loading spinner
  }

  return (
    operativeSystem !== 'darwin' ? (
      <div id="titleBar" ref={titleBarRef} className="font-mono flex items-center justify-between w-full unselectable"
        style={{ backgroundColor: colorPalette.navbarBackground, color: colorPalette.navbarFillIcons, stroke: colorPalette.navbarFillIcons }}>
        <span className="flex items-center" onClick={() => window.ipcRenderer.quit()}>
          <TitlebarIcon className={'w-6 h-auto ml-1 p-1'} />
          chemistry-app
        </span>
        <div className="flex items-center">
          <button type="button" value={'minimize'} ref={minimizeRef}
            className="flex items-center justify-center title-button transition-all"
            onClick={() => window.ipcRenderer.minimize()}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={{ backgroundColor: hover.minimize ? colorPalette.buttonsNavbarHover : 'transparent' }}>
            <MinimizeIcon className={'w-9 h-auto p-2 pointer-events-none'} style={{ fill: colorPalette.navbarFillIcons }} />
          </button>
          {
            !isFullScreen && (
              <>
                <button type="button" value={'maximize'} ref={maximizeRef}
                  className="flex items-center justify-center title-button transition-all"
                  onClick={() => window.ipcRenderer.maximize()}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                  style={{ backgroundColor: hover.maximize ? colorPalette.buttonsNavbarHover : 'transparent', display: isMaximized ? 'none' : 'flex' }}>
                  <MaximizeIcon className={'w-9 h-auto m-auto p-2 pointer-events-none'} style={{ fill: colorPalette.navbarFillIcons }} />
                </button>
                <button type="button" value={'restore'} ref={restoreRef}
                  className="flex items-center justify-center title-button transition-all"
                  onClick={() => {window.ipcRenderer.unmaximize()}}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                  style={{ backgroundColor: hover.restore ? colorPalette.buttonsNavbarHover : 'transparent', display: isMaximized ? 'flex' : 'none' }}>
                  <RestoreIcon className={'w-9 h-auto p-2 pointer-events-none'} style={{ fill: colorPalette.navbarFillIcons }} />
                </button>
              </>
            )
          }
          <button type="button" value={'close'} ref={closeRef}
            className="flex items-center justify-center title-button transition-all"
            onClick={() => window.ipcRenderer.quit()}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={{ backgroundColor: hover.close ? '#ff3030' : 'transparent' }}>
            <CloseIcon className={'w-9 h-auto p-2 pointer-events-none'} style={{ fill: colorPalette.navbarFillIcons }} />
          </button>
        </div>
      </div>
    ) : <></>
  );
}