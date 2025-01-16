import React, { useState } from 'react';

const structures = [
  'Simple',
  'Centrada en el Cuerpo',
  'Centrada en las Caras',
  'Simple',
  'Centrada en el Cuerpo',
  'Simple',
  'Centrada en la base',
  'Centrada en el cuerpo',
  'Centrada en las caras',
  'Simple',
  'Centrada en la base',
  'Hexagonal',
  'Romboédrica',
  'Triclínica'
]

const StructureButton = React.memo(({ onClick, value, children, isSelected, colorPalette, structureName }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className='w-24 rounded flex flex-col items-center justify-around hover:transition-all'
      onClick={onClick}
      value={value}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: (hover && isSelected) ? colorPalette.selectedButtonHover : (isSelected) ? colorPalette.selectedButton : (hover) ? colorPalette.buttonHover : 'transparent',
        fill: (hover && isSelected) ? colorPalette.selectedButtonText : (isSelected) ? colorPalette.text : (hover) ? colorPalette.text : colorPalette.text,
        stroke: (hover && isSelected) ? colorPalette.selectedButtonText : (isSelected) ? colorPalette.text : (hover) ? colorPalette.text : colorPalette.text
      }}
    >
      <span className='pointer-events-none'
      style={{color: (hover && isSelected) ? colorPalette.selectedButtonText : (isSelected) ? colorPalette.text : (hover) ? colorPalette.text : colorPalette.text}}>
        {
          structures[structureName]
        }
      </span>
      {children}
    </button>
  );
});

export default StructureButton;