import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { angleToRadians } from '../../utils/angle';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import Model from './model'; 

export default function Three() {
    
    const orbitControlsRef = useRef(null);
    useFrame((state) => {
        if (!!orbitControlsRef.current) {
            const { x, y } = state.mouse

            orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(30))
            orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30))
            orbitControlsRef.current.update()
        } 
    })

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 1.4]} />
            <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(75)} maxPolarAngle={angleToRadians(105)} enableZoom={false}/>
            
            <Model />

            <ambientLight args={["#ffffff", 0.25]} />
        
            <Environment background>
                <mesh>
                    <sphereGeometry args={[50, 100, 100]}/>
                    <meshBasicMaterial side={THREE.BackSide} color="#ffffff"/>
                </mesh>
            </Environment>
        </>
    ) 
}