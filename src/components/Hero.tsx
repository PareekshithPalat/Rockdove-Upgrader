import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Button } from "./ui/button";
// @ts-ignore
import CLOUDS from "./vanta/vanta.clouds.js";

declare const gsap: any;

export const Hero: React.FC = () => {
  const threeJsContainerRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaInstanceRef = useRef<any>(null);
  const [isHeroReady, setIsHeroReady] = useState(false);

  const airplaneRef = useRef<THREE.Group | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const useGsapRef = useRef<boolean>(false);

  // --- VANTA CLOUDS setup ---
  useEffect(() => {
    if (!vantaRef.current) return;
    // @ts-ignore
    window.THREE = THREE;

    /* const effect = CLOUDS({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      skyColor: "#6ec6ff",
      cloudColor: "#ffffff",
      speed: 1.4,
    });

    vantaInstanceRef.current = effect;*/

    return () => {
      if (vantaInstanceRef.current?.destroy) vantaInstanceRef.current.destroy();
      vantaInstanceRef.current = null;
    };
  }, []);

  // --- THREE.JS setup ---
  useEffect(() => {
    if (!threeJsContainerRef.current) return;

    let airplaneGroup: THREE.Group | null = null;
    let isHovered = false;
    const mouse = new THREE.Vector2();

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.4, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 🧠 Optimization for mobile: lower pixel ratio
    const pixelRatio = Math.min(window.devicePixelRatio, 1.8);
    renderer.setPixelRatio(pixelRatio);

    threeJsContainerRef.current!.appendChild(renderer.domElement);

    // --- LIGHTS ---
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const keyLight = new THREE.DirectionalLight(0xfff2e5, 1.2);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.6);
    fillLight.position.set(-3, 2, -4);
    scene.add(fillLight);

    const topLight = new THREE.SpotLight(0xffffff, 6, 25, Math.PI / 3, 0.5, 1);
    topLight.position.set(0, 7, 2);
    topLight.target.position.set(0, 0, 0);
    scene.add(topLight);
    scene.add(topLight.target);

    const bottomLight = new THREE.PointLight(0x88ddff, 6, 18);
    bottomLight.position.set(0, -5, 0);
    scene.add(bottomLight);

    const domeLight1 = new THREE.PointLight(0x66ccff, 4, 15);
    domeLight1.position.set(3, -4, 2);
    scene.add(domeLight1);

    const domeLight2 = new THREE.PointLight(0x66ccff, 4, 15);
    domeLight2.position.set(-3, -4, -2);
    scene.add(domeLight2);

    const hemiLight = new THREE.HemisphereLight(0x87ceeb, 0xffffff, 0.8);
    hemiLight.position.set(0, 5, 0);
    scene.add(hemiLight);

    // --- CONTROLS ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = true;
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;

    const raycaster = new THREE.Raycaster();
    const loader = new GLTFLoader();

    useGsapRef.current = typeof gsap !== "undefined" && gsap != null;

    // --- LOAD AIRPLANE MODEL ---
    loader.load(
      "/flymodel.glb",
      (gltf: GLTF) => {
        airplaneGroup = gltf.scene;

        // ✈️ Dynamic scaling based on screen width (adjusted for mobile)
        const screenWidth = window.innerWidth;
        let scaleValue = 0.25; // default desktop size

        if (screenWidth < 480) scaleValue = 0.08; // smaller for phones
        else if (screenWidth < 768) scaleValue = 0.14; // slightly smaller for tablets
        else if (screenWidth < 1024) scaleValue = 0.22; // small laptops

        airplaneGroup.scale.set(scaleValue, scaleValue, scaleValue);
        airplaneGroup.position.set(0, 0.8, 0);

        // make materials solid and realistic
        airplaneGroup.traverse((child: THREE.Object3D) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            let mat: THREE.MeshStandardMaterial;
            if ((mesh.material as any).isMaterial) {
              const base = mesh.material as THREE.MeshStandardMaterial;
              mat = base.clone();
            } else {
              mat = new THREE.MeshStandardMaterial();
            }

            mat.transparent = false;
            mat.opacity = 1;
            mat.metalness = 0.3;
            mat.roughness = 0.4;
            mat.envMapIntensity = 0;

            mesh.material = mat;
            (mesh as any).userData.originalPos = mesh.position.clone();
          }
        });

        scene.add(airplaneGroup);
        airplaneRef.current = airplaneGroup;
        setIsHeroReady(true);

        if (useGsapRef.current) {
          gsap.to(airplaneGroup.position, {
            y: airplaneGroup.position.y + 0.28,
            duration: 2.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
          gsap.to(airplaneGroup.rotation, {
            z: "+=0.05",
            x: "+=0.02",
            duration: 3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
          gsap.to(airplaneGroup.position, {
            z: airplaneGroup.position.z - 0.35,
            duration: 4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        } else {
          startTimeRef.current = performance.now();
        }
      },
      undefined,
      (err) => {
        console.error("Model failed to load:", err);
        setTimeout(() => setIsHeroReady(true), 500);
      }
    );

    // --- HOVER SEPARATION ---
    function animateParts(expand: boolean) {
      if (!airplaneRef.current || typeof gsap === "undefined") return;
      const spread = 2;
      airplaneRef.current.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          const original = (mesh as any).userData?.originalPos;
          if (!original) return;
          gsap.to(mesh.position, {
            x: expand
              ? original.x + (Math.random() - 0.5) * spread
              : original.x,
            y: expand
              ? original.y + (Math.random() - 0.5) * spread * 0.5
              : original.y,
            z: expand
              ? original.z + (Math.random() - 0.5) * spread
              : original.z,
            duration: 1.5,
            ease: "power3.out",
          });
        }
      });
    }

    // --- EVENTS ---
    const mouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", mouseMove);

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", resize);

    // --- ANIMATION LOOP ---
    let last = performance.now();
    const animate = () => {
      const now = performance.now();
      const dt = (now - last) / 1000;
      last = now;

      if (!useGsapRef.current && airplaneRef.current) {
        if (startTimeRef.current === null) startTimeRef.current = now;
        const t = (now - (startTimeRef.current || now)) / 1000;
        const g = airplaneRef.current;
        g.position.y = 0.8 + Math.sin(t * 0.6) * 0.14;
        g.position.z = Math.cos(t * 0.25) * 0.18;
        g.rotation.x = Math.sin(t * 0.4) * 0.02;
        g.rotation.z = Math.sin(t * 0.6) * 0.03;
      }

      if (airplaneRef.current) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(
          airplaneRef.current.children,
          true
        );
        if (intersects.length > 0 && !isHovered) {
          isHovered = true;
          document.body.style.cursor = "pointer";
          animateParts(true);
        } else if (intersects.length === 0 && isHovered) {
          isHovered = false;
          document.body.style.cursor = "default";
          animateParts(false);
        }
      }

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* CLOUDS BACKGROUND */}
      <div
        ref={vantaRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{
          transform: "scaleX(-1)",
          pointerEvents: "none",
        }}
      />

      {/* AIRPLANE CANVAS */}
      <div
        ref={threeJsContainerRef}
        className="absolute inset-0 w-full h-full z-10"
      />

      {/* TEXT */}
      <div
        className={`relative z-20 text-center px-4 sm:px-8 md:px-12 mt-[300px] sm:mt-[320px] md:mt-[350px] transition-opacity duration-1000 ${isHeroReady ? "opacity-100" : "opacity-0"
          }`}
      >
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Parts, Service and <span className="text-cyan-400">Solution</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto mb-8 px-4">
          The one-stop destination for all your aircraft components and
          servicing for a safe flight.
        </p>

        <Button
          className="mt-[67px] h-[48px] px-8 rounded-full border-0 transition-all duration-300 ease-out hover:scale-105 active:scale-[0.98] shadow-[0_4px_14px_rgba(92,198,208,0.4)] hover:shadow-[0_6px_20px_rgba(92,198,208,0.6)] text-white font-semibold text-lg min-w-[160px]"
          style={{
            background: "linear-gradient(180deg, #5CC6D0 0%, #05848E 100%)",
          }}
        >
          Know more
        </Button>
      </div>
    </section>
  );
};