import { triclinic } from '../../utils/CrystallineStructuresData.json'
import { Table } from '../../utils/ElementsData.json';
import { Edges, Line, Text, Billboard } from '@react-three/drei';
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
      materialSymbol: materialSymbol,
      axis:
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Ejes: </b><span>a ≠ b ≠ c</span>
        </div>,
      volume:
        <div style={{ color: colorPalette.text }} className='flex flex-nowrap'>
          <b style={{ color: colorPalette.textTitles }}>Volumen: </b>
          <span className='flex'>
            abc
            <math>
              <msqrt>
                <mrow>
                  <mi>1 - cos</mi><msup><mo>⁡</mo><mn>2</mn></msup>
                  <mi>⁡α - cos</mi><msup><mo>⁡</mo><mn>2</mn></msup>
                  <mi>β - cos</mi><msup><mo>⁡</mo><mn>2</mn></msup>
                  <mn>⁡γ + 2</mn>
                  <mi>cos</mi>
                  <mn>⁡α</mn>
                  <mi>cos</mi>
                  <mn>⁡β</mn>
                  <mi>cos</mi>
                  <mn>⁡γ</mn>
                </mrow>
              </msqrt>
            </math>
          </span>
        </div>,
      info: <span>Todos los ángulos son distintos y ninguno es equivalente a 90°.</span>
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
        <Billboard position={[-0.1, -1.1, 1.3]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            α ≠ 90°
          </Text>
        </Billboard>
        <Billboard position={[-0.5, -0.3, -.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            β ≠ 90°
          </Text>
        </Billboard>
        <Billboard position={[1.5, -0.7, -0.7]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            γ ≠ 90°
          </Text>
        </Billboard>
        <Billboard position={[0.3, -1.9, 1.3]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            a
          </Text>
        </Billboard>
        <Billboard position={[2.3, -1.1, 0]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            b
          </Text>
        </Billboard>
        <Billboard position={[1.5, -0.5, 1.2]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            c
          </Text>
        </Billboard>
        <mesh position={[-0.9, -1.8, 1.2]} rotation={[0, 0.0005, 0]}>
          <circleGeometry args={[0.75, 32, 0, 1.795]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[-0.2, -0.5, -1.2]} rotation={[2.1, -1.195, 0.235, 'XZY']}>
          <circleGeometry args={[0.75, 32, 1.595, 1.985]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[2.4, -0.5, -1.2]} rotation={[2.07, 0, 0]}>
          <circleGeometry args={[0.75, 32, 3.14, -1.32]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
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