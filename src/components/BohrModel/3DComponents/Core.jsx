import { Sphere } from '@react-three/drei';

export default function Core({ isReal }) {
  const particleRadius = isReal ? 0.025 : 0.3,
    protonsPositions = {
      ideal: [
        [0.07, 0, 0],
        [-0.07, 0.07, 0.07],
        [-0.07, 0.07, -0.07],
        [0.07, -0.07, 0.07]
      ],
      real: [
        [0.01, 0, 0],
        [-0.01, 0.01, 0.01],
        [-0.01, 0.01, -0.01],
        [0.01, -0.01, 0.01]
      ]
    },
    neutronsPositions = {
      ideal: [
        [-0.07, 0, 0],
        [0.07, 0.07, 0.07]
      ],
      real: [
        [-0.01, 0, 0],
        [0.01, 0.01, 0.01]
      ]
    };

  return (
    <group>

      {/* Protons */}
      {protonsPositions[isReal ? 'real' : 'ideal'].map((position, index) => (
        <Sphere args={[particleRadius, 16, 16]} position={position} key={index}>
          <meshStandardMaterial color="#ff0000" />
        </Sphere>
      ))}


      {/* Neutrons */}
      {neutronsPositions[isReal ? 'real' : 'ideal'].map((position, index) => (
        <Sphere args={[particleRadius, 16, 16]} position={position} key={index}>
          <meshStandardMaterial color="#ddff00" />
        </Sphere>
      ))}
    </group>
  );
}
