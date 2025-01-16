import { useRef, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Controls3D from '../Controls3D';
import Acetylene from './Covalent/Acetylene';
import Ammonia from './Covalent/Ammonia';
import CarbonDioxide from './Covalent/CarbonDioxide';
import MagnesiumChloride from './Ionic/MagnesiumChloride';
import PotassiumPermanganate from './Ionic/PotassiumPermanganate';
import SodiumChloride from './Ionic/SodiumChloride';
import Acetone from './Organic/Acetone';
import Aspirin from './Organic/Aspirin';
import Glucose from './Organic/Glucose';
import { BtnIdealMolecule, BtnRealMolecule } from '../Icons/BtnMolecules';
import Center from '../Icons/Center';
import Chromium from './Metallic/Chromium';
import Gold from './Metallic/Gold';
import Titanium from './Metallic/Titanium';
import RealButton from './Buttons/RealButton';
import IdealButton from './Buttons/IdealButton';
import MoleculeButton from './Buttons/MoleculeButton';
import CenterButton from '../CenterButton';

const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export default function BondsPage() {
  const [isReal, setIsReal] = useState(false),
    [selectedMolecule, setSelectedMolecule] = useState('carbonDioxide'),
    [ideal3D, setIdeal3D] = useState(false),
    [rotate, setRotate] = useState(false),
    moleculeComponents = {
      acetylene: Acetylene,
      ammonia: Ammonia,
      carbonDioxide: CarbonDioxide,
      magnesiumChloride: MagnesiumChloride,
      potassiumPermanganate: PotassiumPermanganate,
      sodiumChloride: SodiumChloride,
      acetone: Acetone,
      aspirin: Aspirin,
      glucose: Glucose,
      chromium: Chromium,
      gold: Gold,
      titanium: Titanium
    },
    SelectedMoleculeComponent = moleculeComponents[selectedMolecule],
    controlsRef = useRef(),
    cameraRef = useRef(),
    handleReal = (e) => {
      if (e.target.value === 'ideal') {
        setIsReal(false);
        ideal3D ? setRotate(true) : setRotate(false);
      } else {
        setIsReal(true);
        setRotate(true);
      }
    },
    handleIdeal3D = (e) => {
      if (e.target.value === '2D') {
        setIdeal3D(false);
        setRotate(false);
      } else {
        setIdeal3D(true);
        setRotate(true);
      }
    },
    handleSelectedMolecule = (e) => {
      setSelectedMolecule(e.target.value);
    },
    handleCameraCenter = () => {
      cameraRef.current.position.set(0, 0, 6);
      controlsRef.current.target.set(0, 0, 0);
    },
    CamControls = () => {
      const { camera } = useThree()

      useEffect(() => {
        cameraRef.current = camera;
        camera.position.set(0, 0, 6);
      }, [camera]);

      return (
        <>
          <OrbitControls ref={controlsRef} enableRotate={rotate} camera={camera} />
        </>
      )
    }

  return (
    <div id='3d-view' className='
      h-full w-full flex flex-col flex-grow items-center
      w850:flex-row'>
      <Canvas id='3d' className='flex-grow' style={{ backgroundColor: colorPalette.background }}>
        <CamControls />
        <ambientLight intensity={0.7} />
        <pointLight position={[0, 5, 6]} intensity={4} />
        <pointLight position={[5, 5, 0]} intensity={4} />
        <pointLight position={[0, 0, 7]} intensity={5} />
        <pointLight position={[0, 0, -7]} intensity={5} />
        <pointLight position={[0, 0, -7]} intensity={5} />
        <pointLight position={[-5, 0, 6]} intensity={5} />
        <pointLight position={[5, 0, 6]} intensity={5} />
        {/* <gridHelper />
          <axesHelper args={[5]} /> */}
        {SelectedMoleculeComponent && (
          <SelectedMoleculeComponent isReal={isReal} ideal3D={ideal3D} />
        )}
      </Canvas>
      <Controls3D>
        <div className='w-1/2 my-3 flex flex-col justify-center
          w850:w-full'>
          <div className='w-full flex justify-evenly'>
            <span>
              <RealButton
                onClick={handleReal}
                value={'ideal'}
                isSelected={!isReal}
                colorPalette={colorPalette}>
                IDEAL
                <BtnIdealMolecule />
              </RealButton>
              <span className={`flex justify-between ${isReal ? 'hidden' : 'block'}`}>
                <IdealButton
                  onClick={handleIdeal3D}
                  value={'2D'}
                  isSelected={!ideal3D}
                  colorPalette={colorPalette}>
                  2D
                </IdealButton>
                <IdealButton
                  onClick={handleIdeal3D}
                  value={'3D'}
                  isSelected={ideal3D}
                  colorPalette={colorPalette}>
                  3D
                </IdealButton>
              </span>
            </span>
            <RealButton
              onClick={handleReal}
              value={'real'}
              isSelected={isReal}
              colorPalette={colorPalette}>
              REAL
              <BtnRealMolecule />
            </RealButton>
          </div>
          <div className='w-full flex justify-center'>
            <CenterButton
              onClick={handleCameraCenter}
              isSelected={false}
              colorPalette={colorPalette}>
              <Center />
              <span className='text-md ml-1'>CENTRAR</span>
            </CenterButton>
          </div>
        </div>

        <div id='molecules' className='w-1/2 flex flex-col overflow-y-scroll py-2
        w850:w-full w850:overflow-y-visible w850:px-2'>
          {/* COVALENT BONDS */}
          <h2 className='w-full text-md  w850:text-center'><b>Enlaces covalentes</b></h2>
          <div className='w-full flex justify-evenly my-1'>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'carbonDioxide'}
              isSelected={selectedMolecule === 'carbonDioxide'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='text-sm 2xl:text-base'>
                  Dióxido de carbono
                </div>
                <div className='text-md 2xl:text-lg'>
                  <b>CO<sub>2</sub></b>
                </div>
              </div>
            </MoleculeButton>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'ammonia'}
              isSelected={selectedMolecule === 'ammonia'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='text-sm 2xl:text-base'>
                  Amoniaco
                </div>
                <div className='text-md 2xl:text-lg'>
                  <b>NH<sub>3</sub></b>
                </div>
              </div>
            </MoleculeButton>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'acetylene'}
              isSelected={selectedMolecule === 'acetylene'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='text-sm 2xl:text-base'>
                  Acetileno
                </div>
                <div className='text-md 2xl:text-lg'>
                  <b>C<sub>2</sub>H<sub>2</sub></b>
                </div>
              </div>
            </MoleculeButton>
          </div>

          {/* IONIC BONDS*/}
          <h2 className='w-full text-md w850:text-center'><b>Enlaces iónicos</b></h2>
          <div className='w-full flex justify-evenly my-1'>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'sodiumChloride'}
              isSelected={selectedMolecule === 'sodiumChloride'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='text-sm 2xl:text-base'>
                  Cloruro de sodio
                </div>
                <div className='text-base 2xl:text-lg'>
                  <b>NaCl</b>
                </div>
              </div>
            </MoleculeButton>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'magnesiumChloride'}
              isSelected={selectedMolecule === 'magnesiumChloride'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='text=sm 2xl:text-base'>
                  Cloruro de magnesio
                </div>
                <div className='text-md 2xl:text-lg'>
                  <b>MgCl<sub>2</sub></b>
                </div>
              </div>
            </MoleculeButton>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'potassiumPermanganate'}
              isSelected={selectedMolecule === 'potassiumPermanganate'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='text-sm 2xl:text-base'>
                  Permanganato de potasio
                </div>
                <div className='text-md 2xl:text-lg'>
                  <b>KMnO<sub>4</sub></b>
                </div>
              </div>
            </MoleculeButton>
          </div>

          {/* ORGANIC MOLECULES */}
          <h2 className='w-full text-md w850:text-center'><b>Moleculas organicas</b></h2>
          <div className='w-full flex justify-evenly my-1'>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'acetone'}
              isSelected={selectedMolecule === 'acetone'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='text-sm 2xl:text-base'>
                  Acetona
                </div>
                <div className='text-md 2xl:text-lg'>
                  <b>C<sub>3</sub>H<sub>6</sub>O</b>
                </div>
              </div>
            </MoleculeButton>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'aspirin'}
              isSelected={selectedMolecule === 'aspirin'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='text-sm 2xl:text-base'>
                  Ácido acetilsalicílico
                </div>
                <div className='text-md 2xl:text-lg'>
                  <b>C<sub>9</sub>H<sub>8</sub>O<sub>4</sub></b>
                </div>
              </div>
            </MoleculeButton>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'glucose'}
              isSelected={selectedMolecule === 'glucose'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='text-sm 2xl:text-base'>
                  Glucosa
                </div>
                <div className='text-md 2xl:text-lg'>
                  <b>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></b>
                </div>
              </div>
            </MoleculeButton>
          </div>

          {/* METALLIC BONDS */}
          <h2 className='w-full text-md w850:text-center'><b>Enlaces metálicos</b></h2>
          <div className='w-full flex justify-evenly my-1'>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'chromium'}
              isSelected={selectedMolecule === 'chromium'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='text-sm 2xl:text-base'>
                  Cromo
                </div>
                <div className='text-md 2xl:text-lg'>
                  <b>Cr</b>
                </div>
              </div>
            </MoleculeButton>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'gold'}
              isSelected={selectedMolecule === 'gold'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='text-sm 2xl:text-base'>
                  Oro
                </div>
                <div className='text-md 2xl:text-lg'>
                  <b>Au</b>
                </div>
              </div>
            </MoleculeButton>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'titanium'}
              isSelected={selectedMolecule === 'titanium'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='text-sm 2xl:text-base'>
                  Titanio
                </div>
                <div className='text-md 2xl:text-lg'>
                  <b>Ti</b>
                </div>
              </div>
            </MoleculeButton>
          </div>
        </div>
      </Controls3D>
      <style>{`
        
        @media (max-width: 850px) {
          #controls::-webkit-scrollbar {
            display: none;
          }
        }
        #molecules::-webkit-scrollbar {
          width: 10px;
        }

        #molecules::-webkit-scrollbar-track {
          background: ${colorPalette.controlsScrollbarTrack};
        }

        #molecules::-webkit-scrollbar-thumb {
          background: ${colorPalette.controlsScrollbarThumb};
          border-radius: 6px;
        }

        #molecules::-webkit-scrollbar-thumb:hover {
          background: ${colorPalette.controlsScrollbarThumbHover};
        }
      `}
      </style>
    </div>
  );
}