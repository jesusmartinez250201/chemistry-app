import { useState, useEffect } from "react"
import HelpIcon from "./Icons/HelpIcon"
import { useLocation } from "react-router-dom"

const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export function HelpControls({ children }) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 }),
    [hover, setHover] = useState(false),
    handleHover = (e) => {
      setHover(e.type === 'mouseenter');
    }

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <>
      <HelpIcon
        className='absolute w-6 top-1 left-1 hover:transition-all z-50'
        style={{ fill: hover ? colorPalette.buttonHover : colorPalette.text }}
        handleHelpHover={handleHover}
      />
      {hover && (
        <div
          className='w-100 z-50'
          style={{
            position: 'fixed',
            top: window.innerHeight < 850 ? Math.min(cursorPosition.y + 10, window.innerHeight - 20) : Math.min(cursorPosition.y - 80, window.innerHeight - 2000),
            left: window.innerWidth < 850 ? Math.min(cursorPosition.x + 10, window.innerWidth - 90) : Math.min(cursorPosition.x - 200, window.innerWidth - 90),
            backgroundColor: 'white',
            padding: '5px',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            color: 'black'
          }}
        >
          {children}
        </div>
      )}
    </>
  )
}

export function Help3DView() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 }),
    [hover, setHover] = useState(false),
    location = useLocation(),
    handleHover = (e) => {
      setHover(e.type === 'mouseenter');
    }

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
  return (
    <>
      <HelpIcon
        className={`absolute w-6 w850:bottom-1 left-1 hover:transition-all z-50
          ${location.pathname === '/Bonds' ? 'bottom-36/100' : ''}
          ${location.pathname === '/BohrModel' ? 'bottom-35/100' : ''}
          ${location.pathname === '/CrystallineStructure' ? 'bottom-51/100' : ''}`}
        style={{ fill: hover ? colorPalette.buttonHover : colorPalette.text }}
        handleHelpHover={handleHover}
      />
      {hover && (
        <div
          className='w-100 z-50'
          style={{
            position: 'fixed',
            top: Math.min(cursorPosition.y - 80, window.innerHeight - 20),
            left: Math.min(cursorPosition.x + 10, window.innerWidth - 90),
            backgroundColor: 'white',
            padding: '5px',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            color: 'black'
          }}
        >
          Usa el <b>click izquierdo</b> del ratón para rotar la figura, el <b>click derecho</b> para desplazarla y la <b>rueda del ratón</b> para hacer zoom.
        </div>
      )}
    </>
  )
}