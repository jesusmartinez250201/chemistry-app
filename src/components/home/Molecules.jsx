import React, { useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'

function MyAnimatedBox() {
    const myMesh = React.useRef()
    useFrame(() => {
        myMesh.current.rotation.x += 0.01;
        myMesh.current.rotation.y += 0.01;
      })
    return (
      <mesh ref={myMesh}>
        <boxGeometry />
        <meshBasicMaterial wireframe={true} color='black' />
      </mesh>
    )
  }

export default function CrystallineStructure() {

    return (
        <>
        <h2 className='overflow-hidden'>Moleculas</h2>
        <Canvas>
            <MyAnimatedBox />
        </Canvas>
        </>
    )
}