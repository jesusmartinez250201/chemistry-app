import React from 'react'
import { Table } from '../../utils/ElementsData.json'
import { Sphere, Html } from '@react-three/drei'
import CylinderBond from '../CylinderBond'
import { GlucoseFormula } from '../MoleculeFormulas'

export default function Glucose({ ideal3D, isReal }) {
  const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]
  const oxygenColor = `#${Table.Row.find(el => el.Cell[0] === '8').Cell[4]}`,
    simpleOxygenRadius = Table.Row.find(el => el.Cell[0] === '8').Cell[19],
    doubleOxygenRadius = Table.Row.find(el => el.Cell[0] === '8').Cell[20],
    hydrogenColor = `#${Table.Row.find(el => el.Cell[0] === '1').Cell[4]}`,
    hydrogenRadius = Table.Row.find(el => el.Cell[0] === '1').Cell[19],
    carbonColor = `#${Table.Row.find(el => el.Cell[0] === '6').Cell[4]}`,
    carbonRadius = Table.Row.find(el => el.Cell[0] === '6').Cell[19],
    carbonCoords = [
      [-3.1216, -0.7393, 0.3101],
      [-1.9281, 0.0904, 0.7080],
      [-0.6484, -0.5874, 0.2141],
      [0.5523, 0.3144, 0.5078],
      [1.8146, -0.3044, -0.0959],
      [3.0152, 0.5974, 0.1977]
    ],
    oxygenCoords = [
      [-3.9756, -0.2665, -0.4009],
      [-2.0350, 1.3899, 0.1232],
      [-0.7416, -0.8129, -1.1939],
      [0.3317, 1.6037, -0.0678],
      [2.0352, -1.5936, 0.4796],
      [4.1719, 0.0809, -0.4637]
    ],
    hydrogenCoords = [
      [-1.8950, 0.1821, 1.7936],
      [-0.5208, -1.5406, 0.7271],
      [-3.2153, -1.7552, 0.6644],
      [-2.0695, 1.3847, -0.8432],
      [-0.8565, -0.0062, -1.7147],
      [0.2124, 1.5908, -1.0273],
      [0.6765, 0.4143, 1.5860],
      [1.6904, -0.4043, -1.1742],
      [2.1545, -1.5808, 1.4392],
      [2.8097, 1.6050, -0.1635],
      [3.1938, 0.6261, 1.2726],
      [4.9727, 0.6039, -0.3214]
    ],
    SCALE = [0.01, 0.01, 0.01]

  return (
    <>
      {
        (!isReal && !ideal3D) && (
          <Html position={[0, 0, 0]} center transform={true} zIndexRange={[0, 0]}>
            <div className='w-[200px] h-auto unselectable' style={{ fill: colorPalette.text, stroke: colorPalette.text, strokeWidth: 0.01 }}>
              <GlucoseFormula />
              {/* <img draggable={false} src={glucose} className='invert' /> */}
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
                  <Html position={coord} center transform={false} zIndexRange={[0, 0]}>
                    <div className='text-xl text-white unselectable'>C</div>
                  </Html>
                </React.Fragment>
              ))
            }
            {
              !isReal && (
                <>
                <CylinderBond start={[carbonCoords[0][0], carbonCoords[0][1] + 0.1, carbonCoords[0][2]]} end={[oxygenCoords[0][0], oxygenCoords[0][1] + 0.1, oxygenCoords[0][2]]} />
                <CylinderBond start={[carbonCoords[0][0], carbonCoords[0][1] - 0.1, carbonCoords[0][2]]} end={[oxygenCoords[0][0], oxygenCoords[0][1] - 0.1, oxygenCoords[0][2]]} />

                <CylinderBond start={carbonCoords[0]} end={carbonCoords[1]} />
                <CylinderBond start={carbonCoords[0]} end={hydrogenCoords[2]} />
                <CylinderBond start={carbonCoords[1]} end={oxygenCoords[1]} />
                <CylinderBond start={carbonCoords[1]} end={hydrogenCoords[0]} />
                <CylinderBond start={hydrogenCoords[3]} end={oxygenCoords[1]} />
                <CylinderBond start={carbonCoords[1]} end={carbonCoords[2]} />
                <CylinderBond start={carbonCoords[2]} end={hydrogenCoords[1]} />
                <CylinderBond start={carbonCoords[2]} end={oxygenCoords[2]} />
                <CylinderBond start={hydrogenCoords[4]} end={oxygenCoords[2]} />
                <CylinderBond start={carbonCoords[2]} end={carbonCoords[3]} />
                <CylinderBond start={hydrogenCoords[6]} end={carbonCoords[3]} />
                <CylinderBond start={oxygenCoords[3]} end={carbonCoords[3]} />
                <CylinderBond start={oxygenCoords[3]} end={hydrogenCoords[5]} />
                <CylinderBond start={carbonCoords[4]} end={carbonCoords[3]} />
                <CylinderBond start={carbonCoords[4]} end={hydrogenCoords[7]} />
                <CylinderBond start={carbonCoords[4]} end={oxygenCoords[4]} />
                <CylinderBond start={hydrogenCoords[8]} end={oxygenCoords[4]} />
                <CylinderBond start={carbonCoords[4]} end={carbonCoords[5]} />
                <CylinderBond start={hydrogenCoords[9]} end={carbonCoords[5]} />
                <CylinderBond start={hydrogenCoords[10]} end={carbonCoords[5]} />
                <CylinderBond start={oxygenCoords[5]} end={carbonCoords[5]} />
                <CylinderBond start={oxygenCoords[5]} end={hydrogenCoords[11]} />
                
                </>
              )
            }
          </>
        )
      }
    </>
  )
}