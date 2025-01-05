import { useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { Edges } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

function Bohr3DModel({ hovered }) {
  const { scale } = useSpring({
    scale: hovered ? 1.2 : 1,
    config: { tension: 300, friction: 10 }
  }),
    groupRef = useRef(),
    Shell = ({ radius, electronNumber, rotationSpeed }) => {
      const groupRef = useRef();

      useFrame(() => {
        groupRef.current.rotation.z += rotationSpeed;
      });

      return (
        <group ref={groupRef}>
          <mesh position={[0, 0, 0]}>
            <circleGeometry args={[radius, 48]} />
            <meshStandardMaterial visible={false} />
            <Edges color={colorPalette.lines3d} />
          </mesh>
          <Electrons radius={radius} electronNumber={electronNumber} />
        </group>
      )
    },
    Electrons = ({ radius, electronNumber }) => {
      const electrons = [];
      for (let i = 0; i < electronNumber; i++) {
        const angle = (i / electronNumber) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        electrons.push(
          <mesh position={[x, y, 0]} key={i}>
            <sphereGeometry args={[0.09, 32, 32]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        );
      }
      return <group>{electrons}</group>;
    },
    Core = () => {
      return (
        <group>
          {/* Red Spheres */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="red" />
          </mesh>
          <mesh position={[0.2, 0.2, 0]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="red" />
          </mesh>
          <mesh position={[-0.2, -0.2, 0]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="red" />
          </mesh>
          <mesh position={[0.2, -0.2, 0]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="red" />
          </mesh>
          <mesh position={[-0.2, 0.2, 0]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="red" />
          </mesh>

          {/* Yellow Spheres */}
          <mesh position={[0.1, 0.1, 0.1]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="yellow" />
          </mesh>
          <mesh position={[-0.1, -0.1, 0.1]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="yellow" />
          </mesh>
          <mesh position={[0.1, -0.1, -0.1]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="yellow" />
          </mesh>
          <mesh position={[-0.1, 0.1, -0.1]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="yellow" />
          </mesh>
        </group>
      )
    }

  useFrame(() => {
    groupRef.current.rotation.x += 0.007;
    groupRef.current.rotation.y += 0.007;
  });
  return (
    <>
      <animated.group ref={groupRef} scale={scale} position={[0, 0.5, 0]}>
        <Core />
        <Shell radius={1} electronNumber={2} rotationSpeed={0.007} />
        <Shell radius={1.5} electronNumber={8} rotationSpeed={-0.007} />
        <Shell radius={2} electronNumber={8} rotationSpeed={0.007} />
      </animated.group>
    </>
  )
}


export default function BohrModel() {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <h2
        className='text-3xl text-center unselectable'
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        style={{ color: colorPalette.textTitles }}>
        Modelo atómico de Bohr
      </h2>
      <Canvas
        className='bg-transparent'
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[0, 0, 5]} />
        {
          hovered && (
            <>
              <directionalLight position={[0, 8, 0]} intensity={3} color={'white'} />
              <directionalLight position={[0, -8, 0]} intensity={3} color={'white'} />
            </>
          )
        }
        <Bohr3DModel hovered={hovered} />
      </Canvas>
    </>
  )
}