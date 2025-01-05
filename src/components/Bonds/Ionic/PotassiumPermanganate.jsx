import React from 'react'
import { Sphere, Html } from '@react-three/drei'
import { Table } from '../../utils/ElementsData.json';
import Ion from './Ion';
import DottedLine from './DottedLine';
import CylinderBond from '../CylinderBond';
import { PotassiumPermanganateFormula } from '../MoleculeFormulas';

export default function PotassiumPermanganate({ ideal3D, isReal }) {
  const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]
  const manganeseRadius = `${Table.Row.find(el => el.Cell[0] === '25').Cell[19]}`,
    manganeseColor = `#${Table.Row.find(el => el.Cell[0] === '25').Cell[4]}`,
    potassiumRadius = `${Table.Row.find(el => el.Cell[0] === '19').Cell[22]}`,
    potassiumColor = `#${Table.Row.find(el => el.Cell[0] === '19').Cell[4]}`,
    simpleOxygenRadius = `${Table.Row.find(el => el.Cell[0] === '8').Cell[19]}`,
    doubleOxygenRadius = `${Table.Row.find(el => el.Cell[0] === '8').Cell[20]}`,
    oxygenColor = `#${Table.Row.find(el => el.Cell[0] === '8').Cell[4]}`,
    manganeseCoords = [
      [-2.6513, 0, 0]
    ],
    potassiumCoords = [
      [8.0651, 0, 0]
    ],
    oxygenCoords = [
      [-1.3646, 0.8995, -0.3463],
      [-3.938, 0.9486, 0.171],
      [-2.3915, -0.8025, 1.3686],
      [-2.9111, -1.0455, -1.1933]
    ],
    SCALE = [0.01, 0.01, 0.01]

  return (
    <>
      {
        (!isReal && !ideal3D) && (
          <>
            <Html position={[0, 0, 0]} center transform={true} zIndexRange={[0, 0]}>
              <div className='w-[200px] h-auto unselectable' style={{ fill: colorPalette.text, stroke: colorPalette.text, color: colorPalette.text }}>
                {/* <img draggable={false} src={potassiumPermanganate} className='w-full invert' /> */}
                <PotassiumPermanganateFormula />
              </div>
            </Html>
            <DottedLine start={[0.45, 0, 0]} end={[1.15, -0.4, 0]} />
          </>
        )
      }
      {
        ((ideal3D && !isReal) || (!ideal3D && isReal) || (isReal)) && (
          <>
            {
              manganeseCoords.map((coord, index) => (
                <React.Fragment key={`manganese-${index}`}>
                  <Sphere args={[isReal ? manganeseRadius : 60]} position={coord} scale={SCALE}>
                    <meshStandardMaterial color={manganeseColor} />
                  </Sphere>
                  <Html position={coord} center transform={false} zIndexRange={[0, 0]}>
                    <div className='text-xl text-white unselectable'>Mg</div>
                  </Html>
                </React.Fragment>
              ))
            }
            {
              potassiumCoords.map((coord, index) => (
                <React.Fragment key={`potassium-${index}`}>
                  <Sphere args={[isReal ? potassiumRadius : 60]} position={isReal ? coord : [coord[0] - 5, coord[1], coord[2]]} scale={SCALE}>
                    <meshStandardMaterial color={potassiumColor} />
                  </Sphere>
                  <Html position={isReal ? coord : [coord[0] - 5, coord[1], coord[2]]} center transform={false} zIndexRange={[0, 0]}>
                    <div className='text-xl text-white unselectable'>K<sup>+</sup></div>
                  </Html>
                </React.Fragment>
              ))
            }
            {
              oxygenCoords.map((coord, index) => (
                index === 0 ? (
                  <React.Fragment key={`oxygen-${index}`}>
                    <Sphere args={[isReal ? simpleOxygenRadius : 45]} position={coord} scale={SCALE}>
                      <meshStandardMaterial color={oxygenColor} />
                    </Sphere>
                    <Html position={coord} center transform={false} zIndexRange={[0, 0]}>
                      <div className='text-xl text-white unselectable'>O<sup>-</sup></div>
                    </Html>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={`oxygen-${index}`}>
                    <Sphere args={[isReal ? doubleOxygenRadius : 45]} position={coord} scale={SCALE}>
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
              !isReal && (
                <>
                  <CylinderBond start={[manganeseCoords[0][0], manganeseCoords[0][1] + 0.1, manganeseCoords[0][2]]} end={[oxygenCoords[1][0], oxygenCoords[1][1] + 0.1, oxygenCoords[1][2]]} />
                  <CylinderBond start={[manganeseCoords[0][0], manganeseCoords[0][1] - 0.1, manganeseCoords[0][2]]} end={[oxygenCoords[1][0], oxygenCoords[1][1] - 0.1, oxygenCoords[1][2]]} />

                  <CylinderBond start={[manganeseCoords[0][0], manganeseCoords[0][1] + 0.1, manganeseCoords[0][2]]} end={[oxygenCoords[2][0], oxygenCoords[2][1] + 0.1, oxygenCoords[2][2]]} />
                  <CylinderBond start={[manganeseCoords[0][0], manganeseCoords[0][1] - 0.1, manganeseCoords[0][2]]} end={[oxygenCoords[2][0], oxygenCoords[2][1] - 0.1, oxygenCoords[2][2]]} />

                  <CylinderBond start={[manganeseCoords[0][0], manganeseCoords[0][1] + 0.1, manganeseCoords[0][2]]} end={[oxygenCoords[3][0], oxygenCoords[3][1] + 0.1, oxygenCoords[3][2]]} />
                  <CylinderBond start={[manganeseCoords[0][0], manganeseCoords[0][1] - 0.1, manganeseCoords[0][2]]} end={[oxygenCoords[3][0], oxygenCoords[3][1] - 0.1, oxygenCoords[3][2]]} />

                  <CylinderBond start={manganeseCoords[0]} end={oxygenCoords[0]} />

                  <CylinderBond start={oxygenCoords[0]} end={[potassiumCoords[0][0] - 5, potassiumCoords[0][1], potassiumCoords[0][2]]} />
                </>
              )
            }
            <Ion start={isReal ? potassiumCoords[0] : [potassiumCoords[0][0] - 5, potassiumCoords[0][1], potassiumCoords[0][2]]} end={oxygenCoords[0]} radius={isReal ? 0.05 : 0.2} duration={isReal ? 2000 : 1000} />
          </>
        )
      }
    </>
  );
}