import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { Edges } from '@react-three/drei';

function Atom(props) {
  return (
    <mesh position={props.position}>
      <sphereGeometry args={[0.3]} />
      <meshStandardMaterial color='pink' />
    </mesh>
  )
}

function MyAnimatedBox() {
  const myMesh = useRef()
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
    <group ref={myMesh}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial visible={false} color='black' />
        <Edges color="black"/>
      </mesh>
      {
        corners.map((corner, index) => (
          <Atom key={index} position={corner} />
        ))
      }
    </group>

  )
}


export default function CrystallineStructure() {

  return (
    <>
      <h2 className='overflow-hidden text-center'>Estructura Cristalina</h2>
      <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 0, 5]} />
        <MyAnimatedBox />
      </Canvas>
    </>
  )
}