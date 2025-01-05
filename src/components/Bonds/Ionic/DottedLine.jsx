import { Line } from "@react-three/drei";

export default function DottedLine({ start, end }) {
    const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]
    return (
        <Line
        points={[start, end]}
        color={colorPalette.text}
        dashed
        dashSize={0.1}
        gapSize={0.1}
        lineWidth={3}
        />
    );
}