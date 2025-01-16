import React, { useState } from 'react';

const CenterButton = React.memo(({ onClick, children, colorPalette }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className='w-36 flex px-5 my-1 py-1 items-center rounded hover:transition-all'
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: (hover) ? colorPalette.buttonHover : 'transparent',
        stroke: colorPalette.text}}>
      {children}
    </button>
  );
});

export default CenterButton;