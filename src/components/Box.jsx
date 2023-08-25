import { useFrame } from "@react-three/fiber";
import React from "react";
import { useRef, useState } from "react";
import { Vector3 } from "three";

function resetPosition() {
  let v = new Vector3(
    (Math.random() * 2 - 1) * 3,
    Math.random() * 2.5 + 0.1,
    (Math.random() * 2 - 1) * 15
  );

  if (v.x < 0) v.x -= 1.75;
  if (v.x > 0) v.x += 1.75;

  return v;
}

function Box({ color }) {
  const box = useRef();
  const [scale] = useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05);
  const [xRotSpeed] = useState(() => Math.random());
  const [yRotSpeed] = useState(() => Math.random());
  const [position, setPosition] = useState(() => resetPosition());

  useFrame(
    (state, delta) => {
      box.current.position.set(position.x, position.y, position.z);
      box.current.rotation.x += delta * xRotSpeed;
      box.current.rotation.y += delta * yRotSpeed;
    },
    [xRotSpeed, yRotSpeed, position]
  );

  return (
    <mesh ref={box} scale={scale} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} envMapIntensity={0.1} />
    </mesh>
  );
}

export default function Boxes() {
  const arr = Array(100).fill(0);

  return (
    <>
      {arr.map((v, i) => (
        <Box key={i} color={i % 2 === 0 ? [0.4, 0.1, 0.1] : [0.05, 0.15, 0.4]} />
      ))}
    </>
  );
}
