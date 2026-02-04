import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Stars, Cloud } from '@react-three/drei';

export default function ThreeDScene() {
  return (
    <div className="absolute inset-0 z-0" style={{ backgroundColor: '#021024', background: 'radial-gradient(circle at center, #052659 0%, #021024 100%)' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
         {/* Fog to blend edges into the dark background - adjusted color to match gradient edge */}
        <fog attach="fog" args={['#021024', 5, 20]} />
        <ambientLight intensity={1} />

        <Stars radius={150} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        {/* Floating elements for minimal premium feel */}
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[0, 0.2]}>
             <mesh position={[3, -2, -2]}>
                <torusGeometry args={[0.5, 0.1, 16, 100]} />
                <meshStandardMaterial color="#5483B3" transparent opacity={0.3} wireframe />
             </mesh>
        </Float>
         <Float speed={3} rotationIntensity={0.4} floatIntensity={0.8} floatingRange={[0, 0.4]}>
             <mesh position={[-3, 2, -3]}>
                <dodecahedronGeometry args={[0.6, 0]} />
                <meshStandardMaterial color="#7DA0CA" transparent opacity={0.2} wireframe />
             </mesh>
        </Float>
      </Canvas>
      {/* Heavy Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#021024] via-transparent to-[#021024] opacity-50 pointer-events-none"></div>
    </div>
  );
}
