import useSlider from "../../../hooks/useSlider";

export default function Electrons({ radius, electronNumber }) {
    const electrons = [],
      {sliderValue} = useSlider();
      for (let i = 0; i < electronNumber; i++) {
        const angle = (i / electronNumber) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        electrons.push(
          <mesh position={[x, y, 0]} key={i}>
            <sphereGeometry args={[sliderValue, 32, 32]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        );
      }
      return <group>{electrons}</group>;
}