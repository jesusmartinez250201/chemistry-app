const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export default function Controls3D({ children }) {

  return (
    <aside draggable={false} className="flex w-11/12 flex-col absolute w-11/1 bottom-5 border h-40 rounded-md opacity-80 mx-3 unselectable z-50
    md:bottom-auto md:top-10 md:w-102 md:right-2 md:h-60
    lg:h-70
    xl:h-80">
      <div className='w-full flex-grow-0 text-center rounded-t'
      style={{color: colorPalette.textControlsHeader, backgroundColor: colorPalette.controlsHeaderBackground}}>
        Controles
      </div>
      <div id="controls" className='w-full text-justify flex-1 overflow-y-scroll px-3 py-2 rounded-b'
      style={{color: colorPalette.text, backgroundColor: colorPalette.controlsBackground}}>
        {children}
      </div>
      <style>{`
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