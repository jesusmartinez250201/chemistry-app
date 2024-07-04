import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
//import elements.elements.hidrogen from '../utils/ElementsData.json'

function MenuBond() {
  const SCALE = 0.01;
  const myMesh = useRef()
  useFrame(() => {
    //console.log(hidrogen.name);
    myMesh.current.rotation.y += 0.01;
  })
  return (
    /**MOLECULA DE AGUA */
    <group ref={myMesh}>
      {/* ATOMO DE OXIGENO */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[(63 * SCALE)]} />
        <meshStandardMaterial color='red' />
      </mesh>
      <mesh
        position={[0, -0.55, -0.7]}
        rotation={[(52.225 * Math.PI / 180), 0, 0]}
      >
        <cylinderGeometry args={[0.12, 0.12, 2]} />
        <meshStandardMaterial color={0xcccccc} />
      </mesh>
      <mesh
        position={[0, -0.55, 0.7]}
        rotation={[-(52.225 * Math.PI / 180), 0, 0]}
      >
        <cylinderGeometry args={[0.12, 0.12, 2]} />
        <meshStandardMaterial color={0xcccccc} />
      </mesh>
      {/* ATOMO DE HIDROGENO */}
      <mesh position={[0, -1.2, 1.5]}>
        <sphereGeometry args={[(32 * SCALE)]} />
        <meshStandardMaterial color='blue' />
      </mesh>
      {/* ATOMO DE HIDROGENO */}
      <mesh position={[0, -1.2, -1.5]}>
        <sphereGeometry args={[(32 * SCALE)]} />
        <meshStandardMaterial color='blue' />
      </mesh>
    </group>
  )
}

export default function Bonds() {

  return (
    <>
      <h2 className='overflow-hidden text-center'>Enlaces</h2>
      <Canvas>
        <ambientLight intensity={0.9} />
        <directionalLight position={[0, 0, 5]} />
        <MenuBond />
      </Canvas>
    </>
  )
}