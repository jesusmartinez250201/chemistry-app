import { useRef, useState, useCallback } from 'react';
import Navbar from '../Navbar';
import Bohr3DModel from './Bohr3DModel';
import SliderContext from '../context/SliderContext';
import PeriodicTableSelector from './PeriodicTableSelector';
import Controls3D from '../Controls3D';
import { Table } from '../utils/ElementsData.json';
import Center from '../Icons/Center';
import { IdealBtn, RealBtn } from '../Icons/BtnBohrModel';
import RealButton from './Buttons/RealButton';
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
      <div className='h-screen flex flex-col'>
        <Navbar />
        <div id='3d-view' className='flex flex-col flex-grow relative items-center justify-end min-h-52'>
          <Bohr3DModel atomicNumber={currentElement} isReal={isReal} onCenterCamera={handleCenterCamera} cameraRef={cameraRef} />
          <Controls3D>
            <div className='w-full flex justify-around my-1'>
              <RealButton
                onClick={handleReal}
                value={'ideal'}
                isSelected={!isReal}
                colorPalette={colorPalette}>
                <span className='pointer-events-none'>IDEAL</span>
                <IdealBtn />
              </RealButton>
              <RealButton
                onClick={handleReal}
                value={'real'}
                isSelected={isReal}
                colorPalette={colorPalette}>
                <span className='pointer-events-none'>REAL</span>
                <RealBtn />
              </RealButton>
            </div>
            <div className="w-full my-3 flex justify-between items-center">
              <span className='w-44 md:text-sm' style={{ color: colorPalette.text }}>Tamaño de electrones</span>
              <input className='w-16/20 md:w-14/20 rounded-xl' type='range' min='0.1' max='0.41' step='0.00001' value={sliderValue} onChange={handleSlider}
                style={{ background: colorPalette.sliderColor, WebkitAppearance: 'none' }} />
            </div>
            <div className='w-full flex justify-center my-5'>
              <CenterButton onClick={handleCenterCamera} colorPalette={colorPalette}>
                <Center />
                <span className='ml-1'>CENTRAR</span>
              </CenterButton>
            </div>
            <div>
              <h2 className='text-center text-2xl' style={{ color: colorPalette.text }}>{elementName}</h2>
            </div>
            <PeriodicTableSelector onSelectElement={handleSelectElement} />
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
      </div>
    </SliderContext.Provider>
  );
}