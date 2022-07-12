import { BackSide } from "three";
import { useRef, Fragment } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";

import { convertAngleToRad } from "../../../libs";

import Model from "./Model";

export default function Three() {
  const orbitControlsRef = useRef(null);

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;

      orbitControlsRef.current.setAzimuthalAngle(-x * convertAngleToRad(30));
      orbitControlsRef.current.setPolarAngle((y + 1) * convertAngleToRad(90 - 30));
      orbitControlsRef.current.update();
    }
  });

  return (
    <Fragment>
      <PerspectiveCamera makeDefault position={[0, 0, 1.4]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={convertAngleToRad(75)}
        maxPolarAngle={convertAngleToRad(105)}
        enableZoom={false}
        // target={[1, 0, 0]}
      />

      <Model />

      <ambientLight args={["#ffffff", 0.25]} />

      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial side={BackSide} color="#ffffff" />
        </mesh>
      </Environment>
    </Fragment>
  );
}
