import { useEffect, useMemo } from 'react';
import { Edges, Line } from '@react-three/drei';
import { cubics } from '../../utils/CrystallineStructuresData.json'
import { Table } from '../../utils/ElementsData.json';

const SCALE = [0.0052, 0.0052, 0.0052];
const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export function CubicSimple({ isReal, showUnitCell, onPutStructure }) {
  let data,
    structureName = cubics.simple.name,
    realEdges = cubics.simple.real.edges,
    poloniumRadius = Table.Row.find(el => el.Cell[0] === '84').Cell[18],
    poloniumName = Table.Row.find(el => el.Cell[0] === '84').Cell[2],
    poloniumSymbol = Table.Row.find(el => el.Cell[0] === '84').Cell[1],
    poloniumColor = `#${Table.Row.find(el => el.Cell[0] === '84').Cell[4]}`,
    materialName = poloniumName;

  const structureData = useMemo(() => ({
    structureName: structureName,
    materialName: materialName,
    materialSymbol: poloniumSymbol,
    atomsLegend: [
      {
        color: poloniumColor,
        material: poloniumName,
        symbol: poloniumSymbol
      }
    ]
  }), [
    structureName,
    poloniumName,
    poloniumColor,
    poloniumSymbol,
    materialName
  ]);

  useEffect(() => {
    onPutStructure(structureData);
  }, [onPutStructure, structureData]);

  isReal ? data = cubics.simple.real : data = cubics.simple.ideal;


  if (isReal) {
    return (
      <group>
        {
          showUnitCell && (
            realEdges.map((edge, index) => (
              <Line points={edge} color={colorPalette.lines3d} key={index} />
            ))
          )
        }
        {
          data.atoms.positions.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[poloniumRadius]} />
              <meshStandardMaterial color={poloniumColor} />
            </mesh>
          ))
        }
      </group>
    )
  } else {
    return (
      <group>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={data.box.args} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.lines3d} />
        </mesh>
        {
          data.atoms.positions.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={poloniumColor} />
            </mesh>
          ))
        }
      </group>
    )
  }
}

export function CubicBodyCentered({ isReal, showUnitCell, onPutStructure }) {
  let data,
    realEdges = cubics.bodyCentered.real.edges,
    ironRadius = Table.Row.find(el => el.Cell[0] === '26').Cell[18],
    ironName = Table.Row.find(el => el.Cell[0] === '26').Cell[2],
    ironSymbol = Table.Row.find(el => el.Cell[0] === '26').Cell[1],
    ironColor = `#${Table.Row.find(el => el.Cell[0] === '26').Cell[4]}`,
    structureName = cubics.bodyCentered.name,
    structureData = useMemo(() => ({
      structureName: structureName,
      materialName: ironName,
      materialSymbol: ironSymbol,
      atomsLegend: [
        {
          color: ironColor,
          material: ironName,
          symbol: ironSymbol
        }
      ],
    }), [
      structureName,
      ironName,
      ironColor,
      ironSymbol
    ]);

  useEffect(() => {
    onPutStructure(structureData);
  }, [onPutStructure, structureData]);


  isReal ? data = cubics.bodyCentered.real : data = cubics.bodyCentered.ideal;
  const positions = data.atoms.positions;


  if (isReal) {
    return (
      <group>
        {
          showUnitCell && (
            realEdges.map((edge, index) => (
              <Line points={edge} color={colorPalette.lines3d} key={index} />
            ))
          )
        }
        {
          positions.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[ironRadius]} />
              <meshStandardMaterial color={ironColor} />
            </mesh>
          ))
        }
      </group>
    )
  } else {
    return (
      <group>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={data.box.args} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.lines3d} />
          <Line points={[[1, 1, 1], [-1, -1, -1]]} color={colorPalette.lines3d} />
          <Line points={[[1, -1, -1], [-1, 1, 1]]} color={colorPalette.lines3d} />
          <Line points={[[1, -1, 1], [-1, 1, -1]]} color={colorPalette.lines3d} />
          <Line points={[[1, 1, -1], [-1, -1, 1]]} color={colorPalette.lines3d} />
        </mesh>
        {
          data.atoms.positions.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={ironColor} />
            </mesh>
          ))
        }
      </group>
    )

  }

}

export function CubicFaceCentered({ isReal, showUnitCell, onPutStructure }) {
  let data,
    realEdges = cubics.faceCentered.real.edges,
    nickelRadius = Table.Row.find(el => el.Cell[0] === '28').Cell[18],
    nickelName = Table.Row.find(el => el.Cell[0] === '28').Cell[2],
    nickelSymbol = Table.Row.find(el => el.Cell[0] === '28').Cell[1],
    nickelColor = `#${Table.Row.find(el => el.Cell[0] === '28').Cell[4]}`,
    structureName = cubics.faceCentered.name,
    structureData = useMemo(() => ({
      structureName: structureName,
      materialName: nickelName,
      materialSymbol: nickelSymbol,
      atomsLegend: [
        {
          color: nickelColor,
          material: nickelName,
          symbol: nickelSymbol
        }
      ]
    }), [
      structureName,
      nickelName,
      nickelColor,
      nickelSymbol
    ]);

  useEffect(() => {
    onPutStructure(structureData);
  }, [onPutStructure, structureData]);

  isReal ? data = cubics.faceCentered.real : data = cubics.faceCentered.ideal;

  if (isReal) {
    return (
      <group>
        {
          showUnitCell && (
            realEdges.map((edge, index) => (
              <Line points={edge} color={colorPalette.lines3d} key={index} />
            ))
          )
        }
        {
          data.atoms.positions.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[nickelRadius]} />
              <meshStandardMaterial color={nickelColor} />
            </mesh>
          ))
        }
      </group>
    )
  } else {
    return (
      <group>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={data.box.args} />
          <meshStandardMaterial visible={false} />
          <Edges color="white" />
          <Line points={[[1, -1, 1], [-1, -1, -1]]} color={colorPalette.lines3d} />
          <Line points={[[1, 1, -1], [-1, 1, 1]]} color={colorPalette.lines3d} />
          <Line points={[[1, -1, -1], [-1, -1, 1]]} color={colorPalette.lines3d} />
          <Line points={[[1, 1, 1], [-1, 1, -1]]} color={colorPalette.lines3d} />
          <Line points={[[1, -1, 1], [1, 1, -1]]} color={colorPalette.lines3d} />
          <Line points={[[1, -1, -1], [1, 1, 1]]} color={colorPalette.lines3d} />
          <Line points={[[1, 1, 1], [-1, -1, 1]]} color={colorPalette.lines3d} />
          <Line points={[[1, 1, -1], [-1, -1, -1]]} color={colorPalette.lines3d} />
          <Line points={[[-1, 1, 1], [1, -1, 1]]} color={colorPalette.lines3d} />
          <Line points={[[-1, 1, -1], [1, -1, -1]]} color={colorPalette.lines3d} />
          <Line points={[[-1, 1, 1], [-1, -1, -1]]} color={colorPalette.lines3d} />
          <Line points={[[-1, 1, -1], [-1, -1, 1]]} color={colorPalette.lines3d} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={data.box.args} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.lines3d} />
        </mesh>
        {
          data.atoms.positions.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={nickelColor} />
            </mesh>
          ))
        }
      </group>
    )
  }
}