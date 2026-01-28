import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { FloatingShape } from "./FloatingShape";
import { Suspense } from "react";

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
          
          {/* Floating shapes */}
          <FloatingShape 
            position={[-4, 2, -2]} 
            color="#00d4ff" 
            scale={0.8}
            geometry="octahedron"
            distort={0.4}
          />
          <FloatingShape 
            position={[4, -1, -3]} 
            color="#22c55e" 
            scale={0.6}
            geometry="icosahedron"
            distort={0.3}
          />
          <FloatingShape 
            position={[3, 2.5, -4]} 
            color="#eab308" 
            scale={0.5}
            geometry="torus"
            speed={1.5}
          />
          <FloatingShape 
            position={[-3, -2, -2]} 
            color="#00d4ff" 
            scale={0.4}
            geometry="sphere"
            distort={0.5}
          />
          <FloatingShape 
            position={[0, 3, -5]} 
            color="#a855f7" 
            scale={0.7}
            geometry="octahedron"
            speed={0.8}
          />
          
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            enableRotate={false}
            autoRotate 
            autoRotateSpeed={0.5} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
