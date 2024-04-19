import { useEffect, useRef } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture ,useAnimations} from "@react-three/drei";

import state from "../store";

const Shirt = () => {
 
  const snap = useSnapshot(state);
  const { scene, animations } = useGLTF("tom.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);


    
    

  const stateString = JSON.stringify(snap);
  // const birdRef = useRef();
  return (
    <group key={stateString}>
      <mesh  position={[0, -0.6, 0]}
            rotation={[0, 0, 0]}
            scale={0.8}>
        <primitive object={scene} />
      </mesh>
    </group>
    );
};

export default Shirt;
