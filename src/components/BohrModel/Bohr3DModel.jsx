import { useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Core from "./3DComponents/Core";
import Shell from "./3DComponents/Shell";
import { data } from '../utils/BohrModelData.json';

const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export default function Bohr3DModel({ isReal, atomicNumber, onCenterCamera, cameraRef }) {
  const controlsRef = useRef(),
    element = data[atomicNumber - 1],
    shells = element.model,
    planckConstant = 1.054571628e-34,
    electronMass = 9.1093837015e-31,
    fineStructureConstant = 7.297e-3,
    lightSpeed = 299792458,
    bohrRadius = planckConstant / (electronMass * lightSpeed * fineStructureConstant),
    getRadius = (shell, atomicNumber) => {
      const squareShell = shell * shell;
      return squareShell * bohrRadius / atomicNumber;
    },
    drawShells = () => {
      let radius = 1;
      return shells.map((shell, index) => {
        const shellComponent = (
          <Shell key={index} radius={isReal ? getRadius(index + 1, atomicNumber) * 1e12 : radius} electronNumber={shell.electrons} rotationSpeed={0.004} />
        );
        radius += 1;
        return shellComponent;
      });
    },
    CamControls = () => {
      const { camera } = useThree()

      useEffect(() => {
        cameraRef.current = camera;
        camera.position.set(0, 0, 7);
      }, [camera]);

      useEffect(() => {
        onCenterCamera(cameraRef);
      });

      return (
        <>
          <OrbitControls ref={controlsRef} camera={camera} />
        </>
      )
    }

  return (
  <Canvas style={{ backgroundColor: colorPalette.background }}>
      <CamControls />
      <ambientLight intensity={1.2} />
      <pointLight position={[0, 1, 6]} intensity={4} />
      <pointLight position={[5, 1, 3]} intensity={4} />
      <pointLight position={[-5, 1, 3]} intensity={4} />
      {/* <gridHelper />
      <axesHelper args={[5]} /> */}
      {drawShells()}
      <Core isReal={isReal} />
    </Canvas>
  );
}