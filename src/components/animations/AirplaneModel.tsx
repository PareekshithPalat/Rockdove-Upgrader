import React, { useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';

interface AirplaneModelProps {
    hoveredObject?: THREE.Object3D | null;
    onPointerMove?: (e: ThreeEvent<PointerEvent>) => void;
    onPointerOut?: (e: ThreeEvent<PointerEvent>) => void;
}

/**
 * Finds the logical explodable root (engine, wing, etc.)
 */
function findExplodeRoot(object: THREE.Object3D): THREE.Object3D {
    let current = object;

    while (current.parent) {
        // Stop at GLTF root child (not entire plane)
        if (current.parent.type === 'Scene') break;
        if (current.parent.children.length > 1) break;
        current = current.parent;
    }

    return current;
}

export const AirplaneModel: React.FC<AirplaneModelProps> = ({
    hoveredObject,
    onPointerMove,
    onPointerOut,
}) => {
    const { scene } = useGLTF('/flymodel.glb');
    const groupRef = useRef<THREE.Group>(null);

    /**
     * Cache exploded groups with STRUCTURED separation data
     */
    const explodedGroups = useMemo(() => {
        const map = new Map<
            THREE.Object3D,
            {
                mesh: THREE.Mesh;
                originalPos: THREE.Vector3;
                layer: number;
                lateralOffset: THREE.Vector3;
            }[]
        >();

        scene.traverse((obj: THREE.Object3D) => {
            if ((obj as THREE.Mesh).isMesh) {
                const mesh = obj as THREE.Mesh;
                const root = findExplodeRoot(mesh);

                if (!map.has(root)) map.set(root, []);

                const originalPos = mesh.position.clone();

                map.get(root)!.push({
                    mesh,
                    originalPos,
                    // vertical ordering hint (used for clean stacking)
                    layer: originalPos.y,
                    // small sideways offset to avoid overlap
                    lateralOffset: new THREE.Vector3(
                        originalPos.x * 0.25,
                        0,
                        originalPos.z * 0.25
                    ),
                });

                const mat = mesh.material as THREE.MeshStandardMaterial;
                if (mat) {
                    mat.metalness = 0.8;
                    mat.roughness = 0.25;
                }

                mesh.castShadow = true;
                mesh.receiveShadow = true;
            }
        });

        return map;
    }, [scene]);

    useFrame(() => {
        const baseLift = 2.8;          // MAIN vertical explosion strength
        const lateralStrength = 0.6;  // subtle sideways spacing
        const lerpIn = 0.2;            // explode speed
        const lerpOut = 0.1;           // reassemble speed

        const activeRoot =
            hoveredObject ? findExplodeRoot(hoveredObject) : null;

        explodedGroups.forEach((parts, root) => {
            const shouldExplode = root === activeRoot;

            parts.forEach(({ mesh, originalPos, layer, lateralOffset }) => {
                let targetPos = originalPos.clone();

                if (shouldExplode) {
                    // Normalize vertical layering
                    const layerFactor = THREE.MathUtils.clamp(
                        (layer + 1) * 0.6,
                        0.4,
                        2.5
                    );

                    // PRIMARY: lift upward
                    targetPos.y += baseLift * layerFactor;

                    // SECONDARY: slight sideways spacing
                    targetPos.add(
                        lateralOffset.clone().multiplyScalar(lateralStrength)
                    );
                }

                mesh.position.lerp(
                    targetPos,
                    shouldExplode ? lerpIn : lerpOut
                );
            });
        });
    });

    return (
        <primitive
            ref={groupRef}
            object={scene}
            onPointerMove={(e: ThreeEvent<PointerEvent>) => {
                e.stopPropagation();
                onPointerMove?.(e);
            }}
            onPointerOut={(e: ThreeEvent<PointerEvent>) => {
                e.stopPropagation();
                onPointerOut?.(e);
            }}
        />
    );
};

useGLTF.preload('/flymodel.glb');
