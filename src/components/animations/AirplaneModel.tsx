import React, { useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';

interface AirplaneModelProps {
    hoveredObject?: THREE.Object3D | null;
    isMasterSplit?: boolean;
    onBodyClick?: () => void;
    onPointerMove?: (e: ThreeEvent<PointerEvent>) => void;
    onPointerOut?: (e: ThreeEvent<PointerEvent>) => void;
}

/**
 * Finds the logical explodable root (engine, wing, etc.)
 */
function findExplodeRoot(object: THREE.Object3D): THREE.Object3D {
    let current = object;

    // Optimization: avoid going all the way to the Scene root if we hit a known major assembly
    while (current.parent) {
        if (current.parent.type === 'Scene') break;
        // Increase granularity by allowing deeper traversal (more children required to stop)
        if (current.parent.children.length > 4) break;
        current = current.parent;
    }

    return current;
}

export const AirplaneModel: React.FC<AirplaneModelProps> = ({
    hoveredObject,
    isMasterSplit = false,
    onBodyClick,
    onPointerMove,
    onPointerOut,
}) => {
    const { scene } = useGLTF('/flymodel.glb');

    // Create a static clone of the scene for hit-testing (hitboxes won't move)
    const ghostScene = useMemo(() => scene.clone(true), [scene]);

    const groupRef = useRef<THREE.Group>(null);
    const activeRootRef = useRef<THREE.Object3D | null>(null);

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
                    // increased lateral spreading
                    lateralOffset: new THREE.Vector3(
                        originalPos.x * 0.5,
                        0,
                        originalPos.z * 0.5
                    ),
                });

                const mat = mesh.material as THREE.MeshStandardMaterial;
                if (mat) {
                    mat.metalness = 0.8;
                    mat.roughness = 0.25;
                    mat.transparent = true;
                    mat.opacity = 1;
                }

                mesh.castShadow = true;
                mesh.receiveShadow = true;
            }
        });

        return map;
    }, [scene]);

    useFrame(() => {
        const baseLift = 4.0;          // MAIN vertical explosion strength (tuned)
        const lateralStrength = 1.6;  // sideways spacing (tuned)
        const lerpIn = 0.12;            // explode speed
        const lerpOut = 0.08;           // reassemble speed

        // Sticky Logic: Solve the "flicker" by using ghost hit-testing
        if (hoveredObject) {
            // Match based on name/structure since UUIDs differ on clones
            activeRootRef.current = findExplodeRoot(hoveredObject);
        } else if (!isMasterSplit) {
            activeRootRef.current = null;
        }

        explodedGroups.forEach((parts, root) => {
            // A root matches if it's the hovered ghost root name or master split
            const isHoveredRoot = activeRootRef.current && (
                activeRootRef.current.name === root.name
            );

            const shouldExplode = isMasterSplit || isHoveredRoot;

            parts.forEach(({ mesh, originalPos, layer, lateralOffset }) => {
                let targetPos = originalPos.clone();

                if (shouldExplode) {
                    const layerFactor = THREE.MathUtils.clamp(
                        (layer + 1) * 0.5,
                        0.4,
                        3.5
                    );
                    targetPos.y += baseLift * layerFactor;
                    targetPos.add(lateralOffset.clone().multiplyScalar(lateralStrength));
                }

                mesh.position.lerp(targetPos, shouldExplode ? lerpIn : lerpOut);

                const mat = mesh.material as THREE.MeshStandardMaterial;
                if (mat) {
                    mat.opacity = 1;
                }
            });
        });
    });

    return (
        <group>
            {/* STABLE HITBOXES (Static ghost scene) */}
            <primitive
                object={ghostScene}
                visible={false}
                onPointerMove={(e: ThreeEvent<PointerEvent>) => {
                    e.stopPropagation();
                    onPointerMove?.(e);
                }}
                onPointerOut={(e: ThreeEvent<PointerEvent>) => {
                    e.stopPropagation();
                    onPointerOut?.(e);
                }}
                onClick={(e: ThreeEvent<MouseEvent>) => {
                    e.stopPropagation();
                    onBodyClick?.();
                }}
            />
            {/* VISIBLE ANIMATED SCENE (Raycasting disabled to prevent event flickering) */}
            <primitive
                ref={groupRef}
                object={scene}
                raycast={() => null}
            />
        </group>
    );
};

useGLTF.preload('/flymodel.glb');
