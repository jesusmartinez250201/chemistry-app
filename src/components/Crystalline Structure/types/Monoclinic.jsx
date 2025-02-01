import { monoclinics } from '../../utils/CrystallineStructuresData.json'
import { Table } from '../../utils/ElementsData.json';
import { Edges, Line, Text, Billboard } from '@react-three/drei';
import { useMemo, useEffect } from 'react';

const SCALE = [0.0052, 0.0052, 0.0052];
const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export function MonoclinicSimple({ isReal, showUnitCell, onPutStructure }) {
  const idealEdges = monoclinics.simple.ideal.edges,
    structureName = monoclinics.simple.name,
    realEdges = monoclinics.simple.real.edges,
    idealAtoms = monoclinics.simple.ideal.atoms.positions,
    plutoniumName = Table.Row.find(el => el.Cell[0] === '94').Cell[2],
    plutoniumSymbol = Table.Row.find(el => el.Cell[0] === '94').Cell[1],
    plutoniumColor = `#${Table.Row.find(el => el.Cell[0] === '94').Cell[4]}`,
    zirconiumName = Table.Row.find(el => el.Cell[0] === '40').Cell[2],
    zirconiumSymbol = Table.Row.find(el => el.Cell[0] === '40').Cell[1],
    zirconiumColor = `#${Table.Row.find(el => el.Cell[0] === '40').Cell[4]}`,
    zirconiumAtoms = monoclinics.simple.real.atoms.zirconium.positions,
    zirconiumRadius = Table.Row.find(el => el.Cell[0] === '40').Cell[7],
    oxygenName = Table.Row.find(el => el.Cell[0] === '8').Cell[2],
    oxygenSymbol = Table.Row.find(el => el.Cell[0] === '8').Cell[1],
    oxygenColor = `#${Table.Row.find(el => el.Cell[0] === '8').Cell[4]}`,
    oxygenAtoms = monoclinics.simple.real.atoms.oxygen.positions,
    oxygenRadius = Table.Row.find(el => el.Cell[0] === '8').Cell[7],
    materialName = isReal ? monoclinics.simple.real.materialName : monoclinics.simple.ideal.materialName,
    materialSymbol = isReal ? monoclinics.simple.real.materialSymbol : monoclinics.simple.ideal.materialSymbol,
    structureData = useMemo(() => ({
      structureName: structureName,
      materialName: materialName,
      atomsLegend: isReal ? [
        {
          color: zirconiumColor,
          material: zirconiumName,
          symbol: zirconiumSymbol
        },
        {
          color: oxygenColor,
          material: oxygenName,
          symbol: oxygenSymbol
        },
      ] : [
        {
          color: plutoniumColor,
          material: plutoniumName,
          symbol: plutoniumSymbol
        }
      ],
      materialSymbol: materialSymbol,
      axis:
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Ejes: </b><span>a ≠ b ≠ c</span>
        </div>,
      volume:
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Volumen: </b><span>abc<span className='italic'>·sen</span>(β)</span>
        </div>,
      info: <span>Dos ángulos son de 90°. Un ángulo (β) no es de 90°.</span>
    }), [
      structureName,
      materialName,
      materialSymbol,
      isReal,
      plutoniumColor,
      plutoniumName,
      plutoniumSymbol,
      zirconiumColor,
      zirconiumName,
      zirconiumSymbol,
      oxygenColor,
      oxygenName,
      oxygenSymbol
    ]);

  useEffect(() => {
    onPutStructure(structureData);
  }, [onPutStructure, structureData]);

  if (isReal) {
    return (
      <group>
        {
          zirconiumAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[zirconiumRadius]} />
              <meshStandardMaterial color={zirconiumColor} />
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
        <Billboard position={[-1.3, -0.6, 0]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            α = 90°
          </Text>
        </Billboard>
        <Billboard position={[-0.45, -0.6, 1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            β ≠ 90°
          </Text>
        </Billboard>

        <Billboard position={[-0.6, -1, -0.7]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            γ = 90°
          </Text>
        </Billboard>
        <Billboard position={[-0.5, -1.1, 1.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            a
          </Text>
        </Billboard>
        <Billboard position={[0.6, -1.1, 0]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            b
          </Text>
        </Billboard>
        <Billboard position={[1.1, 0, 1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            c
          </Text>
        </Billboard>
        <mesh position={[-1.5, -1, 1]}>
          <circleGeometry args={[0.75, 32, 0, 1.107]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[-1.5, -1, 1]} rotation={[-Math.PI / 2, 2.035, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI / 2, Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[0.5, -1, -1]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI, -Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        {
          idealAtoms.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={plutoniumColor} />
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

export function MonoclinicBaseCentered({ isReal, showUnitCell, onPutStructure }) {
  const realEdges = monoclinics.baseCentered.real.edges,
    structureName = monoclinics.baseCentered.name,
    idealEdges = monoclinics.baseCentered.ideal.edges,
    chromiumName = Table.Row.find(el => el.Cell[0] === '24').Cell[2],
    chromiumSymbol = Table.Row.find(el => el.Cell[0] === '24').Cell[1],
    chromiumColor = `#${Table.Row.find(el => el.Cell[0] === '24').Cell[4]}`,
    chromiumRadius = Table.Row.find(el => el.Cell[0] === '24').Cell[7],
    chromiumAtoms = monoclinics.baseCentered.real.atoms.chromium.positions,
    nickelName = Table.Row.find(el => el.Cell[0] === '28').Cell[2],
    nickelSymbol = Table.Row.find(el => el.Cell[0] === '28').Cell[1],
    nickelColor = `#${Table.Row.find(el => el.Cell[0] === '28').Cell[4]}`,
    nickelRadius = Table.Row.find(el => el.Cell[0] === '28').Cell[7],
    nickelAtoms = monoclinics.baseCentered.real.atoms.nickel.positions,
    sulfurName = Table.Row.find(el => el.Cell[0] === '16').Cell[2],
    sulfurSymbol = Table.Row.find(el => el.Cell[0] === '16').Cell[1],
    sulfurColor = `#${Table.Row.find(el => el.Cell[0] === '16').Cell[4]}`,
    sulfurRadius = Table.Row.find(el => el.Cell[0] === '16').Cell[7],
    sulfurAtoms = monoclinics.baseCentered.real.atoms.sulfur.positions,
    oxygenName = Table.Row.find(el => el.Cell[0] === '8').Cell[2],
    oxygenSymbol = Table.Row.find(el => el.Cell[0] === '8').Cell[1],
    oxygenColor = `#${Table.Row.find(el => el.Cell[0] === '8').Cell[4]}`,
    oxygenAtoms = monoclinics.baseCentered.ideal.atoms.oxygen.positions,
    copperName = Table.Row.find(el => el.Cell[0] === '29').Cell[2],
    copperSymbol = Table.Row.find(el => el.Cell[0] === '29').Cell[1],
    copperColor = `#${Table.Row.find(el => el.Cell[0] === '29').Cell[4]}`,
    copperAtoms = monoclinics.baseCentered.ideal.atoms.copper.positions,
    materialName = isReal ? monoclinics.baseCentered.real.materialName : monoclinics.baseCentered.ideal.materialName,
    materialSymbol = isReal ? monoclinics.baseCentered.real.materialSymbol : monoclinics.baseCentered.ideal.materialSymbol,
    structureData = useMemo(() => ({
      structureName: structureName,
      materialName: materialName,
      atomsLegend: isReal ? [
        {
          color: chromiumColor,
          material: chromiumName,
          symbol: chromiumSymbol
        },
        {
          color: nickelColor,
          material: nickelName,
          symbol: nickelSymbol
        },
        {
          color: sulfurColor,
          material: sulfurName,
          symbol: sulfurSymbol
        }
      ] : [
        {
          color: oxygenColor,
          material: oxygenName,
          symbol: oxygenSymbol
        },
        {
          color: copperColor,
          material: copperName,
          symbol: copperSymbol
        }
      ],
      materialSymbol: materialSymbol,
      axis:
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Ejes: </b><span>a ≠ b ≠ c</span>
        </div>,
      volume:
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Volumen: </b><span>abc<span className='italic'>·sen</span>(β)</span>
        </div>,
      info: <span>Dos ángulos son de 90°. Un ángulo (β) no es de 90°.</span>
    }), [
      structureName,
      materialName,
      materialSymbol,
      isReal,
      chromiumColor,
      chromiumName,
      chromiumSymbol,
      nickelColor,
      nickelName,
      nickelSymbol,
      sulfurColor,
      sulfurName,
      sulfurSymbol,
      oxygenColor,
      oxygenName,
      oxygenSymbol,
      copperColor,
      copperName,
      copperSymbol
    ]);

  useEffect(() => {
    onPutStructure(structureData);
  }
    , [onPutStructure, structureData]);

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
          chromiumAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[chromiumRadius]} />
              <meshStandardMaterial color={chromiumColor} />
            </mesh>
          ))
        }
        {
          nickelAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[nickelRadius]} />
              <meshStandardMaterial color={nickelColor} />
            </mesh>
          ))
        }
        {
          sulfurAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[sulfurRadius]} />
              <meshStandardMaterial color={sulfurColor} />
            </mesh>
          ))
        }
      </group>
    )
  } else {
    return (
      <group>
        <Billboard position={[-1.3, -0.6, 0]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            α = 90°
          </Text>
        </Billboard>
        <Billboard position={[-0.45, -0.6, 1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            β ≠ 90°
          </Text>
        </Billboard>

        <Billboard position={[-0.6, -1, -0.7]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            γ = 90°
          </Text>
        </Billboard>
        <Billboard position={[-0.5, -1.1, 1.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            a
          </Text>
        </Billboard>
        <Billboard position={[0.6, -1.1, 0]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            b
          </Text>
        </Billboard>
        <Billboard position={[1.1, 0, 1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            c
          </Text>
        </Billboard>
        <mesh position={[-1.5, -1, 1]}>
          <circleGeometry args={[0.75, 32, 0, 1.107]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[-1.5, -1, 1]} rotation={[-Math.PI / 2, 2.035, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI / 2, Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[0.5, -1, -1]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI, -Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        {
          idealEdges.map((edge, index) => (
            <Line points={edge} color={colorPalette.lines3d} key={index} />
          ))
        }
        {
          oxygenAtoms.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={oxygenColor} />
            </mesh>
          ))
        }
        {
          copperAtoms.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={copperColor} />
            </mesh>
          ))
        }
      </group>
    )
  }

}