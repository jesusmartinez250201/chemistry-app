import React from 'react'
import { Table } from '../../utils/ElementsData.json'
import { Sphere, Html } from '@react-three/drei'
import CylinderBond from '../CylinderBond'

export default function Titanium({ ideal3D, isReal }) {
  const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]
  const titaniumColor = `#${Table.Row.find(el => el.Cell[0] === '22').Cell[4]}`,
    titaniumRadius = Table.Row.find(el => el.Cell[0] === '22').Cell[23],
    realTitaniumCoords = [
      [0.0, 1.415, 0.0209],
      [4.57, 1.415, 0.0209],
      [2.285, 1.415, 3.9809],
      [-2.285, 1.415, 3.9809],
      [-4.57, 1.415, 0.0209],
      [-2.285, 1.415, -3.9391],
      [2.285, 1.415, -3.9391],
      [0.0, -1.415, 0.0209],
      [4.57, -1.415, 0.0209],
      [2.285, -1.415, 3.9809],
      [-2.285, -1.415, 3.9809],
      [-4.57, -1.415, 0.0209],
      [-2.285, -1.415, -3.9391],
      [2.285, -1.415, -3.9391],
      [0.0, 0.0, 2.3059],
      [-2.285, 0.0, -1.2991],
      [2.285, 0.0, -1.2991]
    ],
    idealTitaniumCoords = [
      [1.5, 1.5, 0],
      [0.75, 1.5, 1.299],
      [-0.75, 1.5, 1.299],
      [-1.5, 1.5, 0],
      [-0.75, 1.5, -1.299],
      [0.75, 1.5, -1.299],
      [1.5, -1.5, 0],
      [0.75, -1.5, 1.299],
      [-0.75, -1.5, 1.299],
      [-1.5, -1.5, 0],
      [-0.75, -1.5, -1.299],
      [0.75, -1.5, -1.299],
      [0, 1.5, 0],
      [0, -1.5, 0],
      [0, 0, 0.866],
      [-0.75, 0, -0.433],
      [0.75, 0, -0.433]
    ],
    SCALE = [0.01, 0.01, 0.01]

  return (
    <>
      {
        (!isReal && !ideal3D) && (
          <Html position={[0, 0, 0]} center transform={true} zIndexRange={[0, 0]}>
            <div className='w-[200px] h-auto unselectable text-center text-6xl' style={{ color: colorPalette.text }}>
              Ti
            </div>
          </Html>
        )
      }
      {
        ((ideal3D && !isReal) || (!ideal3D && isReal) || (isReal)) && (
          <>
            {
              isReal ? (
                realTitaniumCoords.map((coord, index) => (
                  <React.Fragment key={`titanium-${index}`}>
                    <Sphere args={[isReal ? titaniumRadius : 55]} position={coord} scale={SCALE}>
                      <meshStandardMaterial color={titaniumColor} />
                    </Sphere>
                    <Html position={coord} center transform={false} zIndexRange={[0, 0]}>
                      <div className='text-3xl text-white unselectable'>Ti</div>
                    </Html>
                  </React.Fragment>
                ))
              ) : (
                idealTitaniumCoords.map((atom, index) => (
                  <React.Fragment key={`titanium-${index}`}>
                    <Sphere args={[isReal ? titaniumRadius : 55]} position={atom} scale={SCALE}>
                      <meshStandardMaterial color={titaniumColor} />
                    </Sphere>
                    <Html position={atom} center transform={false} zIndexRange={[0, 0]}>
                      <div className='text-3xl text-white unselectable'>Ti</div>
                    </Html>
                  </React.Fragment>
                ))
              )
            }
            {
              !isReal && (
                <>
                  <CylinderBond start={idealTitaniumCoords[0]} end={idealTitaniumCoords[1]} />
                  <CylinderBond start={idealTitaniumCoords[0]} end={idealTitaniumCoords[3]} /> 
                  <CylinderBond start={idealTitaniumCoords[0]} end={idealTitaniumCoords[5]} />
                  <CylinderBond start={idealTitaniumCoords[5]} end={idealTitaniumCoords[4]} />
                  <CylinderBond start={idealTitaniumCoords[0]} end={idealTitaniumCoords[6]} />
                  <CylinderBond start={idealTitaniumCoords[0]} end={idealTitaniumCoords[12]} />
                  <CylinderBond start={idealTitaniumCoords[1]} end={idealTitaniumCoords[2]} />
                  <CylinderBond start={idealTitaniumCoords[1]} end={idealTitaniumCoords[7]} />
                  <CylinderBond start={idealTitaniumCoords[1]} end={idealTitaniumCoords[4]} />
                  <CylinderBond start={idealTitaniumCoords[2]} end={idealTitaniumCoords[3]} />
                  <CylinderBond start={idealTitaniumCoords[2]} end={idealTitaniumCoords[8]} />
                  <CylinderBond start={idealTitaniumCoords[2]} end={idealTitaniumCoords[5]} />
                  <CylinderBond start={idealTitaniumCoords[3]} end={idealTitaniumCoords[9]} />
                  <CylinderBond start={idealTitaniumCoords[3]} end={idealTitaniumCoords[4]} />
                  <CylinderBond start={idealTitaniumCoords[4]} end={idealTitaniumCoords[10]} />
                  <CylinderBond start={idealTitaniumCoords[5]} end={idealTitaniumCoords[11]} />
                  <CylinderBond start={idealTitaniumCoords[6]} end={idealTitaniumCoords[7]} />
                  <CylinderBond start={idealTitaniumCoords[6]} end={idealTitaniumCoords[9]} />
                  <CylinderBond start={idealTitaniumCoords[9]} end={idealTitaniumCoords[10]} />
                  <CylinderBond start={idealTitaniumCoords[10]} end={idealTitaniumCoords[11]} />
                  <CylinderBond start={idealTitaniumCoords[6]} end={idealTitaniumCoords[11]} />
                  <CylinderBond start={idealTitaniumCoords[7]} end={idealTitaniumCoords[8]} />
                  <CylinderBond start={idealTitaniumCoords[7]} end={idealTitaniumCoords[10]} />
                  <CylinderBond start={idealTitaniumCoords[8]} end={idealTitaniumCoords[9]} />
                  <CylinderBond start={idealTitaniumCoords[8]} end={idealTitaniumCoords[11]} />
                  <CylinderBond start={idealTitaniumCoords[13]} end={idealTitaniumCoords[12]} />
                  <CylinderBond start={idealTitaniumCoords[15]} end={idealTitaniumCoords[14]} />
                  <CylinderBond start={idealTitaniumCoords[16]} end={idealTitaniumCoords[14]} />
                  <CylinderBond start={idealTitaniumCoords[15]} end={idealTitaniumCoords[16]} />
                </>
              )
            }
          </>
        )
      }
    </>
  )
}