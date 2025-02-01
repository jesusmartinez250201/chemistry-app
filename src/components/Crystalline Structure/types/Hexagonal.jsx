import { Edges, Line, Text, Billboard } from '@react-three/drei';
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
      materialSymbol: materialSymbol,
      axis:
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Ejes: </b><span>a = b ≠ c</span>
        </div>,
      volume:
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Volumen: </b><span>0.866a<sup>2</sup>c</span>
        </div>,
      info: <span>El ángulo entre a y b es de 120°. Todos los ángulos son iguales y ninguno es de 90°.</span>
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
        <Billboard position={[-0.5, -1.3, 0.7]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            α = 120°
          </Text>
        </Billboard>
        <Billboard position={[0, -1.6, 1.4]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            a
          </Text>
        </Billboard>
        <Billboard position={[-1.3, -1.6, 0.7]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            b
          </Text>
        </Billboard>
        <Billboard position={[0.9, 0, 1.2]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            c
          </Text>
        </Billboard>
        <mesh position={[-0.75, -1.5, 1.299]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.75, 32, -2.0944, 2.0944]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
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