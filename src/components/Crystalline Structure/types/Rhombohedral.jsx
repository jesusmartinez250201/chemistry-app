import { rhombohedral } from '../../utils/CrystallineStructuresData.json'
import { Table } from '../../utils/ElementsData.json';
import { Edges, Line, Text, Billboard } from '@react-three/drei';
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
      materialSymbol: materialSymbol,
      axis:
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Ejes: </b><span>a = b = c</span>
        </div>,
      volume:
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Volumen: </b>
          <span>
            a<sup>3</sup>
            <math>
              <msqrt>
                <mrow>
                  <mn>1 - 3</mn>
                  <mi>cos</mi><msup><mo>⁡</mo><mn>2</mn></msup>
                  <mn>⁡α + 2</mn>
                  <mi>cos</mi><msup><mo>⁡</mo><mn>3</mn></msup>
                  <mn>⁡α</mn>
                </mrow>
              </msqrt>
            </math>
          </span>
        </div>,
      info: <span>Todos los ángulos son iguales y ninguno es equivalente a 90°.</span>
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
        <Billboard position={[-0.1, -0.2, 1.3]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            α ≠ 90°
          </Text>
        </Billboard>
        <Billboard position={[-0.8, -0.6, -.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            β ≠ 90°
          </Text>
        </Billboard>
        <Billboard position={[1, -1, -0.7]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            γ ≠ 90°
          </Text>
        </Billboard>
        <Billboard position={[0.3, -1.1, 1.3]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            a
          </Text>
        </Billboard>
        <Billboard position={[1.9, -1.1, 0]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            b
          </Text>
        </Billboard>
        <Billboard position={[1.35, 0, 1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            c
          </Text>
        </Billboard>
        <mesh position={[-0.81, -1.01, 1.28]} rotation={[0, 0.06, 0]}>
          <circleGeometry args={[0.75, 32, 0, 2.056]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[-0.6, -1.0, -1.1]} rotation={[1.6, -1.07, 0.07, 'XZY']}>
          <circleGeometry args={[0.75, 32, 1.595, 1.54]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[1.9, -1.0, -1.3]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.75, 32, 3.06, -1.4]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
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