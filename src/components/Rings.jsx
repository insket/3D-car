import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Rings() {
  const ring = Array(14).fill(0);
  const itemRef = useRef([]);

  useFrame(() => {
    for (let i = 0; i < itemRef.current.length; i++) {
      let mesh = itemRef.current[i];
      let z = (i - 7) * 3.5;
      mesh.position.set(0, 0, -z);

      let dist = Math.abs(z);
      mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);

    }
  });
  return (
    <>
      {ring.map((v, i) => (
        <mesh
          castShadow
          receiveShadow
          position={[0, 0, 0]}
          key={i}
          ref={(el) => (itemRef.current[i] = el)}
        >
          <torusGeometry args={[3.35, 0.05, 16, 100]} />
          <meshStandardMaterial emissive={[4, 0.1, 0.4]} color={[0, 0, 0]} />
        </mesh>
      ))}
    </>
  );
}
