import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface AirplaneModelProps {
    position?: [number, number, number];
    rotation?: [number, number, number];
    scale?: number;
}

export const AirplaneModel: React.FC<AirplaneModelProps> = ({
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    scale = 1
}) => {
    const { scene } = useGLTF('/flymodel.glb');

    // Prepare the model once
    const model = useMemo(() => {
        const cloned = scene.clone();

        // --- DETECT MODEL BOUNDS FOR SPATIAL HIDING ---
        const overallBox = new THREE.Box3().setFromObject(cloned);
        const modelHeight = overallBox.max.y - overallBox.min.y;
        const bottomThreshold = overallBox.min.y + (modelHeight * 0.15);

        cloned.traverse((child: THREE.Object3D) => {
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                mesh.castShadow = true;
                mesh.receiveShadow = true;

                if (mesh.material) {
                    const mat = mesh.material as THREE.MeshStandardMaterial;
                    mat.metalness = 0.7;
                    mat.roughness = 0.2;
                    mat.envMapIntensity = 1.5;
                }

                // --- CAUTIOUS HIDE LANDING GEAR (STAYS AS REQUESTED) ---
                const name = (mesh.name || "").toLowerCase();
                const isCorePart = name.includes("wing") ||
                    name.includes("fuselage") ||
                    name.includes("body") ||
                    name.includes("engine") ||
                    name.includes("turbine") ||
                    name.includes("motor") ||
                    name.includes("propeller");

                const meshBox = new THREE.Box3().setFromObject(mesh);
                const meshCenter = new THREE.Vector3();
                meshBox.getCenter(meshCenter);

                if (
                    !isCorePart && (
                        name.includes("wheel") ||
                        name.includes("gear") ||
                        name.includes("tire") ||
                        name.includes("strut") ||
                        name.includes("door") ||
                        name.includes("support") ||
                        name.includes("cylinder") ||
                        name.includes("brake") ||
                        name.includes("rim") ||
                        name.includes("landing") ||
                        meshCenter.y < bottomThreshold
                    )
                ) {
                    mesh.visible = false;
                }
            }
        });
        return cloned;
    }, [scene]);

    return (
        <primitive
            object={model}
            scale={scale}
            position={position}
            rotation={rotation}
        />
    );
};

useGLTF.preload('/flymodel.glb');
