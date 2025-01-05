import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Cylinder } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'

function MenuBond({ hovered }) {
  const myMesh = useRef()

  const { scale } = useSpring({
    scale: hovered ? 1.2 : 1,
    config: { tension: 300, friction: 10 }
  })

  useFrame(() => {
    myMesh.current.rotation.y += 0.01;
  })

  return (
    <animated.group
      ref={myMesh}
      position={[0, 0.5, 1]}
      scale={scale}
    >
      <Sphere position={[0, 0, 0]} args={[0.63]}>
        <meshStandardMaterial color='red' />
      </Sphere>
      <Cylinder position={[0, -0.55, -0.7]} rotation={[(52.225 * Math.PI / 180), 0, 0]} args={[0.12, 0.12, 2]}>
        <meshStandardMaterial color={0xcccccc} />
      </Cylinder>
      <Cylinder position={[0, -0.55, 0.7]} rotation={[-(52.225 * Math.PI / 180), 0, 0]} args={[0.12, 0.12, 2]}>
        <meshStandardMaterial color={0xcccccc} />
      </Cylinder>
      <Sphere position={[0, -1.2, 1.5]} args={[0.32]}>
        <meshStandardMaterial color='blue' />
      </Sphere>
      <Sphere position={[0, -1.2, -1.5]} args={[0.32]}>
        <meshStandardMaterial color='blue' />
      </Sphere>
    </animated.group>
  )
}

export default function Bonds() {
  const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <h2 className='text-3xl text-center unselectable'
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        style={{ color: colorPalette.textTitles }}>
        Enlaces
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
        <MenuBond hovered={hovered} />
      </Canvas>
    </>
  )
}