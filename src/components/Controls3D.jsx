import { useLocation } from "react-router-dom"

const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export default function Controls3D({ children }) {
  const location = useLocation()

  return (
    <aside draggable={false} className={`
    flex w-full flex-col unselectable
    ${location.pathname === '/Bonds' ? 'h-7/20' : ''} 
    ${location.pathname === '/BohrModel' ? 'h-13/20' : ''} 
    ${location.pathname === '/CrystallineStructure' ? 'h-10/20' : ''} 
    w850:h-full w850:w-25/50`}>
      <div className='w-full text-center'
      style={{color: colorPalette.textControlsHeader, backgroundColor: colorPalette.controlsHeaderBackground}}>
        Controles
      </div>
      <div id="controls" className='w-full flex text-justify flex-1 overflow-y-scroll justify-around
        w850:flex-col w850:overflow-y-auto'
      style={{color: colorPalette.text, backgroundColor: colorPalette.controlsBackground}}>
        {children}
      </div>
      <style>{`

        @media (max-width: 850px) {
          #controls::-webkit-scrollbar {
            display: none;
          }
        }
        #controls::-webkit-scrollbar {
          width: 10px;
        }

        #controls::-webkit-scrollbar-track {
          background: ${colorPalette.controlsScrollbarTrack};
        }

        #controls::-webkit-scrollbar-thumb {
          background: ${colorPalette.controlsScrollbarThumb};
          border-radius: 6px;
        }

        #controls::-webkit-scrollbar-thumb:hover {
          background: ${colorPalette.controlsScrollbarThumbHover};
        }
      `}
      </style>
    </aside>
  )

}