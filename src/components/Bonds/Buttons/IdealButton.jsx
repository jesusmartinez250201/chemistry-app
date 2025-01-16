import React, { useState } from 'react';

const IdealButton = React.memo(({ onClick, value, children, isSelected, colorPalette }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className='w-9/20 my-1 rounded hover:transition-all'
      onClick={onClick}
      value={value}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: (hover && isSelected) ? colorPalette.selectedButtonHover : (isSelected) ? colorPalette.selectedButton : (hover) ? colorPalette.buttonHover : 'transparent',
        color: (hover && isSelected) ? colorPalette.selectedButtonText : (isSelected) ? colorPalette.buttonText : (hover) ? colorPalette.buttonHoverText : colorPalette.buttonText,
        fill: (hover && isSelected) ? colorPalette.selectedButtonText : (isSelected) ? colorPalette.text : (hover) ? colorPalette.text : colorPalette.text,
        stroke: (hover && isSelected) ? colorPalette.selectedButtonText : (isSelected) ? colorPalette.text : (hover) ? colorPalette.text : colorPalette.text
      }}
    >
      {children}
    </button>
  );
});

export default IdealButton;