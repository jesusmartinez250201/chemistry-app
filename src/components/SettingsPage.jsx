import { useState } from "react";
import { colorPalettes } from './utils/ColorPalettes.json';

window.data.store.set('colorPalettes', colorPalettes);
const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export default function SettingsPage() {
  const [selectedPalette, setSelectedPalette] = useState(window.data.store.get('selectedColorPalette')),
    [hover, setHover] = useState(false),
    handleChange = (e) => {
      setSelectedPalette(e.target.value);
    },
    applyColors = () => {
      window.data.store.set('selectedColorPalette', selectedPalette);
      window.location.reload();
    }

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
      <div className="mt-4 mx-9">
        <h2
          className="mb-4 text-2xl font-bold"
          style={{ color: colorPalette.text }}>Paletas de colores</h2>
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
        <button
          style={{ backgroundColor: hover ? colorPalette.text : colorPalette.background, color: hover ? colorPalette.background : colorPalette.text }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="mt-3 px-3 py-2 rounded transition-all"
          onClick={applyColors}>
          Aplicar
        </button>
      </div>
    </div>
  )
}