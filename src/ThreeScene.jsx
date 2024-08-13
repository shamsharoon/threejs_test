// src/components/ThreeScene.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/models/rocket.glb');
  return <primitive object={scene} />;
};

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={0.8} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
