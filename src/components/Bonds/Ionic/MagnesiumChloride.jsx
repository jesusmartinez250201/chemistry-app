import React from 'react'
import { Sphere, Html } from '@react-three/drei'
import { Table } from '../../utils/ElementsData.json';
import Ion from './Ion';
import DottedLine from './DottedLine';
import CylinderBond from '../CylinderBond';

export default function MagnesiumChloride({ ideal3D, isReal }) {
  const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]
  const magnesiumRadius = `${Table.Row.find(el => el.Cell[0] === '12').Cell[22]}`,
    magnesiumColor = `#${Table.Row.find(el => el.Cell[0] === '12').Cell[4]}`,
    chlorineRadius = `${Table.Row.find(el => el.Cell[0] === '17').Cell[22]}`,
    chlorineColor = `#${Table.Row.find(el => el.Cell[0] === '17').Cell[4]}`,
    magnesiumCoords = [
      [0, 0, 0]
    ],
    chlorineCoords = [
      [8.6603, -0.0002, 0],
      [-8.6603, -0.0002, 0]
    ],
    SCALE = [0.01, 0.01, 0.01]

  return (
    <>
      {
        (!isReal && !ideal3D) && (
          <>
            <Html draggable={false} position={[0, 0, 0]} center transform={true} zIndexRange={[0, 0]}>
              <div className='text-3xl h-auto unselectable' style={{color: colorPalette.text}}>
                Mg<sup>2+</sup>
              </div>
            </Html>
            <Html position={[3, 0, 0]} center transform={true} zIndexRange={[0, 0]}>
              <div className='text-3xl h-auto unselectable' style={{color: colorPalette.text}}>
                Cl<sup>-</sup>
              </div>
            </Html>
            <Html position={[-3, 0, 0]} center transform={true} zIndexRange={[0, 0]}>
              <div className='text-3xl h-auto unselectable' style={{color: colorPalette.text}}>
                Cl<sup>-</sup>
              </div>
            </Html>
            <DottedLine start={[0.9, 0, 0]} end={[2.45, 0, 0]} />
            <DottedLine start={[-1, 0, 0]} end={[-2.45, 0, 0]} />
          </>
        )
      }
      {
        ((ideal3D && !isReal) || (!ideal3D && isReal) || (isReal)) && (
          <>
            {
              magnesiumCoords.map((coord, index) => (
                <React.Fragment key={`magnesium-${index}`}>
                  <Sphere args={[isReal ? magnesiumRadius : 60]} position={coord} scale={SCALE}>
                    <meshStandardMaterial color={magnesiumColor} />
                  </Sphere>
                  <Html position={coord} center transform={false} zIndexRange={[0, 0]}>
                    <div className='text-xl text-white unselectable'>Mg<sup>+</sup></div>
                  </Html>
                </React.Fragment>
              ))
            }
            {
              isReal ? (
                chlorineCoords.map((coord, index) => {
                  return (
                    <React.Fragment key={`chlorine-${index}`}>
                      <Sphere args={[isReal ? chlorineRadius : 60]} position={coord} scale={SCALE}>
                        <meshStandardMaterial color={chlorineColor} />
                      </Sphere>
                      <Html position={coord} center transform={false} zIndexRange={[0, 0]}>
                        <div className='text-xl text-white unselectable'>Cl<sup>-</sup></div>
                      </Html>
                    </React.Fragment>
                  )
                })
              ) : (
                <>
                  <Sphere args={[isReal ? chlorineRadius : 60]} position={[-3, 0, 0]} scale={SCALE}>
                    <meshStandardMaterial color={chlorineColor} />
                  </Sphere>
                  <Html position={[-3, 0, 0]} center transform={false} zIndexRange={[0, 0]}>
                    <div className='text-xl text-white unselectable'>Cl<sup>-</sup></div>
                  </Html>
                  <Sphere args={[isReal ? chlorineRadius : 60]} position={[3, 0, 0]} scale={SCALE}>
                    <meshStandardMaterial color={chlorineColor} />
                  </Sphere>
                  <Html position={[3, 0, 0]} center transform={false} zIndexRange={[0, 0]}>
                    <div className='text-xl text-white unselectable'>Cl<sup>-</sup></div>
                  </Html>
                  <CylinderBond start={magnesiumCoords[0]} end={[3, 0, 0]} />
                  <CylinderBond start={magnesiumCoords[0]} end={[-3, 0, 0]} />
                </>
              )
            }
            <Ion start={magnesiumCoords[0]} end={isReal ? chlorineCoords[0] : [3, 0, 0]} radius={isReal ? 0.05 : 0.2} duration={isReal ? 2000 : 1000} />
            <Ion start={magnesiumCoords[0]} end={isReal ? chlorineCoords[1] : [-3, 0, 0]} radius={isReal ? 0.05 : 0.2} duration={isReal ? 2000 : 1000} />
          </>
        )
      }
    </>
  );

}