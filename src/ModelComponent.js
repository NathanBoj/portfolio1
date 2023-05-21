import React, { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("./scene.glb");
  const group = useRef();

  useFrame(() => {
    group.current.rotation.y += 0.001;
  });

  return (
    <group ref={group}>
      <primitive object={scene} {...props} />
    </group>
  );
}

export default Model;