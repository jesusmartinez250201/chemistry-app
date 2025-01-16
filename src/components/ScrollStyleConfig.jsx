
export default function ScrollStyleConfig() {
    const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]
    return (
      <style>{`
        #content {
          background-color: ${colorPalette.background};
        }
      
        #content::-webkit-scrollbar {
          display: none;
          width: 10px;
          height: 0px;
        }
      
        #content::-webkit-scrollbar-track {
          background: ${colorPalette.scrollbarTrack};
        }
      
        #content::-webkit-scrollbar-thumb {
          background: ${colorPalette.scrollbarThumb};
          border-radius: 6px;
        }
  
        #content::-webkit-scrollbar-thumb:hover {
          background: ${colorPalette.scrollbarThumbHover};
        }
      `}</style>
    )
}