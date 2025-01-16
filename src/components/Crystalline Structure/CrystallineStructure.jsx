import { useRef, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import parse from 'html-react-parser';
import { CubicBodyCentered, CubicSimple, CubicFaceCentered } from './types/Cubic';
import Hexagonal from './types/Hexagonal';
import { MonoclinicSimple, MonoclinicBaseCentered } from './types/Monoclinic';
import {
  OrthorhombicSimple,
  OrthorhombicBaseCentered,
  OrthorhombicBodyCentered,
  OrthorhombicFaceCentered
} from './types/Orthorhombic';
import Rhombohedral from './types/Rhombohedral';
import { TetragonalSimple, TetragonalBodyCentered } from './types/Tetragonal';
import Triclinic from './types/Triclinic';
import Controls3D from '../Controls3D';
import {
  SimpleCubic,
  BodyCenteredCubic,
  FaceCenteredCubic,
  HexagonalIcon,
  SimpleMonoclinic,
  BaseCenteredMonoclinic,
  SimpleOrthorhombic,
  BaseCenteredOrthorhombic,
  BodyCenteredOrthorhombic,
  FaceCenteredOrthorhombic,
  RhombohedralIcon,
  SimpleTetragonal,
  BodyCenteredTetragonal,
  TriclinicIcon
} from '../Icons/CrystallineStructures';
import { IdealBtn, RealBtn } from '../Icons/BtnCrystallineStructures';
import Center from '../Icons/Center';
import StructureButton from './Buttons/StructureButton';
import { RealButton, IdealButton } from './Buttons/RealButton';
import CenterButton from '../CenterButton';

const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export default function CrystallineStructure() {
  const [selectedFigure, setSelectedFigure] = useState('Cubica Simple'),
    [isReal, setisReal] = useState(false),
    [showUnitCell, setShowUnitCell] = useState(true),
    [structureData, setStructureData] = useState(null),
    controlsRef = useRef(),
    cameraRef = useRef(),
    handleFigure = (e) => {
      setSelectedFigure(e.target.value)
    },
    handleReal = (e) => {
      if (e.target.value === 'ideal') {
        setisReal(false);
      } else {
        setisReal(true)
      }
    },
    handleStructureData = (data) => {
      setStructureData(data);
    },
    handleCameraCenter = () => {
      cameraRef.current.position.set(0, 0, 7);
      controlsRef.current.target.set(0, 0, 0);
    },
    CamControls = () => {
      const { camera } = useThree()

      useEffect(() => {
        cameraRef.current = camera;
        camera.position.set(0, 0, 7);
      }, [camera]);

      return (
        <>
          <OrbitControls ref={controlsRef} camera={camera} />
        </>
      )
    }

  return (
    <div id='3d-view' className='h-full w-full flex flex-col flex-grow items-center
      w850:flex-row'>
      <Canvas className='flex-grow' style={{ backgroundColor: colorPalette.background }}>
        <CamControls />
        <ambientLight intensity={1.5} />
        <pointLight position={[0, 1, 6]} intensity={4} />
        <pointLight position={[7, 1, 0]} intensity={4} />
        <pointLight position={[-5, 1, 0]} intensity={4} />
        {/* <gridHelper />
          <axesHelper args={[5]} /> */}
        {selectedFigure === 'Cubica Simple' && <CubicSimple isReal={isReal} showUnitCell={showUnitCell} onPutStructure={handleStructureData} />}
        {selectedFigure === 'Cubica Centrada en el Cuerpo' && <CubicBodyCentered isReal={isReal} showUnitCell={showUnitCell} onPutStructure={handleStructureData} />}
        {selectedFigure === 'Cubica Centrada en las Caras' && <CubicFaceCentered isReal={isReal} showUnitCell={showUnitCell} onPutStructure={handleStructureData} />}
        {selectedFigure === 'Hexagonal' && <Hexagonal isReal={isReal} onPutStructure={handleStructureData} />}
        {selectedFigure === 'Monoclinica Simple' && <MonoclinicSimple isReal={isReal} showUnitCell={showUnitCell} onPutStructure={handleStructureData} />}
        {selectedFigure === 'Monoclinica Centrada en la Base' && <MonoclinicBaseCentered isReal={isReal} showUnitCell={showUnitCell} onPutStructure={handleStructureData} />}
        {selectedFigure === 'Ortorrombica Simple' && <OrthorhombicSimple isReal={isReal} showUnitCell={showUnitCell} onPutStructure={handleStructureData} />}
        {selectedFigure === 'Ortorrombica Centrada en la Base' && <OrthorhombicBaseCentered isReal={isReal} showUnitCell={showUnitCell} onPutStructure={handleStructureData} />}
        {selectedFigure === 'Ortorrombica Centrada en el Cuerpo' && <OrthorhombicBodyCentered isReal={isReal} showUnitCell={showUnitCell} onPutStructure={handleStructureData} />}
        {selectedFigure === 'Ortorrombica Centrada en las Caras' && <OrthorhombicFaceCentered isReal={isReal} showUnitCell={showUnitCell} onPutStructure={handleStructureData} />}
        {selectedFigure === 'Romboedrica' && <Rhombohedral isReal={isReal} showUnitCell={showUnitCell} onPutStructure={handleStructureData} />}
        {selectedFigure === 'Tetragonal Simple' && <TetragonalSimple isReal={isReal} showUnitCell={showUnitCell} onPutStructure={handleStructureData} />}
        {selectedFigure === 'Tetragonal Centrada en el Cuerpo' && <TetragonalBodyCentered isReal={isReal} showUnitCell={showUnitCell} onPutStructure={handleStructureData} />}
        {selectedFigure === 'Triclinica' && <Triclinic isReal={isReal} showUnitCell={showUnitCell} onPutStructure={handleStructureData} />}

      </Canvas>
      <Controls3D>
        <style>{`
         .structure-data::-webkit-scrollbar {
           width: 10px;
         }
         .structure-data::-webkit-scrollbar-track {
           background: ${colorPalette.controlsScrollbarTrack};
         }
          
         .structure-data::-webkit-scrollbar-thumb {
           background: ${colorPalette.controlsScrollbarThumb};
           border-radius: 6px;
         }
          
         .structure-data::-webkit-scrollbar-thumb:hover {
           background: ${colorPalette.controlsScrollbarThumbHover};
         }
      `}
        </style>
        <div className='w-1/2 flex flex-col h-full p-3
          w850:w-full w850:justify-between'>
          <div className='flex justify-around'>
            <IdealButton
              onClick={handleReal}
              value={'ideal'}
              isSelected={!isReal}
              colorPalette={colorPalette}>
              <span className='pointer-events-none'>IDEAL</span>
              <IdealBtn />
            </IdealButton>
            <RealButton
              onClick={handleReal}
              value={'real'}
              isSelected={isReal}
              colorPalette={colorPalette}>
              <span className='pointer-events-none'>REAL</span>
              <RealBtn />
            </RealButton>
          </div>
          {structureData && (
            <>
              <p className='text-center mt-3 mb-1 font-bold text-lg' style={{ color: colorPalette.textTitles }}>{structureData.structureName}</p>
              {(structureData.structureName === 'Estructura Monoclínica Centrada en la Base' && isReal) ? (

                <span>
                  <b style={{ color: colorPalette.textTitles }}>Material: </b>{parse(structureData.materialSymbol)}
                </span>
              ) :
                (
                  <span>
                    <b style={{ color: colorPalette.textTitles }}>Material:</b> {structureData.materialName} ({parse(structureData.materialSymbol)})
                  </span>
                )
              }
              <div className='flex flex-wrap justify-evenly'>
                {
                  structureData.atomsLegend.map((atom, index) => (
                    <span key={index} className='flex mr-1 items-center mt-1'>
                      <span
                        className={`w-[15px] h-[15px] m-1`}
                        style={{ backgroundColor: atom.color }}>
                      </span>
                      <span>{`${atom.material} (${atom.symbol})`}</span>
                    </span>
                  ))
                }
              </div>

            </>
          )}
          <div className='w-full flex justify-center my-1'>
            <CenterButton onClick={handleCameraCenter} colorPalette={colorPalette}>
              <Center />
              <span className='ml-1'>CENTRAR</span>
            </CenterButton>
          </div>
          {
            isReal && (
              <div className='w-full flex items-center'>
                <input type="checkbox" name="unit-cell" id="unit-cell" checked={showUnitCell} onChange={() => setShowUnitCell(!showUnitCell)}
                  style={{ accentColor: colorPalette.checkbox }} />
                <label htmlFor="unit-cell" className='unselectable ml-1'>Mostrar celda unitaria</label>
              </div>
            )
          }
        </div>


        <div className='structure-data w-1/2 h-full overflow-y-scroll flex flex-wrap justify-evenly py-3
          w850:w-full w850:border-t' 
          style={{ color: colorPalette.text, fill: colorPalette.text, stroke: colorPalette.text, borderColor: colorPalette.text }}>

          {/* CUBIC STRUCTURES */}
          <div className='w-full text-center text-xl' style={{ color: colorPalette.textTitles }}><b>Estructuras cúbicas</b></div>
          <StructureButton
            onClick={handleFigure}
            value={'Cubica Simple'}
            isSelected={selectedFigure === 'Cubica Simple'}
            colorPalette={colorPalette}
            structureName={0}>
            <div className='w-1/2 pointer-events-none'>
              <SimpleCubic />
            </div>
          </StructureButton>
          <StructureButton
            onClick={handleFigure}
            value={'Cubica Centrada en el Cuerpo'}
            isSelected={selectedFigure === 'Cubica Centrada en el Cuerpo'}
            colorPalette={colorPalette}
            structureName={1}>
            <div className='w-1/2 pointer-events-none'>
              <BodyCenteredCubic />
            </div>
          </StructureButton>
          <StructureButton
            onClick={handleFigure}
            value={'Cubica Centrada en las Caras'}
            isSelected={selectedFigure === 'Cubica Centrada en las Caras'}
            colorPalette={colorPalette}
            structureName={2}>
            <div className='w-1/2'>
              <FaceCenteredCubic />
            </div>
          </StructureButton>

          {/* TETRAGONAL STRUCTURES */}
          <div className='w-full mb-2 text-center text-xl' style={{ color: colorPalette.textTitles }}><b>Estructuras tetragonales</b></div>
          <StructureButton
            onClick={handleFigure}
            value={'Tetragonal Simple'}
            isSelected={selectedFigure === 'Tetragonal Simple'}
            colorPalette={colorPalette}
            structureName={5}>
            <div className='w-1/2 pointer-events-none'>
              <SimpleTetragonal />
            </div>
          </StructureButton>
          <StructureButton
            onClick={handleFigure}
            value={'Tetragonal Centrada en el Cuerpo'}
            isSelected={selectedFigure === 'Tetragonal Centrada en el Cuerpo'}
            colorPalette={colorPalette}
            structureName={6}>
            <div className='w-1/2 pointer-events-none'>
              <BodyCenteredTetragonal />
            </div>
          </StructureButton>

          {/* ORTHORHOMBIC STRUCTURES */}
          <div className='w-full mb-2 text-center text-xl md:mt-2' style={{ color: colorPalette.textTitles }}><b>Estructuras ortorrómbicas</b></div>
          <StructureButton
            onClick={handleFigure}
            value={'Ortorrombica Simple'}
            isSelected={selectedFigure === 'Ortorrombica Simple'}
            colorPalette={colorPalette}
            structureName={3}>
            <div className='w-1/2 pointer-events-none'>
              <SimpleOrthorhombic />
            </div>
          </StructureButton>
          <StructureButton
            onClick={handleFigure}
            value={'Ortorrombica Centrada en la Base'}
            isSelected={selectedFigure === 'Ortorrombica Centrada en la Base'}
            colorPalette={colorPalette}
            structureName={4}>
            <div className='w-1/2 pointer-events-none'>
              <BaseCenteredOrthorhombic />
            </div>
          </StructureButton>
          <StructureButton
            onClick={handleFigure}
            value={'Ortorrombica Centrada en el Cuerpo'}
            isSelected={selectedFigure === 'Ortorrombica Centrada en el Cuerpo'}
            colorPalette={colorPalette}
            structureName={7}>
            <div className='w-1/2 pointer-events-none'>
              <BodyCenteredOrthorhombic />
            </div>
          </StructureButton>
          <StructureButton
            onClick={handleFigure}
            value={'Ortorrombica Centrada en las Caras'}
            isSelected={selectedFigure === 'Ortorrombica Centrada en las Caras'}
            colorPalette={colorPalette}
            structureName={8}>
            <div className='w-1/2 pointer-events-none'>
              <FaceCenteredOrthorhombic />
            </div>
          </StructureButton>

          {/* MONOCLINICS STRUCTURES */}
          <div className='w-full mb-2 text-center text-xl md:mt-2' style={{ color: colorPalette.textTitles }}><b>Estructuras monoclinicas</b></div>
          <StructureButton
            onClick={handleFigure}
            value={'Monoclinica Simple'}
            isSelected={selectedFigure === 'Monoclinica Simple'}
            colorPalette={colorPalette}
            structureName={9}>
            <div className='w-1/2 pointer-events-none'>
              <SimpleMonoclinic />
            </div>
          </StructureButton>
          <StructureButton
            onClick={handleFigure}
            value={'Monoclinica Centrada en la Base'}
            isSelected={selectedFigure === 'Monoclinica Centrada en la Base'}
            colorPalette={colorPalette}
            structureName={10}>
            <div className='w-1/2 pointer-events-none'>
              <BaseCenteredMonoclinic />
            </div>
          </StructureButton>

          {/* OTHER STRUCTURES */}
          <div className='w-full mb-2 text-center text-xl md:mt-2' style={{ color: colorPalette.textTitles }}><b>Otras estructuras</b></div>
          <StructureButton
            onClick={handleFigure}
            value={'Hexagonal'}
            isSelected={selectedFigure === 'Hexagonal'}
            colorPalette={colorPalette}
            structureName={11}>
            <div className='w-1/2 pointer-events-none'>
              <HexagonalIcon />
            </div>
          </StructureButton>
          <StructureButton
            onClick={handleFigure}
            value={'Romboedrica'}
            isSelected={selectedFigure === 'Romboedrica'}
            colorPalette={colorPalette}
            structureName={12}>
            <div className='w-1/2 pointer-events-none'>
              <RhombohedralIcon />
            </div>
          </StructureButton>
          <StructureButton
            onClick={handleFigure}
            value={'Triclinica'}
            isSelected={selectedFigure === 'Triclinica'}
            colorPalette={colorPalette}
            structureName={13}>
            <div className='w-1/2 pointer-events-none'>
              <TriclinicIcon />
            </div>
          </StructureButton>
        </div>
      </Controls3D>
    </div>
  );
}