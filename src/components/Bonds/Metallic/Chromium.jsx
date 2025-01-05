import React from 'react'
import { Table } from '../../utils/ElementsData.json'
import { Sphere, Html, Edges } from '@react-three/drei'
import CylinderBond from '../CylinderBond'

export default function Chromium({ ideal3D, isReal }) {
  const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]
  const chromiumColor = `#${Table.Row.find(el => el.Cell[0] === '24').Cell[4]}`,
    chromiumRadius = Table.Row.find(el => el.Cell[0] === '24').Cell[23],
    chromiumCoords = [
      [0, 0, 0],
      [1.485, 1.485, 1.485],
      [1.485, -1.485, 1.485],
      [-1.485, 1.485, 1.485],
      [-1.485, -1.485, 1.485],
      [1.485, 1.485, -1.485],
      [1.485, -1.485, -1.485],
      [-1.485, 1.485, -1.485],
      [-1.485, -1.485, -1.485],

    ],
    SCALE = [0.01, 0.01, 0.01]

  return (
    <>
      {
        (!isReal && !ideal3D) && (
          <Html position={[0, 0, 0]} center transform={true} zIndexRange={[0, 0]}>
            <div className='w-[200px] h-auto unselectable text-center text-6xl' style={{ color: colorPalette.text }}>
              Cr
            </div>
          </Html>
        )
      }
      {
        ((ideal3D && !isReal) || (!ideal3D && isReal) || (isReal)) && (
          <>
            {
              chromiumCoords.map((coord, index) => (
                <React.Fragment key={`chromium-${index}`}>
                  <Sphere args={[isReal ? chromiumRadius : 65]} position={coord} scale={SCALE}>
                    <meshStandardMaterial color={chromiumColor} />
                  </Sphere>
                  <Html position={coord} center transform={false} zIndexRange={[0, 0]}>
                    <div className='text-3xl text-white unselectable' >
                      Cr
                    </div>
                  </Html>
                </React.Fragment>
              ))
            }
            {
              !isReal && (
                <>
                  <mesh>
                    <boxGeometry args={[2.97, 2.97, 2.97]} />
                    <meshStandardMaterial visible={false} />
                    <Edges color={colorPalette.lines3d} />
                  </mesh>
                  <CylinderBond start={chromiumCoords[1]} end={chromiumCoords[8]} />
                  <CylinderBond start={chromiumCoords[2]} end={chromiumCoords[7]} />
                  <CylinderBond start={chromiumCoords[3]} end={chromiumCoords[6]} />
                  <CylinderBond start={chromiumCoords[4]} end={chromiumCoords[5]} />
                </>
              )
            }
          </>
        )
      }
    </>
  )
}