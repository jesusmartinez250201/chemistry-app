import React from 'react'
import { Table } from '../../utils/ElementsData.json'
import { Sphere, Html } from '@react-three/drei'
import { AcetyleneFormula } from '../MoleculeFormulas'
import CylinderBond from '../CylinderBond'

export default function Acetylene({ ideal3D, isReal }) {
  const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]
  const hydrogenColor = `#${Table.Row.find(el => el.Cell[0] === '1').Cell[4]}`,
    hydrogenRadius = Table.Row.find(el => el.Cell[0] === '1').Cell[19],
    carbonColor = `#${Table.Row.find(el => el.Cell[0] === '6').Cell[4]}`,
    carbonRadius = Table.Row.find(el => el.Cell[0] === '6').Cell[21],
    carbonCoords = [
      [-0.6, 0, 0],
      [0.6, 0, 0],
    ],
    hydrogenCoords = [
      [-1.6, 0, 0],
      [1.6, 0, 0]
    ],
    SCALE = [0.01, 0.01, 0.01]

  return (
    <>
      {
        (!isReal && !ideal3D) && (
          <Html position={[0, 0, 0]} center transform={true} zIndexRange={[0, 0]}>
            <div className='w-[200px] h-auto unselectable' style={{ fill: colorPalette.text }}>
              <AcetyleneFormula />
            </div>
          </Html>
        )
      }
      {
        ((ideal3D && !isReal) || (!ideal3D && isReal) || (isReal)) && (
          <>
            {
              hydrogenCoords.map((coord, index) => {
                return (
                  <React.Fragment key={`hydrogen-${index}`}>
                    <Sphere args={[isReal ? hydrogenRadius : 45]} position={coord} scale={SCALE}>
                      <meshStandardMaterial color={hydrogenColor} />
                    </Sphere>
                    <Html position={coord} center transform={false} zIndexRange={[0, 0]}>
                      <div className='text-3xl text-white unselectable'>H</div>
                    </Html>
                  </React.Fragment>
                )
              })
            }
            {
              carbonCoords.map((coord, index) => (
                <React.Fragment key={`carbon-${index}`}>
                  <Sphere args={[isReal ? carbonRadius : 45]} position={coord} scale={SCALE}>
                    <meshStandardMaterial color={carbonColor} />
                  </Sphere>
                  <Html position={coord} center transform={false} zIndexRange={[0, 0]}>
                    <div className='text-3xl text-white unselectable'>C</div>
                  </Html>
                </React.Fragment>
              ))
            }
            {
              !isReal && (
                <>
                  <CylinderBond start={carbonCoords[0]} end={hydrogenCoords[0]} />
                  <CylinderBond start={carbonCoords[1]} end={hydrogenCoords[1]} />
                  <CylinderBond start={[carbonCoords[0][0], carbonCoords[0][1] + 0.2, carbonCoords[0][2]]} end={[carbonCoords[1][0], carbonCoords[1][1] + 0.2, carbonCoords[1][2]]} />
                  <CylinderBond start={[carbonCoords[0][0], carbonCoords[0][1] - 0.2, carbonCoords[0][2]]} end={[carbonCoords[1][0], carbonCoords[1][1] - 0.2, carbonCoords[1][2]]} />
                  <CylinderBond start={carbonCoords[0]} end={carbonCoords[1]} />
                </>
              )
            }
          </>
        )
      }
    </>
  )

}