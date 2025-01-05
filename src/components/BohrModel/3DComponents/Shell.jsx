import Electrons from "./Electrons";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { useColorPalette } from "../../../hooks/useColorPalette";

export default function Shell({ radius, electronNumber, rotationSpeed }) {
    const { colorPalette } = useColorPalette();
    const groupRef = useRef();

      useFrame(() => {
        groupRef.current.rotation.z += rotationSpeed;
      });

      return (
        <group ref={groupRef}>
          <mesh position={[0, 0, 0]}>
            <circleGeometry args={[radius, 48]} />
            <meshStandardMaterial visible={false} />
            <Edges color={colorPalette.text} />
          </mesh>
          <Electrons radius={radius} electronNumber={electronNumber} />
        </group>
      )
}