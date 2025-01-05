import React, { useState } from 'react';

const StructureButton = React.memo(({ onClick, value, children, isSelected, colorPalette }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className='w-32 px-2 rounded flex flex-col items-center justify-around hover:transition-all md:mb-2'
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

export default StructureButton;