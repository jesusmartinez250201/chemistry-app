import React from 'react'
import { Sphere, Html } from '@react-three/drei'
import { Table } from '../../utils/ElementsData.json';
import Ion from './Ion';
import DottedLine from './DottedLine';
import CylinderBond from '../CylinderBond';

export default function SodiumChloride({ ideal3D, isReal }) {
  const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]
  const sodiumRadius = `${Table.Row.find(el => el.Cell[0] === '19').Cell[22]}`,
    sodiumColor = `#${Table.Row.find(el => el.Cell[0] === '19').Cell[4]}`,
    chlorineRadius = `${Table.Row.find(el => el.Cell[0] === '17').Cell[22]}`,
    chlorineColor = `#${Table.Row.find(el => el.Cell[0] === '17').Cell[4]}`,
    sodiumCoords = [
      [4.33015, 0.0001, 0]
    ],
    chlorineCoords = [
      [-4.33015, -0.0001, 0]
    ],
    SCALE = [0.01, 0.01, 0.01]

  return (
    <>
      {
        (!isReal && !ideal3D) && (
          <>
            <Html position={[-2, 0, 0]} center transform={true} zIndexRange={[0, 0]}>
              <div className='text-3xl h-auto unselectable' style={{color: colorPalette.text}}>
                Na<sup>+</sup>
              </div>
            </Html>
            <Html position={[2, 0, 0]} center transform={true} zIndexRange={[0, 0]}>
              <div className='text-3xl h-auto unselectable' style={{color: colorPalette.text}}>
                Cl<sup>-</sup>
              </div>
            </Html>
            <DottedLine start={[-1.5, -0.1, 0]} end={[1.5, -.1, 0]} />
          </>
        )
      }
      {
        ((ideal3D && !isReal) || (!ideal3D && isReal) || (isReal)) && (
          <>
            {
              sodiumCoords.map((coord, index) => (
                <React.Fragment key={`sodium-${index}`}>
                  <Sphere args={[isReal ? sodiumRadius : 60]} position={isReal ? coord : [coord[0] - 2, coord[1], coord[2]]} scale={SCALE}>
                    <meshStandardMaterial color={sodiumColor} />
                  </Sphere>
                  <Html position={isReal ? coord : [coord[0] - 2, coord[1], coord[2]]} center transform={false} zIndexRange={[0, 0]}>
                    <div className='text-xl text-white unselectable'>Na<sup>+</sup></div>
                  </Html>
                </React.Fragment>
              ))
            }
            {
              chlorineCoords.map((coord, index) => {
                return (
                  <React.Fragment key={`chlorine-${index}`}>
                    <Sphere args={[isReal ? chlorineRadius : 60]} position={isReal ? coord : [coord[0] + 2, coord[1], coord[2]]} scale={SCALE}>
                      <meshStandardMaterial color={chlorineColor} />
                    </Sphere>
                    <Html position={isReal ? coord : [coord[0] + 2, coord[1], coord[2]]} center transform={false} zIndexRange={[0, 0]}>
                      <div className='text-xl text-white unselectable'>Cl<sup>-</sup></div>
                    </Html>

                  </React.Fragment>
                )
              })
            }
            {
              !isReal && (
                <>
                  <CylinderBond start={isReal ? sodiumCoords[0] : [sodiumCoords[0][0] - 2, sodiumCoords[0][1], sodiumCoords[0][2]]} end={isReal ? chlorineCoords[0] : [chlorineCoords[0][0] + 2, chlorineCoords[0][1], chlorineCoords[0][2]]} />
                </>
              )
            }
            <Ion start={isReal ? sodiumCoords[0] : [sodiumCoords[0][0] - 2, sodiumCoords[0][1], sodiumCoords[0][2]]} end={isReal ? chlorineCoords[0] : [chlorineCoords[0][0] + 2, chlorineCoords[0][1], chlorineCoords[0][2]]} radius={isReal ? 0.05 : 0.2} duration={isReal ? 2000 : 1000} />
          </>
        )
      }
    </>
  );
}