import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Arrow from "./Icons/Arrow";
import HomeIcon from "./Icons/HomeIcon";
import SettingsIcon from "./Icons/SettingsIcon";

export default function Navbar() {
  const navigate = useNavigate(),
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
    setHover({ back: false, home: false, homeIcon: false, forward: false, settings: false, settingsIcon: false })
  }, [location.pathname])

  return (
    <div className="relative">
      <nav ref={navbarRef} className={`relative flex flex-nowrap justify-center w-full z-50 unselectable ${(window.data.store.get('selectedColorPalette') === '1' ? 'shadow-none' : 'shadow-lg')}`}
        style={{
          backgroundColor: colorPalette.navbarBackground,
          stroke: colorPalette.navbarFillIcons,
          fill: hover.homeIcon ? colorPalette.buttonsNavbarHover : 'transparent',
          color: colorPalette.navbarFillIcons
        }}>

        <ul className="flex list-style-none w-full mx-auto lg:mx-2">
          <li className="flex transition hover:duration-150"
            onMouseEnter={() => setHover(prev => ({ ...prev, back: true }))} onMouseLeave={() => setHover(prev => ({ ...prev, back: false }))}
            style={{ backgroundColor: (window.history.state.idx != 0) ? hover.back ? colorPalette.buttonsNavbarHover : 'transparent' : 'transparent' }}>
            <button onClick={handleGoBack} className="px-3 py-3 disabled:opacity-50" disabled={(window.history.state.idx === 0)} style={{ cursor: (window.history.state.idx === 0) ? 'not-allowed' : 'pointer' }}>
              <Arrow />
            </button>
          </li>
          <li className="flex transition hover:duration-150"
            onMouseEnter={() => setHover(prev => ({ ...prev, forward: true }))}
            onMouseLeave={() => setHover(prev => ({ ...prev, forward: false }))}
            style={{ backgroundColor: !(window.history.state.idx === window.history.length - 1) ? hover.forward ? colorPalette.buttonsNavbarHover : 'transparent' : 'transparent' }}>
            <button onClick={handleGoForward} className="px-3 py-3 disabled:opacity-50" disabled={(window.history.state.idx === window.history.length - 1)} style={{ cursor: (window.history.state.idx === window.history.length - 1) ? 'not-allowed' : 'pointer' }}>
              <Arrow className='transform rotate-180' />
            </button>
          </li>
          {
            location.pathname !== '/' && (
              <li className="flex transition hover:duration-150"
                onMouseEnter={() => setHover(prev => ({ ...prev, home: true, homeIcon: true }))}
                onMouseLeave={() => setHover(prev => ({ ...prev, home: false, homeIcon: false }))}
                style={{ backgroundColor: hover.home ? colorPalette.buttonsNavbarHover : 'transparent' }}>
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
                style={{ backgroundColor: hover.settings ? colorPalette.buttonsNavbarHover : 'transparent' }}>
                <button onClick={() => navigate('/Settings')} className="flex pl-2 pr-2 py-3 items-center ">
                  <SettingsIcon />
                </button>
              </li>
            )
          }
        </ul>
      </nav>
    </div>
  );
}