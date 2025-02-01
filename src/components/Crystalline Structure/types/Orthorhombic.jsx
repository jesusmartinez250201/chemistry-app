import { orthorhombics } from '../../utils/CrystallineStructuresData.json'
import { Table } from '../../utils/ElementsData.json';
import { Edges, Line, Text, Billboard } from '@react-three/drei';
import { useEffect, useMemo } from 'react';

const SCALE = [0.0052, 0.0052, 0.0052];
const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export function OrthorhombicSimple({ isReal, showUnitCell, onPutStructure }) {
  const carbonColor = `#${Table.Row.find(el => el.Cell[0] === '6').Cell[4]}`,
    structureName = orthorhombics.simple.name,
    carbonName = Table.Row.find(el => el.Cell[0] === '6').Cell[2],
    carbonSymbol = Table.Row.find(el => el.Cell[0] === '6').Cell[1],
    carbonAtoms = orthorhombics.simple.real.atoms.carbon.positions,
    carbonRadius = Table.Row.find(el => el.Cell[0] === '6').Cell[7],
    calciumName = Table.Row.find(el => el.Cell[0] === '20').Cell[2],
    calciumSymbol = Table.Row.find(el => el.Cell[0] === '20').Cell[1],
    calciumColor = `#${Table.Row.find(el => el.Cell[0] === '20').Cell[4]}`,
    calciumAtoms = orthorhombics.simple.real.atoms.calcium.positions,
    calciumRadius = Table.Row.find(el => el.Cell[0] === '20').Cell[7],
    oxygenName = Table.Row.find(el => el.Cell[0] === '8').Cell[2],
    oxygenSymbol = Table.Row.find(el => el.Cell[0] === '8').Cell[1],
    oxygenColor = `#${Table.Row.find(el => el.Cell[0] === '8').Cell[4]}`,
    oxygenAtoms = orthorhombics.simple.real.atoms.oxygen.positions,
    oxygenRadius = Table.Row.find(el => el.Cell[0] === '8').Cell[7],
    sulfurName = Table.Row.find(el => el.Cell[0] === '16').Cell[2],
    sulfurSymbol = Table.Row.find(el => el.Cell[0] === '16').Cell[1],
    sulfurColor = `#${Table.Row.find(el => el.Cell[0] === '16').Cell[4]}`,
    sulfurAtoms = orthorhombics.simple.ideal.atoms.positions,
    idealEdges = orthorhombics.simple.ideal.edges,
    materialName = isReal ? orthorhombics.simple.real.materialName : orthorhombics.simple.ideal.materialName,
    materialSymbol = isReal ? orthorhombics.simple.real.materialSymbol : orthorhombics.simple.ideal.materialSymbol,
    structureData = useMemo(() => ({
      structureName: structureName,
      materialName: materialName,
      atomsLegend: isReal ? [
        {
          color: carbonColor,
          material: carbonName,
          symbol: carbonSymbol
        },
        {
          color: calciumColor,
          material: calciumName,
          symbol: calciumSymbol
        },
        {
          color: oxygenColor,
          material: oxygenName,
          symbol: oxygenSymbol
        }
      ] : [
        {
          color: sulfurColor,
          material: sulfurName,
          symbol: sulfurSymbol
        }
      ],
      materialSymbol: materialSymbol,
      axis:
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Ejes: </b><span>a ≠ b ≠ c</span>
        </div>,
      volume:
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Volumen: </b><span>abc</span>
        </div>,
      info: <span>Todos los ángulos son de 90°</span>
    }), [
      structureName,
      materialName,
      materialSymbol,
      isReal,
      carbonColor,
      carbonName,
      carbonSymbol,
      calciumColor,
      calciumName,
      calciumSymbol,
      oxygenColor,
      oxygenName,
      oxygenSymbol,
      sulfurColor,
      sulfurName,
      sulfurSymbol
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
              <boxGeometry args={orthorhombics.simple.real.box.args} />
              <meshStandardMaterial visible={false} />
              <Edges color={colorPalette.lines3d} />
            </mesh>
          )
        }
        {
          carbonAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[carbonRadius]} />
              <meshStandardMaterial color={carbonColor} />
            </mesh>
          ))
        }
        {
          calciumAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[calciumRadius]} />
              <meshStandardMaterial color={calciumColor} />
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
        <Billboard position={[-0.4, -0.9, 1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            α = 90°
          </Text>
        </Billboard>
        <Billboard position={[-1.3, -0.8, 0.3]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            β = 90°
          </Text>
        </Billboard>
        <Billboard position={[0.3, -1.5, -0.5]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            γ = 90°
          </Text>
        </Billboard>
        <Billboard position={[0, -1.5, 1.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            a
          </Text>
        </Billboard>
        <Billboard position={[1.4, -1.5, 0]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            b
          </Text>
        </Billboard>
        <Billboard position={[1.4, 0, 1.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            c
          </Text>
        </Billboard>
        <mesh position={[-1.3, -1.5, 1]}>
          <circleGeometry args={[0.75, 32, 0, Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[-1.3, -1.5, 1]} rotation={[0, -Math.PI / 2, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI / 2, Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[1.3, -1.5, -1]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI, -Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        {
          sulfurAtoms.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={sulfurColor} />
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

export function OrthorhombicBaseCentered({ isReal, showUnitCell, onPutStructure }) {
  const carbonColor = `#${Table.Row.find(el => el.Cell[0] === '6').Cell[4]}`,
    structureName = orthorhombics.baseCentered.name,
    carbonName = Table.Row.find(el => el.Cell[0] === '6').Cell[2],
    carbonSymbol = Table.Row.find(el => el.Cell[0] === '6').Cell[1],
    carbonAtoms = orthorhombics.baseCentered.real.atoms.carbon.positions,
    carbonRadius = Table.Row.find(el => el.Cell[0] === '6').Cell[7],
    calciumName = Table.Row.find(el => el.Cell[0] === '20').Cell[2],
    calciumSymbol = Table.Row.find(el => el.Cell[0] === '20').Cell[1],
    calciumColor = `#${Table.Row.find(el => el.Cell[0] === '20').Cell[4]}`,
    calciumAtoms = orthorhombics.baseCentered.real.atoms.calcium.positions,
    calciumRadius = Table.Row.find(el => el.Cell[0] === '20').Cell[7],
    oxygenName = Table.Row.find(el => el.Cell[0] === '8').Cell[2],
    oxygenSymbol = Table.Row.find(el => el.Cell[0] === '8').Cell[1],
    oxygenColor = `#${Table.Row.find(el => el.Cell[0] === '8').Cell[4]}`,
    oxygenAtoms = orthorhombics.baseCentered.real.atoms.oxygen.positions,
    oxygenRadius = Table.Row.find(el => el.Cell[0] === '8').Cell[7],
    materialName = isReal ? orthorhombics.baseCentered.real.materialName : orthorhombics.baseCentered.ideal.materialName,
    materialSymbol = isReal ? orthorhombics.baseCentered.real.materialSymbol : orthorhombics.baseCentered.ideal.materialSymbol,
    structureData = useMemo(() => ({
      structureName: structureName,
      materialName: materialName,
      atomsLegend: [
        {
          color: carbonColor,
          material: carbonName,
          symbol: carbonSymbol
        },
        {
          color: calciumColor,
          material: calciumName,
          symbol: calciumSymbol
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
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Volumen: </b><span>abc</span>
        </div>,
      info: <span>Todos los ángulos son de 90°</span>
    }), [
      structureName,
      materialName,
      materialSymbol,
      carbonColor,
      carbonName,
      carbonSymbol,
      calciumColor,
      calciumName,
      calciumSymbol,
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
          showUnitCell && (
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={orthorhombics.baseCentered.real.box.args} />
              <meshStandardMaterial visible={false} />
              <Edges color={colorPalette.lines3d} />
            </mesh>
          )
        }
        {
          carbonAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[carbonRadius]} />
              <meshStandardMaterial color={carbonColor} />
            </mesh>

          ))
        }
        {
          calciumAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[calciumRadius]} />
              <meshStandardMaterial color={calciumColor} />
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
        <Billboard position={[-0.4, -0.9, 1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            α = 90°
          </Text>
        </Billboard>
        <Billboard position={[-1.3, -0.8, 0.3]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            β = 90°
          </Text>
        </Billboard>
        <Billboard position={[0.3, -1.5, -0.5]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            γ = 90°
          </Text>
        </Billboard>
        <Billboard position={[0, -1.5, 1.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            a
          </Text>
        </Billboard>
        <Billboard position={[1.4, -1.5, 0]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            b
          </Text>
        </Billboard>
        <Billboard position={[1.4, 0, 1.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            c
          </Text>
        </Billboard>
        <mesh position={[-1.3, -1.5, 1]}>
          <circleGeometry args={[0.75, 32, 0, Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[-1.3, -1.5, 1]} rotation={[0, -Math.PI / 2, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI / 2, Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[1.3, -1.5, -1]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI, -Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        {
          orthorhombics.baseCentered.ideal.atoms.calcium.positions.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={calciumColor} />
            </mesh>
          ))
        }
        {
          orthorhombics.baseCentered.ideal.atoms.oxygen.positions.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={oxygenColor} />
            </mesh>
          ))
        }
        {
          orthorhombics.baseCentered.ideal.atoms.carbon.positions.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={carbonColor} />
            </mesh>
          ))
        }
        {
          orthorhombics.baseCentered.ideal.edges.map((edge, index) => (
            <Line points={edge} color={colorPalette.lines3d} key={index} />
          ))
        }
      </group>
    )
  }
}

export function OrthorhombicBodyCentered({ isReal, showUnitCell, onPutStructure }) {
  const carbonColor = `#${Table.Row.find(el => el.Cell[0] === '6').Cell[4]}`,
    structureName = orthorhombics.bodyCentered.name,
    carbonName = Table.Row.find(el => el.Cell[0] === '6').Cell[2],
    carbonSymbol = Table.Row.find(el => el.Cell[0] === '6').Cell[1],
    carbonAtoms = orthorhombics.bodyCentered.real.atoms.carbon.positions,
    carbonRadius = Table.Row.find(el => el.Cell[0] === '6').Cell[7],
    calciumName = Table.Row.find(el => el.Cell[0] === '20').Cell[2],
    calciumSymbol = Table.Row.find(el => el.Cell[0] === '20').Cell[1],
    calciumColor = `#${Table.Row.find(el => el.Cell[0] === '20').Cell[4]}`,
    calciumAtoms = orthorhombics.bodyCentered.real.atoms.calcium.positions,
    calciumRadius = Table.Row.find(el => el.Cell[0] === '20').Cell[7],
    oxygenName = Table.Row.find(el => el.Cell[0] === '8').Cell[2],
    oxygenSymbol = Table.Row.find(el => el.Cell[0] === '8').Cell[1],
    oxygenColor = `#${Table.Row.find(el => el.Cell[0] === '8').Cell[4]}`,
    oxygenAtoms = orthorhombics.bodyCentered.real.atoms.oxygen.positions,
    oxygenRadius = Table.Row.find(el => el.Cell[0] === '8').Cell[7],
    lattices = orthorhombics.bodyCentered.real.box.args,
    idealEdges = orthorhombics.bodyCentered.ideal.edges,
    materialName = isReal ? orthorhombics.bodyCentered.real.materialName : orthorhombics.bodyCentered.ideal.materialName,
    materialSymbol = isReal ? orthorhombics.bodyCentered.real.materialSymbol : orthorhombics.bodyCentered.ideal.materialSymbol,
    structureData = useMemo(() => ({
      structureName: structureName,
      materialName: materialName,
      atomsLegend: [
        {
          color: carbonColor,
          material: carbonName,
          symbol: carbonSymbol
        },
        {
          color: calciumColor,
          material: calciumName,
          symbol: calciumSymbol
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
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Volumen: </b><span>abc</span>
        </div>,
      info: <span>Todos los ángulos son de 90°</span>
    }), [
      structureName,
      materialName,
      materialSymbol,
      carbonColor,
      carbonName,
      carbonSymbol,
      calciumColor,
      calciumName,
      calciumSymbol,
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
          showUnitCell && (
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={lattices} />
              <meshStandardMaterial visible={false} />
              <Edges color={colorPalette.lines3d} />
            </mesh>
          )
        }
        {
          carbonAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[carbonRadius]} />
              <meshStandardMaterial color={carbonColor} />
            </mesh>
          ))
        }
        {
          calciumAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[calciumRadius]} />
              <meshStandardMaterial color={calciumColor} />
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
        <Billboard position={[-0.4, -0.9, 1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            α = 90°
          </Text>
        </Billboard>
        <Billboard position={[-1.3, -0.8, 0.3]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            β = 90°
          </Text>
        </Billboard>
        <Billboard position={[0.3, -1.5, -0.5]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            γ = 90°
          </Text>
        </Billboard>
        <Billboard position={[0, -1.5, 1.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            a
          </Text>
        </Billboard>
        <Billboard position={[1.4, -1.5, 0]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            b
          </Text>
        </Billboard>
        <Billboard position={[1.4, 0, 1.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            c
          </Text>
        </Billboard>
        <mesh position={[-1.3, -1.5, 1]}>
          <circleGeometry args={[0.75, 32, 0, Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[-1.3, -1.5, 1]} rotation={[0, -Math.PI / 2, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI / 2, Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[1.3, -1.5, -1]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI, -Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        {
          orthorhombics.bodyCentered.ideal.atoms.calcium.positions.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={calciumColor} />
            </mesh>
          ))
        }
        {
          orthorhombics.bodyCentered.ideal.atoms.oxygen.positions.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={oxygenColor} />
            </mesh>
          ))
        }
        {
          orthorhombics.bodyCentered.ideal.atoms.carbon.positions.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={carbonColor} />
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

export function OrthorhombicFaceCentered({ isReal, showUnitCell, onPutStructure }) {
  const carbonColor = `#${Table.Row.find(el => el.Cell[0] === '6').Cell[4]}`,
    structureName = orthorhombics.faceCentered.name,
    carbonName = Table.Row.find(el => el.Cell[0] === '6').Cell[2],
    carbonSymbol = Table.Row.find(el => el.Cell[0] === '6').Cell[1],
    carbonAtoms = orthorhombics.faceCentered.real.atoms.carbon.positions,
    calciumName = Table.Row.find(el => el.Cell[0] === '20').Cell[2],
    calciumSymbol = Table.Row.find(el => el.Cell[0] === '20').Cell[1],
    carbonRadius = Table.Row.find(el => el.Cell[0] === '6').Cell[7],
    calciumColor = `#${Table.Row.find(el => el.Cell[0] === '20').Cell[4]}`,
    calciumAtoms = orthorhombics.faceCentered.real.atoms.calcium.positions,
    calciumRadius = Table.Row.find(el => el.Cell[0] === '20').Cell[7],
    oxygenName = Table.Row.find(el => el.Cell[0] === '8').Cell[2],
    oxygenSymbol = Table.Row.find(el => el.Cell[0] === '8').Cell[1],
    oxygenColor = `#${Table.Row.find(el => el.Cell[0] === '8').Cell[4]}`,
    oxygenAtoms = orthorhombics.faceCentered.real.atoms.oxygen.positions,
    oxygenRadius = Table.Row.find(el => el.Cell[0] === '8').Cell[7],
    lattices = orthorhombics.faceCentered.real.box.args,
    idealEdges = orthorhombics.faceCentered.ideal.edges,
    materialName = isReal ? orthorhombics.faceCentered.real.materialName : orthorhombics.faceCentered.ideal.materialName,
    materialSymbol = isReal ? orthorhombics.faceCentered.real.materialSymbol : orthorhombics.faceCentered.ideal.materialSymbol,
    structureData = useMemo(() => ({
      structureName: structureName,
      materialName: materialName,
      atomsLegend: [
        {
          color: carbonColor,
          material: carbonName,
          symbol: carbonSymbol
        },
        {
          color: calciumColor,
          material: calciumName,
          symbol: calciumSymbol
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
        <div style={{ color: colorPalette.text }}>
          <b style={{ color: colorPalette.textTitles }}>Volumen: </b><span>abc</span>
        </div>,
      info: <span>Todos los ángulos son de 90°</span>
    }), [
      structureName,
      materialName,
      materialSymbol,
      carbonColor,
      carbonName,
      carbonSymbol,
      calciumColor,
      calciumName,
      calciumSymbol,
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
          showUnitCell && (
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={lattices} />
              <meshStandardMaterial visible={false} />
              <Edges color={colorPalette.lines3d} />
            </mesh>
          )
        }
        {
          carbonAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[carbonRadius]} />
              <meshStandardMaterial color={carbonColor} />
            </mesh>
          ))
        }
        {
          calciumAtoms.map((position, index) => (
            <mesh position={position} key={index} scale={SCALE}>
              <sphereGeometry args={[calciumRadius]} />
              <meshStandardMaterial color={calciumColor} />
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
        <Billboard position={[-0.4, -0.9, 1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            α = 90°
          </Text>
        </Billboard>
        <Billboard position={[-1.3, -0.8, 0.3]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            β = 90°
          </Text>
        </Billboard>
        <Billboard position={[0.2, -1.5, -0.7]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.textTitles} fontSize={0.2}>
            γ = 90°
          </Text>
        </Billboard>
        <Billboard position={[0, -1.5, 1.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            a
          </Text>
        </Billboard>
        <Billboard position={[1.4, -1.5, 0]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            b
          </Text>
        </Billboard>
        <Billboard position={[1.4, 0, 1.1]} args={[1, 1]} follow={true}>
          <Text color={colorPalette.text} fontSize={0.3}>
            c
          </Text>
        </Billboard>
        <mesh position={[-1.3, -1.5, 1]}>
          <circleGeometry args={[0.75, 32, 0, Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[-1.3, -1.5, 1]} rotation={[0, -Math.PI / 2, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI / 2, Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        <mesh position={[1.3, -1.5, -1]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.75, 32, Math.PI, -Math.PI / 2]} />
          <meshStandardMaterial visible={false} />
          <Edges color={colorPalette.textTitles} dashed dashScale={10} />
        </mesh>
        {
          orthorhombics.faceCentered.ideal.atoms.calcium.positions.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={calciumColor} />
            </mesh>
          ))
        }
        {
          orthorhombics.faceCentered.ideal.atoms.oxygen.positions.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={oxygenColor} />
            </mesh>
          ))
        }
        {
          orthorhombics.faceCentered.ideal.atoms.carbon.positions.map((position, index) => (
            <mesh position={position} key={index}>
              <sphereGeometry args={[0.4]} />
              <meshStandardMaterial color={carbonColor} />
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