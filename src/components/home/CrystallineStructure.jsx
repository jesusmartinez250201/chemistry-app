import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { Edges } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

function MyAnimatedBox({ hovered }) {
  const myMesh = useRef(),
    { scale } = useSpring({
      scale: hovered ? 1.2 : 1,
      config: { tension: 300, friction: 10 }
    }),
    Atom = ({ position }) => {
      return (
        <mesh position={position}>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial color='pink' />
        </mesh>
      )
    }

  useFrame(() => {
    myMesh.current.rotation.x += 0.005;
    myMesh.current.rotation.y += 0.005;
  })

  const corners = [
    [-1, -1, -1],
    [1, -1, -1],
    [1, 1, -1],
    [-1, 1, -1],
    [-1, -1, 1],
    [1, -1, 1],
    [1, 1, 1],
    [-1, 1, 1]
  ];

  return (
    <animated.group ref={myMesh} scale={scale} position={[0, 0.5, 0]}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial visible={false} color='black' />
        <Edges color={colorPalette.lines3d} />

      </mesh>
      {
        corners.map((corner, index) => (
          <Atom key={index} position={corner} />
        ))
      }
    </animated.group>

  )
}


export default function CrystallineStructure() {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <h2
        className='text-center unselectable'
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        style={{ color: colorPalette.text }}
      >
        Redes de Bravais
      </h2>
      <Canvas
        className='bg-transparent'
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 0, 5]} />
        {
          hovered && (
            <>
              <directionalLight position={[0, 8, 0]} intensity={3} color={'white'} />
              <directionalLight position={[0, -8, 0]} intensity={3} color={'white'} />
            </>
          )
        }
        <MyAnimatedBox hovered={hovered} />
      </Canvas>
    </>
  )
}