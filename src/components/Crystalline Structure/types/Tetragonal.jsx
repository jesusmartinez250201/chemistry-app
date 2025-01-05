import { tetragonal } from '../../utils/CrystallineStructuresData.json'
import { Table } from '../../utils/ElementsData.json';
import { Edges, Line } from '@react-three/drei'
import { useMemo, useEffect } from 'react';

const SCALE = [0.0052, 0.0052, 0.0052];
const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export function TetragonalSimple({ isReal, showUnitCell, onPutStructure }) {
  const structureName = tetragonal.simple.name,
    titaniumName = Table.Row.find(el => el.Cell[0] === '22').Cell[2],
    titaniumSymbol = Table.Row.find(el => el.Cell[0] === '22').Cell[1],
    titaniumColor = `#${Table.Row.find(el => el.Cell[0] === '22').Cell[4]}`,
    titaniumAtoms = tetragonal.simple.real.atoms.titanium.positions,
    titaniumRadius = Table.Row.find(el => el.Cell[0] === '22').Cell[7],
    oxygenName = Table.Row.find(el => el.Cell[0] === '8').Cell[2],
    oxygenSymbol = Table.Row.find(el => el.Cell[0] === '8').Cell[1],
    oxygenColor = `#${Table.Row.find(el => el.Cell[0] === '8').Cell[4]}`,
    oxygenAtoms = tetragonal.simple.real.atoms.oxygen.positions,
    oxygenRadius = Table.Row.find(el => el.Cell[0] === '8').Cell[7],
    phosphorusName = Table.Row.find(el => el.Cell[0] === '15').Cell[2],
    phosphorusSymbol = Table.Row.find(el => el.Cell[0] === '15').Cell[1],
    phosphorusColor = `#${Table.Row.find(el => el.Cell[0] === '15').Cell[4]}`,
    phosphorusAtoms = tetragonal.simple.ideal.atoms.positions,
    lattices = tetragonal.simple.real.box.args,
    idealBox = tetragonal.simple.ideal.box.args,
    materialName = isReal ? tetragonal.simple.real.materialName : tetragonal.simple.ideal.materialName,
    materialSymbol = isReal ? tetragonal.simple.real.materialSymbol : tetragonal.simple.ideal.materialSymbol,
    structureData = useMemo(() => ({
      structureName: structureName,
      materialName: materialName,
      atomsLegend: isReal ? [
        {
          color: titaniumColor,
          material: titaniumName,
          symbol: titaniumSymbol
        },
        {
          color: oxygenColor,
          material: oxygenName,
          symbol: oxygenSymbol
        }
      ] : [
        {
          color: phosphorusColor,
          material: phosphorusName,
          symbol: phosphorusSymbol
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
      phosphorusColor,
      phosphorusName,
      phosphorusSymbol,
      titaniumColor,
      titaniumName,
      titaniumSymbol
    ]);

  useEffect(() => {
    onPutStructure(structureData);
  }, [onPutStructure, structureData]);

  if (isReal) {
    return (
      <group>
        {
          showUnitCell && (
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={lattices} />
              <meshStandardMaterial visible={false} />
              <Edges color={colorPalette.lines3d} />
            </mesh>
          )
        }
        {
          titaniumAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[titaniumRadius]} />
              <meshStandardMaterial color={titaniumColor} />
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
      </group>
    )
  } else {
    return (
      <group>
        {
          phosphorusAtoms.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={phosphorusColor} />
            </mesh>
          ))
        }
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={idealBox} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.lines3d} />
        </mesh>
      </group>
    )
  }
}

export function TetragonalBodyCentered({ isReal, showUnitCell, onPutStructure }) {
  const structureName = tetragonal.bodyCentered.name,
    tinName = Table.Row.find(el => el.Cell[0] === '50').Cell[2],
    tinSymbol = Table.Row.find(el => el.Cell[0] === '50').Cell[1],
    tinColor = `#${Table.Row.find(el => el.Cell[0] === '50').Cell[4]}`,
    tinAtoms = tetragonal.bodyCentered.real.atoms.tin.positions,
    tinRadius = Table.Row.find(el => el.Cell[0] === '50').Cell[7],
    oxygenName = Table.Row.find(el => el.Cell[0] === '8').Cell[2],
    oxygenSymbol = Table.Row.find(el => el.Cell[0] === '8').Cell[1],
    oxygenColor = `#${Table.Row.find(el => el.Cell[0] === '8').Cell[4]}`,
    oxygenAtoms = tetragonal.bodyCentered.real.atoms.oxygen.positions,
    oxygenRadius = Table.Row.find(el => el.Cell[0] === '8').Cell[7],
    lattices = tetragonal.bodyCentered.real.box.args,
    idealBox = tetragonal.bodyCentered.ideal.box.args,
    indiumName = Table.Row.find(el => el.Cell[0] === '49').Cell[2],
    indiumSymbol = Table.Row.find(el => el.Cell[0] === '49').Cell[1],
    indiumColor = `#${Table.Row.find(el => el.Cell[0] === '49').Cell[4]}`,
    indiumAtoms = tetragonal.bodyCentered.ideal.atoms.positions,
    idealEdges = tetragonal.bodyCentered.ideal.edges,
    materialName = isReal ? tetragonal.bodyCentered.real.materialName : tetragonal.bodyCentered.ideal.materialName,
    materialSymbol = isReal ? tetragonal.bodyCentered.real.materialSymbol : tetragonal.bodyCentered.ideal.materialSymbol,
    structureData = useMemo(() => ({
      structureName: structureName,
      materialName: materialName,
      atomsLegend: isReal ? [
        {
          color: tinColor,
          material: tinName,
          symbol: tinSymbol
        },
        {
          color: oxygenColor,
          material: oxygenName,
          symbol: oxygenSymbol
        }
      ] : [
        {
          color: indiumColor,
          material: indiumName,
          symbol: indiumSymbol
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
      tinColor,
      tinName,
      tinSymbol,
      indiumColor,
      indiumName,
      indiumSymbol
    ]);

  useEffect(() => {
    onPutStructure(structureData);
  }, [onPutStructure, structureData]);


  if (isReal) {
    return (
      <group>
        {
          showUnitCell && (
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={lattices} />
              <meshStandardMaterial visible={false} />
              <Edges color={colorPalette.lines3d} />
            </mesh>
          )
        }
        {
          tinAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[tinRadius]} />
              <meshStandardMaterial color={tinColor} />
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
      </group>
    )
  } else {
    return (
      <group>
        {
          indiumAtoms.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={indiumColor} />
            </mesh>
          ))
        }
        {
          idealEdges.map((edge, index) => (
            <Line
              key={index}
              points={edge}
              color={colorPalette.lines3d}
              lineWidth={1}
            />
          ))
        }
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={idealBox} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.lines3d} />
        </mesh>
      </group>
    )
  }
}