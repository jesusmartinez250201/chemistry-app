import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Arrow from "./Icons/Arrow";
import HomeIcon from "./Icons/HomeIcon";
import SettingsIcon from "./Icons/SettingsIcon";
import TitlebarIcon from "./Icons/TitlebarIcon";

export default function Navbar({ children }) {
  const navigate = useNavigate(),
    titleBarRef = useRef(),
    navbarRef = useRef(),
    location = useLocation(),
    colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')],
    [hover, setHover] = useState({ back: false, home: false, homeIcon: false, forward: false, settings: false, settingsIcon: false }),
    handleGoBack = () => {
      window.history.back();
    },
    handleGoForward = () => {
      window.history.forward();
    }

  useEffect(() => {
    navbarRef.current.style.top = `${window.navigator.windowControlsOverlay.getTitlebarAreaRect().height}px`
    titleBarRef.current.style.height = `${window.navigator.windowControlsOverlay.getTitlebarAreaRect().height}px`
    window.addEventListener('resize', () => {
      navbarRef.current.style.top = `${window.navigator.windowControlsOverlay.getTitlebarAreaRect().height}px`
      titleBarRef.current.style.height = `${window.navigator.windowControlsOverlay.getTitlebarAreaRect().height}px`
    })
  }, [])

  return (
    <>
      <span id="titleBar" ref={titleBarRef} className="font-mono flex items-center w-full fixed top-0 z-50 unselectable"
        style={{ backgroundColor: colorPalette.navbarBackground, color: colorPalette.navbarText, stroke: colorPalette.navbarIcons }}>
        <TitlebarIcon className={'w-7 h-auto ml-1 p-1'} />
          chemistry-app
      </span>
      <nav ref={navbarRef} className={`sticky flex flex-nowrap justify-between w-full z-50 unselectable ${(window.data.store.get('selectedColorPalette') === '1' ? 'shadow-none' : 'shadow-lg')}`}
        style={{
          backgroundColor: colorPalette.navbarBackground,
          stroke: colorPalette.navbarIcons,
          fill: hover.homeIcon ? colorPalette.buttonHover : 'transparent',
          color: colorPalette.navbarText,
        }}>
        <ul className="flex list-style-none self-center w-full lg:mx-2 xl:mx-4">
          <li className="flex transition hover:duration-150"
            onMouseEnter={() => setHover(prev => ({ ...prev, back: true }))} onMouseLeave={() => setHover(prev => ({ ...prev, back: false }))}
            style={{ backgroundColor: (window.history.state.idx != 0) ? hover.back ? colorPalette.buttonHover : 'transparent' : 'transparent' }}>
            <button onClick={handleGoBack} className="px-3 py-3 disabled:opacity-50" disabled={(window.history.state.idx === 0)} style={{ cursor: (window.history.state.idx === 0) ? 'not-allowed' : 'pointer' }}>
              <Arrow />
            </button>
          </li>
          <li className="flex transition hover:duration-150"
            onMouseEnter={() => setHover(prev => ({ ...prev, forward: true }))}
            onMouseLeave={() => setHover(prev => ({ ...prev, forward: false }))}
            style={{ backgroundColor: !(window.history.state.idx === window.history.length - 1) ? hover.forward ? colorPalette.buttonHover : 'transparent' : 'transparent' }}>
            <button onClick={handleGoForward} className="px-3 py-3 disabled:opacity-50" disabled={(window.history.state.idx === window.history.length - 1)} style={{ cursor: (window.history.state.idx === window.history.length - 1) ? 'not-allowed' : 'pointer' }}>
              <Arrow className='transform rotate-180' />
            </button>
          </li>
          {
            location.pathname !== '/' && (
              <li className="flex transition hover:duration-150"
                onMouseEnter={() => setHover(prev => ({ ...prev, home: true, homeIcon: true }))}
                onMouseLeave={() => setHover(prev => ({ ...prev, home: false, homeIcon: false }))}
                style={{ backgroundColor: hover.home ? colorPalette.buttonHover : 'transparent' }}>
                <button onClick={() => navigate('/')} className="flex pl-2 pr-2 py-3 items-center ">
                  <HomeIcon />
                  <span className="my-2 mx-2 self-center font-bold">Inicio</span>
                </button>
              </li>
            )
          }

          <div className="flex-grow"></div>

          {
            location.pathname !== '/Settings' && (
              <li className="flex transition hover:duration-150"
                onMouseEnter={() => setHover(prev => ({ ...prev, settings: true, settingsIcon: true }))}
                onMouseLeave={() => setHover(prev => ({ ...prev, settings: false, settingsIcon: false }))}
                style={{ backgroundColor: hover.settings ? colorPalette.buttonHover : 'transparent' }}>
                <button onClick={() => navigate('/Settings')} className="flex pl-2 pr-2 py-3 items-center ">
                  <SettingsIcon />
                </button>
              </li>
            )
          }
          {children}
        </ul>
      </nav>
      <style>
        {`
          #titleBar {
            -webkit-app-region: drag;
          }
        `}
      </style>
    </>
  );
}