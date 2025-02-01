import { useEffect, useMemo } from 'react';
import { Edges, Line, Text, Billboard } from '@react-three/drei';
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
    ],
    axis:
      <div style={{ color: colorPalette.text }}>
        <b style={{ color: colorPalette.textTitles }}>Ejes: </b><span>a = b = c</span>
      </div>,
    volume:
      <div style={{ color: colorPalette.text }}>
        <b style={{ color: colorPalette.textTitles }}>Volumen: </b><span>a<sup>3</sup></span>
      </div>,
    info: <span>Todos los ángulos son de 90°</span>
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
        <Billboard position={[-0.2, -0.3, 1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            α = 90°
          </Text>
        </Billboard>
        <Billboard position={[-1, -0.3, 0.3]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            β = 90°
          </Text>
        </Billboard>
        <Billboard position={[0.2, -1, -0.4]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            γ = 90°
          </Text>
        </Billboard>
        <Billboard position={[0, -1, 1.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            a
          </Text>
        </Billboard>
        <Billboard position={[1.1, -1, 0]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            b
          </Text>
        </Billboard>
        <Billboard position={[1.1, 0, 1.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            c
          </Text>
        </Billboard>
        <mesh position={[-1, -1, 1]}>
          <circleGeometry args={[0.75, 32, 0, Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[-1, -1, 1]} rotation={[0, -Math.PI / 2, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI / 2, Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[1, -1, -1]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI, -Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
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
      axis:
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Ejes: </b><span>a = b = c</span>
        </div>,
      volume:
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Volumen: </b><span>a<sup>3</sup></span>
        </div>,
        info: <span>Todos los ángulos son de 90°</span>
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
        <Billboard position={[-0.2, -0.3, 1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            α = 90°
          </Text>
        </Billboard>
        <Billboard position={[-1, -0.3, 0.3]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            β = 90°
          </Text>
        </Billboard>
        <Billboard position={[0.2, -1, -0.4]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            γ = 90°
          </Text>
        </Billboard>
        <Billboard position={[0, -1, 1.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            a
          </Text>
        </Billboard>
        <Billboard position={[1.1, -1, 0]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            b
          </Text>
        </Billboard>
        <Billboard position={[1.1, 0, 1.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            c
          </Text>
        </Billboard>
        <mesh position={[-1, -1, 1]}>
          <circleGeometry args={[0.75, 32, 0, Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[-1, -1, 1]} rotation={[0, -Math.PI / 2, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI / 2, Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[1, -1, -1]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI, -Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
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
      ],
      axis:
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Ejes: </b><span>a = b = c</span>
        </div>,
      volume:
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Volumen: </b><span>a<sup>3</sup></span>
        </div>,
      info: <span>Todos los ángulos son de 90°</span>
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
        <Billboard position={[-0.7, -0.1, 1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            α = 90°
          </Text>
        </Billboard>
        <Billboard position={[-1, -0.7, 0.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            β = 90°
          </Text>
        </Billboard>
        <Billboard position={[0, -1, -0.7]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            γ = 90°
          </Text>
        </Billboard>
        <Billboard position={[0, -1, 1.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            a
          </Text>
        </Billboard>
        <Billboard position={[1.1, -1, 0]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            b
          </Text>
        </Billboard>
        <Billboard position={[1.1, 0, 1.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            c
          </Text>
        </Billboard>
        <mesh position={[-1, -1, 1]}>
          <circleGeometry args={[0.75, 32, 0, Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[-1, -1, 1]} rotation={[0, -Math.PI / 2, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI / 2, Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[1, -1, -1]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI, -Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
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