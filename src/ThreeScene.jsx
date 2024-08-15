import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const { scene } = useGLTF('/models/rocket.glb');
  
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.008;
    }
  });

  // Apply a color to the entire mesh
  scene.getObjectByName('imagetostl_mesh0').material = new THREE.MeshStandardMaterial({ color: 'white' });

  return (
    <group ref={groupRef} position={[0, 0, -150]} rotation={[0, Math.PI / 2, 0]}>
      <primitive object={scene} />
    </group>
  );
};

const ThreeScene = () => {
  const targetPosition = [0, 0, -150];

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={0.8} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Model />
      <OrbitControls target={targetPosition} />
    </Canvas>
  );
};

export default ThreeScene;
