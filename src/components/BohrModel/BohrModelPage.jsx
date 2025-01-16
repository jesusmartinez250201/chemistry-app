import { useRef, useState, useCallback } from 'react';
import Bohr3DModel from './Bohr3DModel';
import SliderContext from '../context/SliderContext';
import PeriodicTableSelector from './PeriodicTableSelector';
import Controls3D from '../Controls3D';
import { Table } from '../utils/ElementsData.json';
import Center from '../Icons/Center';
import { RealButton, IdealButton } from './Buttons/RealButton';
import CenterButton from '../CenterButton';

const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export default function BohrModelPage() {
  const [isReal, setisReal] = useState(false),
    [currentElement, setcurrentElement] = useState(1),
    [sliderValue, setSliderValue] = useState(0.41),
    cameraRef = useRef(),
    elementName = Table.Row[currentElement - 1].Cell[2],
    handleReal = (e) => {
      if (e.target.value === 'ideal') {
        setisReal(false);
      } else {
        setisReal(true);
      }
    },
    handleSlider = (e) => {
      setSliderValue(e.target.value);
    },
    handleSelectElement = (element) => {
      setcurrentElement(element);
    },
    handleCenterCamera = useCallback(() => {
      cameraRef.current.position.set(0, 0, 7);
    }, []);

  return (
    <SliderContext.Provider value={{ sliderValue, setSliderValue }}>
      <div id='3d-view' className='
        h-full w-full flex flex-col flex-grow items-center
        w850:flex-row'>
        <Bohr3DModel atomicNumber={currentElement} isReal={isReal} onCenterCamera={handleCenterCamera} cameraRef={cameraRef} />
        <Controls3D>
          <div className='w-8/20 flex flex-col justify-center
            w850:w-full px-3 my-2'>
            <div className='w-full flex justify-around'>
              <IdealButton
                onClick={handleReal}
                value={'ideal'}
                isSelected={!isReal}
                colorPalette={colorPalette}>
              </IdealButton>
              <RealButton
                onClick={handleReal}
                value={'real'}
                isSelected={isReal}
                colorPalette={colorPalette}>
              </RealButton>
            </div>
            <div className="w-full my-3">
              <div className='w-full text-center' style={{ color: colorPalette.text }}>Tamaño de electrones</div>
              <input className='w-full rounded-xl' type='range' min='0.1' max='0.41' step='0.00001' value={sliderValue} onChange={handleSlider}
                style={{ background: colorPalette.sliderColor, WebkitAppearance: 'none' }} />
            </div>
            <div className='w-full flex justify-center'>
              <CenterButton onClick={handleCenterCamera} colorPalette={colorPalette}>
                <Center />
                <span className='text-md ml-1'>CENTRAR</span>
              </CenterButton>
            </div>
          </div>
          <div className='w-12/20 relative max-w-[400px] my-auto
            w850:w-19/20 w850:mx-auto'>
            <h2 className='absolute text-center left-[30%] text-2xl' style={{ color: colorPalette.text }}>{elementName}</h2>
            <PeriodicTableSelector onSelectElement={handleSelectElement} />
          </div>
        </Controls3D>
        <style>{`
            input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: ${colorPalette.sliderThumb};
            cursor: pointer;
          }
          `}

        </style>
      </div>
    </SliderContext.Provider>
  );
}