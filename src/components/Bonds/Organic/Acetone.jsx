import React from 'react'
import { Table } from '../../utils/ElementsData.json'
import { Sphere, Html } from '@react-three/drei'
import CylinderBond from '../CylinderBond'
import { AcetoneFormula } from '../MoleculeFormulas'

export default function Acetone({ ideal3D, isReal }) {
  const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]
  const oxygenColor = `#${Table.Row.find(el => el.Cell[0] === '8').Cell[4]}`,
    oxygenRadius = Table.Row.find(el => el.Cell[0] === '8').Cell[20],
    hydrogenColor = `#${Table.Row.find(el => el.Cell[0] === '1').Cell[4]}`,
    hydrogenRadius = Table.Row.find(el => el.Cell[0] === '1').Cell[19],
    carbonColor = `#${Table.Row.find(el => el.Cell[0] === '6').Cell[4]}`,
    carbonRadius = Table.Row.find(el => el.Cell[0] === '6').Cell[19],
    carbonCoords = [
      [0, 0, 0],
      [1.3, -0.7, 0],
      [-1.3, -0.7, 0]
    ],
    oxygenCoords = [
      [0, 1.3, 0]
    ],
    hydrogenCoords = [
      [1.6, -0.9, 1],
      [1.1, -1.6, -0.5],
      [2, -0.1, -0.5],
      [-1.1, -1.7, 0],
      [-1.8, -0.4, 0.9],
      [-1.8, -0.4, -0.9]
    ],
    SCALE = [0.01, 0.01, 0.01]

  return (
    <>
      {
        (!isReal && !ideal3D) && (
          <Html position={[0, 0, 0]} center transform={true} zIndexRange={[0, 0]}>
            <div className='w-[200px] h-auto unselectable' style={{ fill: colorPalette.text, stroke: 'none' }}>
              <AcetoneFormula />
            </div>
          </Html>
        )
      }
      {
        ((ideal3D && !isReal) || (!ideal3D && isReal) || (isReal)) && (
          <>
            {
              oxygenCoords.map((coord, index) => (
                <React.Fragment key={`carbon-${index}`}>
                  <Sphere args={[isReal ? oxygenRadius : 45]} position={coord} scale={SCALE}>
                    <meshStandardMaterial color={oxygenColor} />
                  </Sphere>
                  <Html position={coord} center transform={false} zIndexRange={[0, 0]}>
                    <div className='text-3xl text-white unselectable'>O</div>
                  </Html>
                </React.Fragment>
              ))
            }
            {
              hydrogenCoords.map((coord, index) => {
                return (
                  <React.Fragment key={`oxygen-${index}`}>
                    <Sphere args={[isReal ? hydrogenRadius : 45]} position={coord} scale={SCALE}>
                      <meshStandardMaterial color={hydrogenColor} />
                    </Sphere>
                    <Html position={coord} center transform={false} zIndexRange={[0, 0]}>
                      <div className='text-xl text-white unselectable'>H</div>
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
                  <Html position={coord} center transform={false}>
                    <div className='text-3xl text-white unselectable'>C</div>
                  </Html>
                </React.Fragment>
              ))
            }
            {
              !isReal && (
                <>
                  <CylinderBond start={carbonCoords[0]} end={carbonCoords[1]} />
                  <CylinderBond start={carbonCoords[0]} end={carbonCoords[2]} />
                  <CylinderBond start={[carbonCoords[0][0] - 0.1, carbonCoords[0][1], carbonCoords[0][2]]} end={[oxygenCoords[0][0] - 0.1, oxygenCoords[0][1], oxygenCoords[0][2]]} />
                  <CylinderBond start={[carbonCoords[0][0] + 0.1, carbonCoords[0][1], carbonCoords[0][2]]} end={[oxygenCoords[0][0] + 0.1, oxygenCoords[0][1], oxygenCoords[0][2]]} />
                  <CylinderBond start={carbonCoords[1]} end={hydrogenCoords[0]} />
                  <CylinderBond start={carbonCoords[1]} end={hydrogenCoords[1]} />
                  <CylinderBond start={carbonCoords[1]} end={hydrogenCoords[2]} />
                  <CylinderBond start={carbonCoords[2]} end={hydrogenCoords[3]} />
                  <CylinderBond start={carbonCoords[2]} end={hydrogenCoords[4]} />
                  <CylinderBond start={carbonCoords[2]} end={hydrogenCoords[5]} />
                </>
              )
            }
          </>
        )
      }
    </>
  )

}