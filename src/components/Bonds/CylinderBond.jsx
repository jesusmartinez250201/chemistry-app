import { Cylinder } from '@react-three/drei'
import { Vector3, Matrix4, Object3D, Euler } from 'three'

const CylinderBond = ({ start, end }) => {
    const bondColor = 'white',
    bondRadius = 0.06,
    startVec = new Vector3(...start),
    endVec = new Vector3(...end),
    midPoint = startVec.clone().add(endVec).multiplyScalar(0.5),
    direction = new Vector3().subVectors(endVec, startVec),
    length = direction.length(),
    orientation = new Matrix4()

    orientation.lookAt(startVec, endVec, new Object3D().up)
    orientation.multiply(new Matrix4().makeRotationX(Math.PI / 2))

    return (
        <Cylinder
            args={[bondRadius, bondRadius, length]}
            position={midPoint}
            rotation={new Euler().setFromRotationMatrix(orientation)}
        >
            <meshStandardMaterial color={bondColor} />
        </Cylinder>
    );
}

export default CylinderBond;