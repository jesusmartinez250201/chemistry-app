import React, { useState } from 'react';

const MoleculeButton = React.memo(({ onClick, value, children, isSelected, colorPalette }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className='w-24 flex flex-col items-center justify-around px-1 mx-1 rounded hover:transition-all
      2xl:w-28'
      onClick={onClick}
      value={value}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: (hover && isSelected) ? colorPalette.selectedButtonHover : (isSelected) ? colorPalette.selectedButton : (hover) ? colorPalette.buttonHover : 'transparent',
        color: (hover && isSelected) ? colorPalette.selectedButtonText : (isSelected) ? colorPalette.buttonText : (hover) ? colorPalette.buttonHoverText : colorPalette.buttonText
      }}
    >
      {children}
    </button>
  );
});

export default MoleculeButton;