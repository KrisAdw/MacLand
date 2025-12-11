import { Environment, Lightformer } from "@react-three/drei"

const StudioLight = () => {
  return (
    <group name="lights">
        <Environment resolution={256}>
            <group>
                <Lightformer 
                    form="rect"
                    intensity={20}
                    position={[-10, 5, -5]}
                    scale={10}
                    rotation-y={Math.PI / 2}
                />
                <Lightformer 
                    form="rect"
                    intensity={20}
                    position={[10, 5, 5]}
                    scale={10}
                    rotation-y={Math.PI / 2}
                />
            </group>
        </Environment>
    </group>
  )
}

export default StudioLight