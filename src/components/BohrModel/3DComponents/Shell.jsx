import Electrons from "./Electrons";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";

const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export default function Shell({ radius, electronNumber, rotationSpeed }) {
    const groupRef = useRef();

      useFrame(() => {
        groupRef.current.rotation.z += rotationSpeed;
      });

      return (
        <group ref={groupRef}>
          <mesh position={[0, 0, 0]}>
            <circleGeometry args={[radius, 48]} />
            <meshStandardMaterial visible={false} />
            <Edges color={colorPalette.lines3d} />
          </mesh>
          <Electrons radius={radius} electronNumber={electronNumber} />
        </group>
      )
}