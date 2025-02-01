import { useState, useRef, useContext, useEffect } from "react";
import FullScreenContext from "./context/fullScreenContext";
import { colorPalettes } from './utils/ColorPalettes.json';

window.data.store.set('colorPalettes', colorPalettes);
const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export default function SettingsPage() {
  const [selectedPalette, setSelectedPalette] = useState(window.data.store.get('selectedColorPalette')),
    [hover, setHover] = useState(false),
    { isFullScreen, toggleFullScreen } = useContext(FullScreenContext),
    [fullScreenChecked, setFullScreenChecked] = useState(isFullScreen),
    fullScreenRef = useRef(),
    handleChange = (e) => {
      setSelectedPalette(e.target.value);
    },
    applyConfig = () => {
      window.data.store.set('selectedColorPalette', selectedPalette);
      handleFullScreenToggle();
      window.location.reload();
    },
    handleFullScreenChange = (e) => {
      setFullScreenChecked(e.target.checked);
    },
    handleFullScreenToggle = () => {
      if (fullScreenRef.current.checked !== isFullScreen) {
        toggleFullScreen();
      }
    };

  useEffect(() => {
    setFullScreenChecked(isFullScreen);
  }, [isFullScreen]);

  return (
    <div className='max-w-[700px] mt-10
        md:mx-auto
        lg:mx-auto lg:max-w-[800px] unselectable'
      style={{ backgroundColor: colorPalette.background }}>
      <span className="">
        <h1 className='mx-8 text-4xl font-bold text-end border-b'
          style={{ color: colorPalette.textTitles, borderColor: colorPalette.text }}>
          Configuración
        </h1>
      </span>
      <div className="mt-1 mx-9">
        <span className="flex w-full py-2 border-b"
          style={{ borderColor: colorPalette.text }}>
          <input ref={fullScreenRef} type="checkbox" name="f-screen" id="full-screen" checked={fullScreenChecked} onChange={handleFullScreenChange} style={{ accentColor: colorPalette.checkbox }} />
          <label htmlFor="full-screen" className="text-xl font-bold ml-2" style={{ color: colorPalette.text }}>Pantalla completa (F11)</label>
        </span>
        <div className="w-full py-2 border-b"
          style={{ borderColor: colorPalette.text }}>
          <h2
            className="mb-4 text-2xl font-bold"
            style={{ color: colorPalette.text }}>
            Paletas de colores
          </h2>
          {
            colorPalettes.map((palette, index) => {
              return (
                <div key={index} className="flex items-center justify-evenly w-58">
                  <input type="radio" id={`radio-${index}`} name="selectedPalette" value={index} checked={selectedPalette == index} onChange={handleChange} />
                  <label htmlFor={`radio-${index}`} className="ml-2 flex-grow text-start" style={{ color: colorPalette.text }}>
                    {palette.name}
                  </label>
                  <div className="flex border-2 rounded my-2" style={{ borderColor: colorPalette.text }}>
                    {
                      palette.colors.map((color, index) => {
                        return (
                          <span key={index} className="w-5 h-5 inline-block" style={{ backgroundColor: color }}></span>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        <button
          style={{ backgroundColor: hover ? colorPalette.text : colorPalette.background, color: hover ? colorPalette.background : colorPalette.text }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="mt-3 px-3 py-2 rounded transition-all"
          onClick={applyConfig}>
          Aplicar
        </button>
      </div>
    </div>
  )
}