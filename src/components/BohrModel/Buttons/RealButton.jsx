import React, { useState } from 'react';
import { IdealBtn, RealBtn } from '../../Icons/BtnBohrModel';

export const RealButton = React.memo(({ onClick, value, isSelected, colorPalette }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className='w-28 flex flex-col items-center rounded hover:transition-all'
      onClick={onClick}
      value={value}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: (hover && isSelected) ? colorPalette.selectedButtonHover : (isSelected) ? colorPalette.selectedButton : (hover) ? colorPalette.buttonHover : 'transparent',
        color: (hover && isSelected) ? colorPalette.selectedButtonText : (isSelected) ? colorPalette.buttonText : (hover) ? colorPalette.buttonHoverText : colorPalette.buttonText,
      }}
    >
      <span className='pointer-events-none'>REAL</span>
      <RealBtn hover={hover} colorPalette={colorPalette} isSelected={isSelected} />
    </button>
  );
});

export const IdealButton = React.memo(({ onClick, value, isSelected, colorPalette }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className='w-28 flex flex-col items-center rounded hover:transition-all'
      onClick={onClick}
      value={value}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: (hover && isSelected) ? colorPalette.selectedButtonHover : (isSelected) ? colorPalette.selectedButton : (hover) ? colorPalette.buttonHover : 'transparent',
        color: (hover && isSelected) ? colorPalette.selectedButtonText : (isSelected) ? colorPalette.buttonText : (hover) ? colorPalette.buttonHoverText : colorPalette.buttonText,
      }}
    >
      <span className='pointer-events-none'>IDEAL</span>
      <IdealBtn hover={hover} colorPalette={colorPalette} isSelected={isSelected} />
    </button>
  );
});

