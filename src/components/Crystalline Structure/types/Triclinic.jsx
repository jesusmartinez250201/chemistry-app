import { triclinic } from '../../utils/CrystallineStructuresData.json'
import { Table } from '../../utils/ElementsData.json';
import { Line } from '@react-three/drei';
import { useMemo, useEffect } from 'react';

const SCALE = [0.0052, 0.0052, 0.0052];
const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export default function Triclinic({ isReal, showUnitCell, onPutStructure }) {
  const realEdges = triclinic.real.edges,
    structureName = triclinic.name,
    potassiumName = Table.Row.find(el => el.Cell[0] === '19').Cell[2],
    potassiumSymbol = Table.Row.find(el => el.Cell[0] === '19').Cell[1],
    potassiumColor = `#${Table.Row.find(el => el.Cell[0] === '19').Cell[4]}`,
    potassiumRadius = Table.Row.find(el => el.Cell[0] === '19').Cell[7],
    potassiumAtoms = triclinic.real.atoms.potassium.positions,
    siliconName = Table.Row.find(el => el.Cell[0] === '14').Cell[2],
    siliconSymbol = Table.Row.find(el => el.Cell[0] === '14').Cell[1],
    siliconColor = `#${Table.Row.find(el => el.Cell[0] === '14').Cell[4]}`,
    siliconRadius = Table.Row.find(el => el.Cell[0] === '14').Cell[7],
    siliconAtoms = triclinic.real.atoms.silicon.positions,
    aluminiumName = Table.Row.find(el => el.Cell[0] === '13').Cell[2],
    aluminiumSymbol = Table.Row.find(el => el.Cell[0] === '13').Cell[1],
    aluminiumColor = `#${Table.Row.find(el => el.Cell[0] === '13').Cell[4]}`,
    aluminiumRadius = Table.Row.find(el => el.Cell[0] === '13').Cell[7],
    aluminiumAtoms = triclinic.real.atoms.aluminium.positions,
    oxygenName = Table.Row.find(el => el.Cell[0] === '8').Cell[2],
    oxygenSymbol = Table.Row.find(el => el.Cell[0] === '8').Cell[1],
    oxygenColor = `#${Table.Row.find(el => el.Cell[0] === '8').Cell[4]}`,
    oxygenRadius = Table.Row.find(el => el.Cell[0] === '8').Cell[7],
    oxygenAtoms = triclinic.real.atoms.oxygen.positions,
    idealEdges = triclinic.ideal.edges,
    idealPotassiumAtoms = triclinic.ideal.atoms.potassium.positions,
    idealSiliconAtoms = triclinic.ideal.atoms.silicon.positions,
    idealAluminiumAtoms = triclinic.ideal.atoms.aluminium.positions,
    idealOxygenAtoms = triclinic.ideal.atoms.oxygen.positions,
    materialName = triclinic.materialName,
    materialSymbol = triclinic.materialSymbol,
    structureData = useMemo(() => ({
      structureName: structureName,
      materialName: materialName,
      atomsLegend: isReal ? [
        {
          color: potassiumColor,
          material: potassiumName,
          symbol: potassiumSymbol
        },
        {
          color: siliconColor,
          material: siliconName,
          symbol: siliconSymbol
        },
        {
          color: aluminiumColor,
          material: aluminiumName,
          symbol: aluminiumSymbol
        },
        {
          color: oxygenColor,
          material: oxygenName,
          symbol: oxygenSymbol
        }
      ] : [
        {
          color: potassiumColor,
          material: potassiumName,
          symbol: potassiumSymbol
        },
        {
          color: siliconColor,
          material: siliconName,
          symbol: siliconSymbol
        },
        {
          color: aluminiumColor,
          material: aluminiumName,
          symbol: aluminiumSymbol
        },
        {
          color: oxygenColor,
          material: oxygenName,
          symbol: oxygenSymbol
        }
      ],
      materialSymbol: materialSymbol
    }), [
      structureName,
      materialName,
      materialSymbol,
      isReal,
      aluminiumColor,
      aluminiumName,
      aluminiumSymbol,
      oxygenColor,
      oxygenName,
      oxygenSymbol,
      potassiumColor,
      potassiumName,
      potassiumSymbol,
      siliconColor,
      siliconName,
      siliconSymbol,
    ]);

  useEffect(() => {
    onPutStructure(structureData);
  }, [onPutStructure, structureData]);


  if (isReal) {
    return (
      <group>
        {
          potassiumAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[potassiumRadius]} />
              <meshStandardMaterial color={potassiumColor} />
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
          aluminiumAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[aluminiumRadius]} />
              <meshStandardMaterial color={aluminiumColor} />
            </mesh>
          ))
        }
        {
          oxygenAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[oxygenRadius]} />
              <meshStandardMaterial color={oxygenColor} />
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
          idealPotassiumAtoms.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={potassiumColor} />
            </mesh>
          ))
        }
        {
          idealSiliconAtoms.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={siliconColor} />
            </mesh>
          ))
        }
        {
          idealAluminiumAtoms.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={aluminiumColor} />
            </mesh>
          ))
        }
        {
          idealOxygenAtoms.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={oxygenColor} />
            </mesh>
          ))
        }
        {
          idealEdges.map((edge, index) => (
            <Line points={edge} color={colorPalette.lines3d} key={index} />
          ))
        }
      </group>
    )
  }

}