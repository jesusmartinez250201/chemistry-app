import React, { useState } from 'react';

const RealButton = React.memo(({ onClick, value, children, isSelected, colorPalette }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className='w-28 flex flex-col items-center rounded hover:transition-all'
      onClick={onClick}
      value={value}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: (hover && isSelected) ? colorPalette.selectedButtonHover : (isSelected) ? colorPalette.selectedButton : (hover) ? colorPalette.buttonHover : 'transparent'
      }}
    >
      {children}
    </button>
  );
});

export default RealButton;