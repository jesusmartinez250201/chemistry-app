import React from 'react'
import { Table } from '../../utils/ElementsData.json'
import { Sphere, Html } from '@react-three/drei'
import CylinderBond from '../CylinderBond'
import { AspirinFormula } from '../MoleculeFormulas'

export default function Aspirin({ ideal3D, isReal }) {
  const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]
  const oxygenColor = `#${Table.Row.find(el => el.Cell[0] === '8').Cell[4]}`,
    simpleOxygenRadius = Table.Row.find(el => el.Cell[0] === '8').Cell[19],
    doubleOxygenRadius = Table.Row.find(el => el.Cell[0] === '8').Cell[20],
    hydrogenColor = `#${Table.Row.find(el => el.Cell[0] === '1').Cell[4]}`,
    hydrogenRadius = Table.Row.find(el => el.Cell[0] === '1').Cell[19],
    carbonColor = `#${Table.Row.find(el => el.Cell[0] === '6').Cell[4]}`,
    carbonRadius = Table.Row.find(el => el.Cell[0] === '6').Cell[19],
    carbonCoords = [
      [2.2393, -0.3791, 0.263],
      [0.8424, 1.9231, -0.4249],
      [2.8709, 0.8456, 0.2722],
      [2.1751, 1.9935, -0.0703],
      [-3.4838, 0.4953, -0.0896],
      [0.891, -0.4647, -0.0939],
      [0.1908, 0.6991, -0.4402],
      [0.209, -1.772, -0.1069],
      [-2.0185, 0.6853, 0.2071]
    ],
    oxygenCoords = [
      [-0.9633, -1.8425, -0.4185],
      [-1.6531, 0.8889, 1.3406],
      [0.8857, -2.8883, 0.2267],
      [-1.1189, 0.6285, -0.7886]
    ],
    hydrogenCoords = [
      [0.3962, -3.7219, 0.2035],
      [2.7867, -1.2719, 0.5268],
      [0.3069, 2.8224, -0.6911],
      [3.913, 0.9108, 0.5482],
      [2.6781, 2.9492, -0.0604],
      [-3.736, -0.5623, -0.012],
      [-4.0763, 1.0637, 0.6273],
      [-3.6988, 0.8471, -1.0986]
    ],
    SCALE = [0.01, 0.01, 0.01]

  return (
    <>
      {
        (!isReal && !ideal3D) && (
          <Html position={[0, 0, 0]} center transform={true} zIndexRange={[0, 0]}>
            <div className='w-[200px] h-auto unselectable' style={{ fill: colorPalette.text, stroke: colorPalette.text }}>
              {/* <img draggable={false} src={aspirin} className='invert' /> */}
              <AspirinFormula />
            </div>
          </Html>
        )
      }
      {
        ((ideal3D && !isReal) || (!ideal3D && isReal) || (isReal)) && (
          <>
            {
              oxygenCoords.map((coord, index) => (
                index === 0 ? (
                  <React.Fragment key={`carbon-${index}`}>
                    <Sphere args={[isReal ? doubleOxygenRadius : 45]} position={coord} scale={SCALE}>
                      <meshStandardMaterial color={oxygenColor} />
                    </Sphere>
                    <Html position={coord} center transform={false} zIndexRange={[0, 0]}>
                      <div className='text-xl text-white unselectable'>O</div>
                    </Html>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={`carbon-${index}`}>
                    <Sphere args={[isReal ? simpleOxygenRadius : 45]} position={coord} scale={SCALE}>
                      <meshStandardMaterial color={oxygenColor} />
                    </Sphere>
                    <Html position={coord} center transform={false} zIndexRange={[0, 0]}>
                      <div className='text-xl text-white unselectable'>O</div>
                    </Html>
                  </React.Fragment>
                )
              ))
            }
            {
              hydrogenCoords.map((coord, index) => {
                return (
                  <React.Fragment key={`oxygen-${index}`}>
                    <Sphere args={[isReal ? hydrogenRadius : 45]} position={coord} scale={SCALE}>
                      <meshStandardMaterial color={hydrogenColor} />
                    </Sphere>
                    <Html position={coord} center transform={false}>
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
                    <div className='text-xl text-white unselectable'>C</div>
                  </Html>
                </React.Fragment>
              ))
            }
            {
              !isReal && (
                <>
                  <CylinderBond start={[carbonCoords[0][0] - 0.1, carbonCoords[0][1], carbonCoords[0][2]]} end={[carbonCoords[2][0] - 0.1, carbonCoords[2][1], carbonCoords[2][2]]} />
                  <CylinderBond start={[carbonCoords[0][0] + 0.1, carbonCoords[0][1], carbonCoords[0][2]]} end={[carbonCoords[2][0] + 0.1, carbonCoords[2][1], carbonCoords[2][2]]} />

                  <CylinderBond start={[carbonCoords[3][0], carbonCoords[3][1] - 0.1, carbonCoords[3][2]]} end={[carbonCoords[1][0], carbonCoords[1][1] - 0.1, carbonCoords[1][2]]} />
                  <CylinderBond start={[carbonCoords[3][0], carbonCoords[3][1] + 0.1, carbonCoords[3][2]]} end={[carbonCoords[1][0], carbonCoords[1][1] + 0.1, carbonCoords[1][2]]} />

                  <CylinderBond start={[carbonCoords[5][0], carbonCoords[5][1] + 0.1, carbonCoords[5][2]]} end={[carbonCoords[6][0], carbonCoords[6][1] + 0.1, carbonCoords[6][2]]} />
                  <CylinderBond start={[carbonCoords[5][0], carbonCoords[5][1] - 0.25, carbonCoords[5][2]]} end={[carbonCoords[6][0], carbonCoords[6][1] - 0.25, carbonCoords[6][2]]} />

                  <CylinderBond start={[carbonCoords[7][0], carbonCoords[7][1] + 0.1, carbonCoords[7][2]]} end={[oxygenCoords[0][0], oxygenCoords[0][1] + 0.1, oxygenCoords[0][2]]} />
                  <CylinderBond start={[carbonCoords[7][0], carbonCoords[7][1] - 0.1, carbonCoords[7][2]]} end={[oxygenCoords[0][0], oxygenCoords[0][1] - 0.1, oxygenCoords[0][2]]} />

                  <CylinderBond start={[carbonCoords[8][0], carbonCoords[8][1] - 0.1, carbonCoords[8][2]]} end={[oxygenCoords[1][0], oxygenCoords[1][1] - 0.1, oxygenCoords[1][2]]} />
                  <CylinderBond start={[carbonCoords[8][0], carbonCoords[8][1] + 0.1, carbonCoords[8][2]]} end={[oxygenCoords[1][0], oxygenCoords[1][1] + 0.1, oxygenCoords[1][2]]} />

                  <CylinderBond start={carbonCoords[0]} end={carbonCoords[5]} />
                  <CylinderBond start={carbonCoords[2]} end={hydrogenCoords[3]} />
                  <CylinderBond start={carbonCoords[2]} end={carbonCoords[3]} />
                  <CylinderBond start={carbonCoords[1]} end={hydrogenCoords[2]} />
                  <CylinderBond start={carbonCoords[1]} end={carbonCoords[6]} />
                  <CylinderBond start={carbonCoords[5]} end={carbonCoords[7]} />
                  <CylinderBond start={carbonCoords[6]} end={oxygenCoords[3]} />
                  <CylinderBond start={oxygenCoords[2]} end={hydrogenCoords[0]} />
                  <CylinderBond start={oxygenCoords[2]} end={carbonCoords[7]} />
                  <CylinderBond start={carbonCoords[3]} end={hydrogenCoords[4]} />
                  <CylinderBond start={carbonCoords[0]} end={hydrogenCoords[1]} />
                  <CylinderBond start={oxygenCoords[3]} end={carbonCoords[8]} />
                  <CylinderBond start={carbonCoords[4]} end={carbonCoords[8]} />
                  <CylinderBond start={carbonCoords[4]} end={hydrogenCoords[5]} />
                  <CylinderBond start={carbonCoords[4]} end={hydrogenCoords[6]} />
                  <CylinderBond start={carbonCoords[4]} end={hydrogenCoords[7]} />

                </>
              )
            }
          </>
        )
      }
    </>
  )
}