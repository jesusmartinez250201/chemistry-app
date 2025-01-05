import React from 'react'
import { Table } from '../../utils/ElementsData.json'
import { Cylinder, Sphere, Html } from '@react-three/drei'
import { CarbonDioxideFormula } from '../MoleculeFormulas'

export default function CarbonDioxide({ ideal3D, isReal }) {
  const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]
  const carbonColor = `#${Table.Row.find(el => el.Cell[0] === '6').Cell[4]}`,
    carbonRadius = Table.Row.find(el => el.Cell[0] === '6').Cell[20],
    oxygenColor = `#${Table.Row.find(el => el.Cell[0] === '8').Cell[4]}`,
    oxygenRadius = Table.Row.find(el => el.Cell[0] === '8').Cell[20],
    bondColor = 'white',
    bondRadius = 0.06,
    bondLength = 1.2,
    carbonCoords = [
      [0, 0, 0],
    ],
    oxygenCoords = [
      [-1.2, 0, 0],
      [1.2, 0, 0]
    ],
    SCALE = [0.01, 0.01, 0.01]

  return (
    <>
      {
        (!isReal && !ideal3D) && (
          <Html position={[0, 0, 0]} center transform={true} zIndexRange={[0, 0]}>
            <div className='w-[200px] unselectable' style={{fill: colorPalette.text}}>
              <CarbonDioxideFormula />
            </div>
          </Html>
        )
      }
      {
        ((ideal3D && !isReal) || (!ideal3D && isReal) || (isReal)) && (
          <>
            {
              carbonCoords.map((coord, index) => (
                <React.Fragment key={`carbon-${index}`}>
                  <Sphere args={[isReal ? carbonRadius : 45]} position={coord} scale={SCALE}>
                    <meshStandardMaterial color={carbonColor} />
                  </Sphere>
                  <Html position={coord} center transform={false} zIndexRange={[0, 0]} >
                    <div className='text-3xl text-white unselectable'>C</div>
                  </Html>
                  {
                    !isReal && (
                      <>
                        <Cylinder args={[bondRadius, bondRadius, bondLength]} position={[-0.6, 0.1, 0]} rotation={[0, 0, Math.PI / 2]} >
                          <meshStandardMaterial color={bondColor} />
                        </Cylinder>
                        <Cylinder args={[bondRadius, bondRadius, bondLength]} position={[-0.6, -0.1, 0]} rotation={[0, 0, Math.PI / 2]} >
                          <meshStandardMaterial color={bondColor} />
                        </Cylinder>
                        <Cylinder args={[bondRadius, bondRadius, bondLength]} position={[0.6, 0.1, 0]} rotation={[0, 0, Math.PI / 2]} >
                          <meshStandardMaterial color={bondColor} />
                        </Cylinder>
                        <Cylinder args={[bondRadius, bondRadius, bondLength]} position={[0.6, -0.1, 0]} rotation={[0, 0, Math.PI / 2]} >
                          <meshStandardMaterial color={bondColor} />
                        </Cylinder>
                      </>
                    )
                  }
                </React.Fragment>
              ))
            }
            {
              oxygenCoords.map((coord, index) => (
                <React.Fragment key={`oxygen-${index}`}>
                  <Sphere args={[isReal ? oxygenRadius : 45]} position={coord} scale={SCALE}>
                    <meshStandardMaterial color={oxygenColor} />
                  </Sphere>
                  <Html position={coord} center transform={false} zIndexRange={[0, 0]}>
                    <div className='text-3xl text-white unselectable'>O</div>
                  </Html>
                </React.Fragment>
              ))
            }
          </>
        )
      }
    </>
  )

}