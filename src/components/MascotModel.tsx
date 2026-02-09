// components/MascotModel.tsx
"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Mascot = ({ url }: { url: string }) => {
  const { scene } = useGLTF(url);
  return (
    <primitive
      object={scene}
      scale={1.5}
      position={[0, 0.5, 0]} // moved mascot up significantly
      rotation={[0, 0, 0]} // facing camera directly
    />
  );
};

export const MascotModel = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Canvas camera={{ position: [0, 0.5, 5], fov: 35 }}>
        {/* Lights */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 5, 2]} intensity={1.5} />

        {/* Mascot
        <Suspense fallback={null}>
          <Mascot url="/robot.glb" />
        </Suspense> */}

        {/* No OrbitControls */}
      </Canvas>
    </div>
  );
};
