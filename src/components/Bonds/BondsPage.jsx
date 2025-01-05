import { useRef, useState, useEffect } from 'react';
import Navbar from '../Navbar';
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
import { BtnIdealMolecule, BtnIdeal2DMolecule, BtnIdeal3DMolecule, BtnRealMolecule } from '../Icons/BtnMolecules';
import Center from '../Icons/Center';
import Chromium from './Metallic/Chromium';
import Gold from './Metallic/Gold';
import Titanium from './Metallic/Titanium';
import RealButton from './Buttons/RealButton';
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
    btn2D3DContainer = useRef(),
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
      cameraRef.current.position.set(0, 0, 7);
      controlsRef.current.target.set(0, 0, 0);
    },
    CamControls = () => {
      const { camera } = useThree()

      useEffect(() => {
        console.log(window.data.store.get('selectedColorPalette'));
        cameraRef.current = camera;
        camera.position.set(0, 0, 7);
      }, [camera]);

      return (
        <>
          <OrbitControls ref={controlsRef} enableRotate={rotate} camera={camera} />
        </>
      )
    }

  return (
    <div className='h-screen flex flex-col'>
        <Navbar />
      <div id='3d-view' className='flex flex-col flex-grow relative items-center justify-end min-h-52'>
        <Canvas style={{ backgroundColor: colorPalette.background }}>
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
          <div className='w-full flex justify-evenly my-1'>
            <RealButton
              onClick={handleReal}
              value={'ideal'}
              isSelected={!isReal}
              colorPalette={colorPalette}>
              IDEAL
              <BtnIdealMolecule />
            </RealButton>
            <RealButton
              onClick={handleReal}
              value={'real'}
              isSelected={isReal}
              colorPalette={colorPalette}>
              REAL
              <BtnRealMolecule />
            </RealButton>
          </div>
          <div className={`w-full flex justify-evenly my-2 ${isReal ? 'hidden' : 'block'}`} ref={btn2D3DContainer}>
            <RealButton
              onClick={handleIdeal3D}
              value={'2D'}
              isSelected={!ideal3D}
              colorPalette={colorPalette}>
              2D
              <BtnIdeal2DMolecule />
            </RealButton>
            <RealButton
              onClick={handleIdeal3D}
              value={'3D'}
              isSelected={ideal3D}
              colorPalette={colorPalette}>
              3D
              <BtnIdeal3DMolecule />
            </RealButton>
          </div>
          <div className='w-full flex justify-center my-5'>
            <CenterButton
              onClick={handleCameraCenter}
              isSelected={false}
              colorPalette={colorPalette}>
              <Center />
              <span className='ml-1'>CENTRAR</span>
            </CenterButton>
          </div>

          {/* COVALENT BONDS */}
          <h2 className='w-full text-center text-2xl'>Enlaces covalentes</h2>
          <div className='w-full flex justify-evenly my-1'>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'carbonDioxide'}
              isSelected={selectedMolecule === 'carbonDioxide'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='pt-1'>
                  Dióxido de carbono
                </div>
                <div className='text-3xl pb-2'>
                  CO<sub>2</sub>
                </div>
              </div>
            </MoleculeButton>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'ammonia'}
              isSelected={selectedMolecule === 'ammonia'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='pt-1'>
                  Amoniaco
                </div>
                <div className='text-3xl pb-2'>
                  NH<sub>3</sub>
                </div>
              </div>
            </MoleculeButton>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'acetylene'}
              isSelected={selectedMolecule === 'acetylene'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='pt-1'>
                  Acetileno
                </div>
                <div className='text-3xl pb-2'>
                  C<sub>2</sub>H<sub>2</sub>
                </div>
              </div>
            </MoleculeButton>
          </div>

          {/* IONIC BONDS*/}
          <h2 className='w-full text-center text-2xl'>Enlaces iónicos</h2>
          <div className='w-full flex justify-evenly my-1'>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'sodiumChloride'}
              isSelected={selectedMolecule === 'sodiumChloride'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='pt-1'>
                  Cloruro de sodio
                </div>
                <div className='text-3xl pb-2'>
                  NaCl
                </div>
              </div>
            </MoleculeButton>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'magnesiumChloride'}
              isSelected={selectedMolecule === 'magnesiumChloride'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='pt-1'>
                  Cloruro de magnesio
                </div>
                <div className='text-3xl pb-2'>
                  MgCl<sub>2</sub>
                </div>
              </div>
            </MoleculeButton>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'potassiumPermanganate'}
              isSelected={selectedMolecule === 'potassiumPermanganate'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='pt-1'>
                  Permanganato de potasio
                </div>
                <div className='text-3xl pb-2'>
                  KMnO<sub>4</sub>
                </div>
              </div>
            </MoleculeButton>
          </div>

          {/* ORGANIC MOLECULES */}
          <h2 className='w-full text-center text-2xl'>Moleculas organicas</h2>
          <div className='w-full flex justify-evenly my-1'>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'acetone'}
              isSelected={selectedMolecule === 'acetone'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='pt-1'>
                  Acetona
                </div>
                <div className='text-3xl pb-2'>
                  C<sub>3</sub>H<sub>6</sub>O
                </div>
              </div>
            </MoleculeButton>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'aspirin'}
              isSelected={selectedMolecule === 'aspirin'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='pt-1'>
                  Ácido acetilsalicílico
                </div>
                <div className='text-3xl pb-2'>
                  C<sub>9</sub>H<sub>8</sub>O<sub>4</sub>
                </div>
              </div>
            </MoleculeButton>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'glucose'}
              isSelected={selectedMolecule === 'glucose'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='pt-1'>
                  Glucosa
                </div>
                <div className='text-3xl pb-2'>
                  C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>
                </div>
              </div>
            </MoleculeButton>
          </div>

          {/* METALLIC BONDS */}
          <h2 className='w-full text-center text-2xl'>Enlaces metálicos</h2>
          <div className='w-full flex justify-evenly my-1'>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'chromium'}
              isSelected={selectedMolecule === 'chromium'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='pt-1'>
                  Cromo
                </div>
                <div className='text-3xl pb-2'>
                  Cr
                </div>
              </div>
            </MoleculeButton>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'gold'}
              isSelected={selectedMolecule === 'gold'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='pt-1'>
                  Oro
                </div>
                <div className='text-3xl pb-2'>
                  Au
                </div>
              </div>
            </MoleculeButton>
            <MoleculeButton
              onClick={handleSelectedMolecule} value={'titanium'}
              isSelected={selectedMolecule === 'titanium'}
              colorPalette={colorPalette}>
              <div className='pointer-events-none'>
                <div className='pt-1'>
                  Titanio
                </div>
                <div className='text-3xl pb-2'>
                  Ti
                </div>
              </div>
            </MoleculeButton>
          </div>

        </Controls3D>
      </div>
    </div>
  );
}