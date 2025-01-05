import React from 'react'
import { Table } from '../../utils/ElementsData.json'
import { Sphere, Html, Edges } from '@react-three/drei'
import CylinderBond from '../CylinderBond'

export default function Gold({ ideal3D, isReal }) {
  const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]
  const goldColor = `#${Table.Row.find(el => el.Cell[0] === '79').Cell[4]}`,
    goldRadius = Table.Row.find(el => el.Cell[0] === '79').Cell[23],
    goldCoords = [
      [2.085, 2.085, 2.085],
      [2.085, -2.085, 2.085],
      [-2.085, 2.085, 2.085],
      [-2.085, -2.085, 2.085],
      [2.085, 2.085, -2.085],
      [2.085, -2.085, -2.085],
      [-2.085, 2.085, -2.085],
      [-2.085, -2.085, -2.085],
      [0, 0, 2.085],
      [0, 0, -2.085],
      [0, 2.085, 0],
      [0, -2.085, 0],
      [2.085, 0, 0],
      [-2.085, 0, 0]
    ],
    SCALE = [0.01, 0.01, 0.01]

  return (
    <>
      {
        (!isReal && !ideal3D) && (
          <Html position={[0, 0, 0]} center transform={true} zIndexRange={[0, 0]}>
            <div className='w-[200px] h-auto unselectable text-center text-6xl' style={{ color: colorPalette.text }}>
              Au
            </div>
          </Html>
        )
      }
      {
        ((ideal3D && !isReal) || (!ideal3D && isReal) || (isReal)) && (
          <>
            {
              goldCoords.map((coord, index) => (
                <React.Fragment key={`gold-${index}`}>
                  <Sphere args={[isReal ? goldRadius : 65]} position={coord} scale={SCALE}>
                    <meshStandardMaterial color={goldColor} />
                  </Sphere>
                  <Html position={coord} center transform={false} zIndexRange={[0, 0]}>
                    <div className='text-3xl text-white unselectable'>Au</div>
                  </Html>
                </React.Fragment>
              ))
            }
            {
              !isReal && (
                <>
                <mesh>
                  <boxGeometry args={[4.17, 4.17, 4.17]} />
                  <meshStandardMaterial visible={false} />
                  <Edges color={colorPalette.lines3d} />
                </mesh>
                <CylinderBond start={goldCoords[0]} end={goldCoords[3]} />
                <CylinderBond start={goldCoords[1]} end={goldCoords[2]} />
                <CylinderBond start={goldCoords[4]} end={goldCoords[7]} />
                <CylinderBond start={goldCoords[5]} end={goldCoords[6]} />
                <CylinderBond start={goldCoords[6]} end={goldCoords[0]} />
                <CylinderBond start={goldCoords[7]} end={goldCoords[1]} />
                <CylinderBond start={goldCoords[4]} end={goldCoords[2]} />
                <CylinderBond start={goldCoords[5]} end={goldCoords[3]} />
                <CylinderBond start={goldCoords[0]} end={goldCoords[5]} />
                <CylinderBond start={goldCoords[1]} end={goldCoords[4]} />
                <CylinderBond start={goldCoords[3]} end={goldCoords[6]} />
                <CylinderBond start={goldCoords[2]} end={goldCoords[7]} />
                </>
              )
            }
          </>
        )
      }
    </>
  )
}