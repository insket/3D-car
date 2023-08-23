import { useGLTF } from "@react-three/drei";
import React from "react";
import { useEffect } from "react";
import { Mesh } from "three";

export default function Car() {
  const gltf = useGLTF("./chevrolet_corvette_c7/scene.gltf");

  useEffect(() => {
    gltf.scene.scale.set(0.005, 0.005, 0.005);
    gltf.scene.position.set(0, -0.035, 0);
    gltf.scene.traverse((object) => {
      if (object in Mesh) {
        object.castShadow = true;
      object.receiveShadow = true;
      object.material.envMapIntensity = 20;
      }
    });
  }, []);
  return <primitive object={gltf.scene} />;
}
