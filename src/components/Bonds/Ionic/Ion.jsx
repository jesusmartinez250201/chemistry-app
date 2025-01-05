import React from 'react';
import { useSpring, a } from '@react-spring/three';
import { Sphere } from '@react-three/drei';

export default function Ion({ start, end, radius, duration }) {
  const { position } = useSpring({
    from: { position: start },
    to: { position: end },
    config: { duration: duration },
    loop: true,
    reset: true
  });

  return (
    <a.mesh position={position}>
      <Sphere args={[radius, 32, 32]}>
        <meshStandardMaterial attach="material" color="blue" />
      </Sphere>
    </a.mesh>
  );
}