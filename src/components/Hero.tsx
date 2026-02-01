import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useSpring, useTransform, MotionValue } from "framer-motion";
import * as THREE from "three";
import { SkyBackground } from "./animations/SkyBackground";
import { AirplaneModel } from "./animations/AirplaneModel";
import { Button } from "./ui/button";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Smooth progress spring for heavy, cinematic feel
  const smoothProgress = useSpring(progress, {
    stiffness: 15,
    damping: 25,
    restDelta: 0.0001
  });

  useEffect(() => {
    smoothProgress.set(progress);
  }, [progress, smoothProgress]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;

      // Check if we are at the top of the page
      const isAtTop = window.scrollY === 0;

      if (progress < 1 || (isAtTop && e.deltaY < 0 && progress > 0)) {
        // If scrolling up at dead-start, allow normal scroll
        if (e.deltaY < 0 && progress <= 0) return;

        // If scrolling down and already finished, let normal scroll happen
        if (e.deltaY > 0 && progress >= 1) return;

        // Capture the event to drive the animation
        e.preventDefault();

        // Sensitivity tuned for roughly 6-7 full scrolls total
        const sensitivity = 0.0004;
        setProgress((prev) => Math.min(1, Math.max(0, prev + e.deltaY * sensitivity)));
      }
    };

    const container = containerRef.current;
    if (container) {
      // Use window-level for more reliable "catch" when returning to top
      window.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [progress]);

  // Phase 1: Header & UI move out (0.0 to 0.25)
  useEffect(() => {
    const headerY = progress <= 0.25 ? (progress / 0.25) * -160 : -160;
    document.documentElement.style.setProperty('--header-y', `${headerY}px`);
  }, [progress]);

  const textOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.25], [0, -800]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-sky-400 to-sky-200"
    >
      {/* 3D SCENE */}
      <div className="absolute inset-0 w-full h-full z-10">
        <Canvas
          shadows
          camera={{ position: [0, 1.4, 8], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
            <pointLight position={[-10, 5, -5]} intensity={1} color="#e0f2fe" />
            <directionalLight
              position={[5, 10, 5]}
              intensity={2.5}
              castShadow
              shadow-mapSize={[2048, 2048]}
            />
            <hemisphereLight intensity={0.5} color="#87ceeb" groundColor="#ffffff" />

            <SkyBackground />

            <CinematicController progress={smoothProgress} />
          </Suspense>
        </Canvas>
      </div>

      {/* TEXT CONTENT - Balanced positioning */}
      <div className="relative z-20 h-full w-full flex flex-col items-center justify-end pb-24 pointer-events-none">
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="text-center px-4 sm:px-8 md:px-12 flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            Parts, Service and <span className="text-cyan-400">Solution</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto mb-8 px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            The one-stop destination for all your aircraft components and
            servicing for a safe flight.
          </p>

          <Button
            className="h-[48px] px-8 rounded-xl border-0 shadow-[0_4px_14px_rgba(92,198,208,0.4)] text-white font-semibold text-lg min-w-[160px]"
            style={{
              background: "linear-gradient(180deg, #5CC6D0 0%, #05848E 100%)",
            }}
          >
            Know more
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const CinematicController: React.FC<{ progress: MotionValue<number> }> = ({ progress }) => {
  const airplaneRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const p = progress.get();
    const camera = state.camera;

    // --- ROBUST BOUNDARY CONSTANTS ---
    const startPos = { x: 0, y: 6.0, z: 0 };    // High-altitude (User's red line)
    const settledPos = { x: 0, y: 0.8, z: 1 };   // P=0.25 (Standard cruise)
    const midPos = { x: 0, y: 0.8, z: 45 };     // P=0.6
    const endPos = { x: 0, y: 0.8, z: 150 };   // P=1.0

    // Camera Reference Points
    const camInitial = { x: 0, y: 6.5, z: 9 };   // Keep "little top" angle above plane
    const camMidTarget = { x: 0, y: 2.5, z: 8 }; // Balanced lift
    const camLanding = { x: 0, y: 4, z: 22 };   // Final chase position

    // 1. Airplane Logistics: Unified Positive Z (Towards Screen)
    if (airplaneRef.current) {
      const airplane = airplaneRef.current;
      airplane.scale.setScalar(0.25);
      airplane.rotation.set(0, 0, 0);

      if (p <= 0.25) {
        const subP = p / 0.25;
        // Act 1: Smooth Descent from High-Start
        const currentY = THREE.MathUtils.lerp(startPos.y, settledPos.y, subP);
        const currentZ = THREE.MathUtils.lerp(startPos.z, settledPos.z, subP);
        airplane.position.set(startPos.x, currentY, currentZ);
      }
      else if (p > 0.25 && p <= 0.6) {
        const subP = (p - 0.25) / 0.35;
        // Act 2: Approach
        const currentZ = THREE.MathUtils.lerp(settledPos.z, midPos.z, subP);
        airplane.position.set(midPos.x, midPos.y, currentZ);
        airplane.scale.setScalar(0.25 + subP * 0.1);
      }
      else if (p > 0.6) {
        const subP = (p - 0.6) / 0.4;
        // Act 3: Massive Departure
        const currentZ = THREE.MathUtils.lerp(midPos.z, endPos.z, subP);
        airplane.position.set(midPos.x, midPos.y, currentZ);
        airplane.scale.setScalar(0.35 * (1 - subP * 0.98));
        airplane.rotation.z = Math.sin(subP * 15) * 0.05; // Reduced Banking
      }
    }

    // 2. Camera Logistics: Robust Continuity
    if (p <= 0.25) {
      const subP = p / 0.25;
      // Camera smoothly lowers from high vantage as plane descends
      const currentCamY = THREE.MathUtils.lerp(camInitial.y, camMidTarget.y, subP);
      const currentCamZ = THREE.MathUtils.lerp(camInitial.z, camMidTarget.z, subP);
      camera.position.set(0, currentCamY, currentCamZ);

      // Track airplane nose (interpolated)
      const currentPlaneY = THREE.MathUtils.lerp(startPos.y, settledPos.y, subP);
      const currentPlaneZ = THREE.MathUtils.lerp(startPos.z, settledPos.z, subP);
      camera.lookAt(0, currentPlaneY, currentPlaneZ);
    }
    else if (p > 0.25 && p <= 0.6) {
      const subP = (p - 0.25) / 0.35;

      // Side-sweep orbit to land behind (Z=22)
      const sweepX = Math.sin(subP * Math.PI) * 16;
      const climbHeight = camMidTarget.y + Math.sin(subP * Math.PI) * 18;
      const currentCamZ = THREE.MathUtils.lerp(camInitial.z - 1, camLanding.z, subP); // Adjusted for Z-8 start

      camera.position.set(sweepX, climbHeight, currentCamZ);

      // Track airplane at its constant mid-height (interpolated Z)
      const currentPlaneZ = THREE.MathUtils.lerp(settledPos.z, midPos.z, subP);
      camera.lookAt(0, settledPos.y, currentPlaneZ);
    }
    else if (p > 0.6) {
      // Locked Chase Perspective
      camera.position.copy(new THREE.Vector3(camLanding.x, camLanding.y, camLanding.z));
      camera.lookAt(0, settledPos.y, 2000);
    }
  });

  return (
    <group ref={airplaneRef}>
      <AirplaneModel />
    </group>
  );
};
