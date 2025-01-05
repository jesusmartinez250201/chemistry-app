import { Line } from '@react-three/drei'
import { hexagonal } from '../../utils/CrystallineStructuresData.json'
import { Table } from '../../utils/ElementsData.json';
import { useMemo, useEffect } from 'react';

const SCALE = [0.0052, 0.0052, 0.0052];
const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export default function Hexagonal({ isReal, onPutStructure }) {
  const idealEdges = hexagonal.ideal.edges,
    structureName = hexagonal.name,
    idealAtoms = hexagonal.ideal.atoms.positions,
    carbonName = Table.Row.find(el => el.Cell[0] === '6').Cell[2],
    carbonSymbol = Table.Row.find(el => el.Cell[0] === '6').Cell[1],
    carbonColor = `#${Table.Row.find(el => el.Cell[0] === '6').Cell[4]}`,
    oxygenName = Table.Row.find(el => el.Cell[0] === '8').Cell[2],
    oxygenSymbol = Table.Row.find(el => el.Cell[0] === '8').Cell[1],
    oxygenColor = `#${Table.Row.find(el => el.Cell[0] === '8').Cell[4]}`,
    oxygenRadius = Table.Row.find(el => el.Cell[0] === '8').Cell[7],
    oxygenAtoms = hexagonal.real.oxygenAtoms.positions,
    aluminiumName = Table.Row.find(el => el.Cell[0] === '13').Cell[2],
    aluminiumSymbol = Table.Row.find(el => el.Cell[0] === '13').Cell[1],
    aluminiumColor = `#${Table.Row.find(el => el.Cell[0] === '13').Cell[4]}`,
    aluminiumRadius = Table.Row.find(el => el.Cell[0] === '13').Cell[7],
    aluminiumAtoms = hexagonal.real.aluminiumAtoms.positions,
    materialName = isReal ? hexagonal.real.materialName : hexagonal.ideal.materialName,
    materialSymbol = isReal ? hexagonal.real.materialSymbol : hexagonal.ideal.materialSymbol,
    structureData = useMemo(() => ({
      structureName: structureName,
      materialName: materialName,
      atomsLegend: isReal ? [
        {
          color: aluminiumColor,
          material: aluminiumName,
          symbol: aluminiumSymbol
        },
        {
          color: oxygenColor,
          material: oxygenName,
          symbol: oxygenSymbol
        },
      ] : [
        {
          color: carbonColor,
          material: carbonName,
          symbol: carbonSymbol
        }
      ],
      materialSymbol: materialSymbol
    }), [
      structureName,
      materialName,
      materialSymbol,
      isReal,
      carbonColor,
      carbonName,
      carbonSymbol,
      oxygenColor,
      oxygenName,
      oxygenSymbol,
      aluminiumColor,
      aluminiumName,
      aluminiumSymbol
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
          aluminiumAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[aluminiumRadius]} />
              <meshStandardMaterial color={aluminiumColor} />
            </mesh>
          ))
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
          idealAtoms.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={carbonColor} />
            </mesh>
          ))
        }
      </group>
    )
  }
}