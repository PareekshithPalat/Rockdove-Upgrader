import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cloud, Sky } from '@react-three/drei';
import * as THREE from 'three';

export const SkyBackground: React.FC = () => {
    const cloudsRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (cloudsRef.current) {
            // Move near-field clouds for flight sensation
            cloudsRef.current.position.z -= 0.05;
            if (cloudsRef.current.position.z < -50) {
                cloudsRef.current.position.z = 20;
            }
        }
    });

    return (
        <>
            <Sky sunPosition={[100, 10, 100]} turbidity={0.1} rayleigh={2} />

            <group ref={cloudsRef}>
                <Cloud
                    opacity={0.5}
                    speed={0.4}
                    width={10}
                    depth={1.5}
                    segments={20}
                    position={[-10, -5, -15]}
                />
                <Cloud
                    opacity={0.5}
                    speed={0.4}
                    width={10}
                    depth={1.5}
                    segments={20}
                    position={[10, -2, -25]}
                />
                <Cloud
                    opacity={0.5}
                    speed={0.4}
                    width={10}
                    depth={1.5}
                    segments={20}
                    position={[0, -8, -10]}
                />
                <Cloud
                    opacity={0.5}
                    speed={0.4}
                    width={10}
                    depth={1.5}
                    segments={20}
                    position={[-15, 2, -30]}
                />
                <Cloud
                    opacity={0.5}
                    speed={0.4}
                    width={10}
                    depth={1.5}
                    segments={20}
                    position={[15, -10, -40]}
                />
            </group>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <directionalLight position={[-5, 5, 5]} intensity={1} />
        </>
    );
};
