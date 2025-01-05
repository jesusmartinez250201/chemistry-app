import React from 'react'
import { Table } from '../../utils/ElementsData.json'
import { Sphere, Html } from '@react-three/drei'
import CylinderBond from '../CylinderBond'
import { AmmoniaFormula } from '../MoleculeFormulas'

export default function Ammonia({ ideal3D, isReal }) {
  const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]
  const nitrogenColor = `#${Table.Row.find(el => el.Cell[0] === '7').Cell[4]}`,
    nitrogenRadius = Table.Row.find(el => el.Cell[0] === '7').Cell[19],
    hydrogenColor = `#${Table.Row.find(el => el.Cell[0] === '1').Cell[4]}`,
    hydrogenRadius = Table.Row.find(el => el.Cell[0] === '1').Cell[19],
    nitrogenCoords = [
      [0, 0, 0],
    ],
    hydrogenCoords = [
      [-0.012, -0.96, -0.255],
      [0.838, 0.47, -0.255],
      [-0.825, 0.49, -0.255]
    ],
    SCALE = [0.01, 0.01, 0.01]

  return (
    <>
      {
        (!isReal && !ideal3D) && (
          <Html position={[0, 0, 0]} center transform={true} zIndexRange={[0, 0]}>
            <div className='w-[200px] h-auto unselectable' style={{ fill: colorPalette.text, stroke: colorPalette.text }}>
              <AmmoniaFormula />
            </div>
          </Html>
        )
      }
      {
        ((ideal3D && !isReal) || (!ideal3D && isReal) || (isReal)) && (
          <>
            {
              nitrogenCoords.map((coord, index) => (
                <React.Fragment key={`carbon-${index}`}>
                  <Sphere args={[isReal ? nitrogenRadius : 45]} position={coord} scale={SCALE}>
                    <meshStandardMaterial color={nitrogenColor} />
                  </Sphere>
                  <Html position={coord} center transform={false} zIndexRange={[0, 0]}>
                    <div className='text-3xl text-white unselectable'>N</div>
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
                      <div className='text-3xl text-white unselectable'>H</div>
                    </Html>
                    {
                      !isReal && (
                        <CylinderBond start={nitrogenCoords[0]} end={coord} />
                      )
                    }
                  </React.Fragment>
                )
              })
            }
          </>
        )
      }
    </>
  )

}