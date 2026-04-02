'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Float, Environment } from '@react-three/drei';

export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
      
      <Float
        speed={2} 
        rotationIntensity={1} 
        floatIntensity={1}
      >
        <Stage adjustCamera={false} environment="city" intensity={0.5} contactShadow={{ opacity: 0.5 }}>
          {/* Placeholder for the premium bag model */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.5, 2, 0.5]} />
            <meshStandardMaterial color="#222" roughness={0.1} metalness={0.8} />
          </mesh>
        </Stage>
      </Float>

      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.5} 
        makeDefault 
      />
      
      <Environment preset="night" />
    </Canvas>
  );
}
