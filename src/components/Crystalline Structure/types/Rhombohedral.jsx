import { rhombohedral } from '../../utils/CrystallineStructuresData.json'
import { Table } from '../../utils/ElementsData.json';
import { Line } from '@react-three/drei';
import { useMemo, useEffect } from 'react';

const SCALE = [0.0052, 0.0052, 0.0052];
const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export default function Rhombohedral({ isReal, showUnitCell, onPutStructure }) {
  const realEdges = rhombohedral.real.edges,
    structureName = rhombohedral.name,
    oxygenName = Table.Row.find(el => el.Cell[0] === '8').Cell[2],
    oxygenSymbol = Table.Row.find(el => el.Cell[0] === '8').Cell[1],
    oxygenColor = `#${Table.Row.find(el => el.Cell[0] === '8').Cell[4]}`,
    oxygenRadius = Table.Row.find(el => el.Cell[0] === '8').Cell[7],
    oxygenAtoms = rhombohedral.real.atoms.oxygen.positions,
    siliconName = Table.Row.find(el => el.Cell[0] === '14').Cell[2],
    siliconSymbol = Table.Row.find(el => el.Cell[0] === '14').Cell[1],
    siliconColor = `#${Table.Row.find(el => el.Cell[0] === '14').Cell[4]}`,
    siliconRadius = Table.Row.find(el => el.Cell[0] === '14').Cell[7],
    siliconAtoms = rhombohedral.real.atoms.silicon.positions,
    bisumthName = Table.Row.find(el => el.Cell[0] === '83').Cell[2],
    bismuthSymbol = Table.Row.find(el => el.Cell[0] === '83').Cell[1],
    bismuthColor = `#${Table.Row.find(el => el.Cell[0] === '83').Cell[4]}`,
    bismuthAtoms = rhombohedral.ideal.atoms.positions,
    idealEdges = rhombohedral.ideal.edges,
    materialName = isReal ? rhombohedral.real.materialName : rhombohedral.ideal.materialName,
    materialSymbol = isReal ? rhombohedral.real.materialSymbol : rhombohedral.ideal.materialSymbol,
    structureData = useMemo(() => ({
      structureName: structureName,
      materialName: materialName,
      atomsLegend: isReal ? [
        {
          color: siliconColor,
          material: siliconName,
          symbol: siliconSymbol
        },
        {
          color: oxygenColor,
          material: oxygenName,
          symbol: oxygenSymbol
        }
      ] : [
        {
          color: bismuthColor,
          material: bisumthName,
          symbol: bismuthSymbol
        }
      ],
      materialSymbol: materialSymbol
    }), [
      structureName,
      materialName,
      materialSymbol,
      isReal,
      oxygenColor,
      oxygenName,
      oxygenSymbol,
      siliconColor,
      siliconName,
      siliconSymbol,
      bismuthColor,
      bisumthName,
      bismuthSymbol
    ]);

  useEffect(() => {
    onPutStructure(structureData);
  }, [onPutStructure, structureData]);

  if (isReal) {
    return (
      <group>
        {
          oxygenAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[oxygenRadius]} />
              <meshStandardMaterial color={oxygenColor} />
            </mesh>
          ))
        }
        {
          siliconAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[siliconRadius]} />
              <meshStandardMaterial color={siliconColor} />
            </mesh>
          ))
        }
        {
          showUnitCell && (
            realEdges.map((edge, index) => (
              <Line points={edge} color={colorPalette.lines3d} key={index} />
            ))
          )
        }
      </group>
    )
  } else {
    return (
      <group>
        {
          idealEdges.map((edge, index) => (
            <Line points={edge} color={colorPalette.lines3d} key={index} />
          ))
        }
        {
          bismuthAtoms.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={bismuthColor} />
            </mesh>
          ))
        }
      </group>
    )
  }

}