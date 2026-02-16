import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { motion, useSpring, useTransform, MotionValue } from "framer-motion";
import * as THREE from "three";
import { AirplaneModel } from "./animations/AirplaneModel";
import { Button } from "./ui/button";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

// AOG Style Background Glow (Matches 24/7 AOG Support branding)
const NeonBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none select-none">
      {/* Centered Tiffany Blue Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        style={{
          width: "60vw",
          height: "60vh",
          background: "#5cc6d0",
          opacity: 0.55,
          filter: "blur(160px)",
          borderRadius: "50%"
        }}
      />
    </div>
  );
};









// Error Boundary
class SceneErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.error("3D Scene Error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError)
      return (
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black">
          3D Scene Error
        </div>
      );
    return this.props.children;
  }
}

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMasterSplit, setIsMasterSplit] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth progress spring for heavy, cinematic feel
  const smoothProgress = useSpring(progress, {
    stiffness: 15,
    damping: 25,
    restDelta: 0.0001
  });

  // reset inactivity timer
  const resetInactivityTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsMasterSplit(false);
    }, 60000); // 1 minute
  };

  useEffect(() => {
    const handleActivity = () => resetInactivityTimer();
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('wheel', handleActivity);
    resetInactivityTimer();

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('wheel', handleActivity);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    smoothProgress.set(progress);
  }, [progress, smoothProgress]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;

      // If split, first scroll re-assembles
      if (isMasterSplit) {
        setIsMasterSplit(false);
        e.preventDefault();
        return;
      }

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

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [progress, isMasterSplit]);

  // Phase 1: Header & UI move out (0.0 to 0.25)
  useEffect(() => {
    const headerY = progress <= 0.25 ? (progress / 0.25) * -160 : -160;
    document.documentElement.style.setProperty('--header-y', `${headerY}px`);
  }, [progress]);

  const textOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.25], [0, -800]);

  return (
    <section ref={containerRef} className="hero-mask relative w-full h-screen overflow-hidden bg-black">
      {/* BACKGROUND */}
      <NeonBackground />

      {/* 3D SCENE */}
      <div className="absolute inset-0 w-full h-full z-10">
        <SceneErrorBoundary>
          <Canvas
            shadows
            gl={{ antialias: true, alpha: true }}
            onPointerMissed={() => setIsMasterSplit(false)}
          >
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 1.4, 8]} fov={45} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={2} />
              <pointLight position={[-10, 5, -5]} intensity={1.5} />
              <directionalLight
                position={[5, 10, 5]}
                intensity={4}
                castShadow
                shadow-mapSize={[2048, 2048]}
              />
              <hemisphereLight intensity={1} />
              <CinematicController
                progress={smoothProgress}
                isMasterSplit={isMasterSplit}
                onBodyClick={() => setIsMasterSplit(true)}
              />
            </Suspense>
          </Canvas>
        </SceneErrorBoundary>
      </div>

      {/* UI - Balanced positioning shifted slightly up (pb-20) */}
      <div className="relative z-20 h-full w-full flex flex-col items-center justify-end pb-20 pointer-events-none">
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="text-center px-4 flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            Parts, Service and <span className="text-[#5cc6D0]">Solution</span>
          </h1>
          <p className="text-lg text-white max-w-2xl mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            The one-stop destination for all your aircraft components and
            servicing for a safe flight.
          </p>
          <Button
            className="h-[48px] px-8 rounded-xl text-white font-semibold text-lg pointer-events-auto"
            style={{
              background: "linear-gradient(180deg, #5CC6D0 0%, #05848E 100%)",
            }}
          >
            Know more
          </Button>
        </motion.div>
      </div>

      {/* 🔥 EDGE VIGNETTE (FINAL POLISH) */}
      <div className="pointer-events-none absolute inset-0 z-30">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>
    </section>
  );
};




const CinematicController: React.FC<{
  progress: MotionValue<number>;
  isMasterSplit: boolean;
  onBodyClick: () => void;
}> = ({ progress, isMasterSplit, onBodyClick }) => {
  const airplaneRef = useRef<THREE.Group>(null);
  const controlsRef = useRef<any>(null);
  const [hoveredObject, setHoveredObject] = useState<THREE.Object3D | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useFrame((state) => {
    const p = progress.get();
    const camera = state.camera;

    // --- ROBUST BOUNDARY CONSTANTS ---
    const startPos = { x: 0, y: 6.0, z: 0 };    // High-altitude
    const settledPos = { x: 0, y: 0.8, z: 1 };   // P=0.25 (Standard cruise)
    const midPos = { x: 0, y: 0.8, z: 45 };     // P=0.6
    const endPos = { x: 0, y: 0.8, z: 150 };    // P=1.0

    // Camera Reference Points
    const camInitial = { x: 0, y: 6.5, z: 9 };
    const camMidTarget = { x: 0, y: 2.5, z: 8 };
    const camLanding = { x: 0, y: 4, z: 22 };

    const targetCamPos = new THREE.Vector3();
    const targetLookAt = new THREE.Vector3();

    // 1. Airplane Logistics
    if (airplaneRef.current) {
      const airplane = airplaneRef.current;
      airplane.scale.setScalar(0.25);
      airplane.rotation.set(0, 0, 0);

      if (p <= 0.25) {
        const subP = p / 0.25;
        const currentY = THREE.MathUtils.lerp(startPos.y, settledPos.y, subP);
        const currentZ = THREE.MathUtils.lerp(startPos.z, settledPos.z, subP);
        airplane.position.set(startPos.x, currentY, currentZ);
        airplane.scale.setScalar(0.25);
      }
      else if (p <= 0.6) {
        const subP = (p - 0.25) / 0.35;
        const currentZ = THREE.MathUtils.lerp(settledPos.z, midPos.z, subP);
        airplane.position.set(midPos.x, settledPos.y, currentZ);
        airplane.scale.setScalar(THREE.MathUtils.lerp(0.25, 0.35, subP));
      }
      else {
        const subP = (p - 0.6) / 0.4;
        const currentZ = THREE.MathUtils.lerp(midPos.z, endPos.z, subP);
        airplane.position.set(midPos.x, midPos.y, currentZ);
        airplane.scale.setScalar(0.35 * (1 - subP * 0.98));
        airplane.rotation.z = Math.sin(subP * 15) * 0.03;
      }
      airplane.visible = p < 0.99;
    }

    // 2. Camera Logistics
    if (p <= 0.25) {
      const subP = p / 0.25;
      targetCamPos.lerpVectors(
        new THREE.Vector3(camInitial.x, camInitial.y, camInitial.z),
        new THREE.Vector3(camMidTarget.x, camMidTarget.y, camMidTarget.z),
        subP
      );
      const currentPlaneY = THREE.MathUtils.lerp(startPos.y, settledPos.y, subP);
      const currentPlaneZ = THREE.MathUtils.lerp(startPos.z, settledPos.z, subP);
      targetLookAt.set(0, currentPlaneY, currentPlaneZ);
    }
    else if (p <= 0.6) {
      const subP = (p - 0.25) / 0.35;
      const sweepX = Math.sin(subP * Math.PI) * 16;
      const climbHump = Math.sin(subP * Math.PI) * 18;
      const currentCamY = THREE.MathUtils.lerp(camMidTarget.y, camLanding.y, subP) + climbHump;
      const currentCamZ = THREE.MathUtils.lerp(camMidTarget.z, camLanding.z, subP);

      targetCamPos.set(sweepX, currentCamY, currentCamZ);
      const currentPlaneZ = THREE.MathUtils.lerp(settledPos.z, midPos.z, subP);
      targetLookAt.set(0, settledPos.y, currentPlaneZ);
    }
    else {
      const subP = (p - 0.6) / 0.4;
      targetCamPos.set(camLanding.x, camLanding.y, camLanding.z);
      // Continuous lookat: start at midPos.z (where the previous phase ended) and go to 2000
      const lookAtZ = THREE.MathUtils.lerp(midPos.z, 2000, subP);
      targetLookAt.set(0, settledPos.y, lookAtZ);
    }

    // If master split is active, we allow OrbitControls to fully manage the camera
    // withoutFighting the cinematic path. We only apply smooth cinematic tracking
    // when NOT in master split mode and NOT interacting.
    if (!isMasterSplit && !isInteracting && controlsRef.current) {
      camera.position.lerp(targetCamPos, 0.1);
      controlsRef.current.target.lerp(targetLookAt, 0.1);
      controlsRef.current.update();
    } else if (!controlsRef.current && !isMasterSplit) {
      camera.position.copy(targetCamPos);
      camera.lookAt(targetLookAt);
    }
  });

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableZoom={false}
        rotateSpeed={0.5}
        onStart={() => setIsInteracting(true)}
        onEnd={() => setIsInteracting(false)}
      />
      <group ref={airplaneRef}>
        <AirplaneModel
          isMasterSplit={isMasterSplit}
          onBodyClick={onBodyClick}
          hoveredObject={hoveredObject}
          onPointerMove={(e: ThreeEvent<PointerEvent>) =>
            setHoveredObject(e.object)
          }
          onPointerOut={() => setHoveredObject(null)}
        />
      </group>
    </>
  );
};


