import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import Ground from "./Ground";
import Car from "./Car";
import Rings from "./Rings";
import Boxes from "./Box";
import FloatingGrid from "./FloatingGrid";

export const Experience = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <color args={[0, 0, 0]} attach="background" />

      <Ground />

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => {
          return (
            <>
              <Environment map={texture} />
              <Car />
            </>
          );
        }}
      </CubeCamera>

      <Rings />

      <Boxes />

      {/* <FloatingGrid /> */}

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <EffectComposer>
        {/* <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={1.3}
          width={300}
          height={300}
          kernelSize={5}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.025}
        /> */}

        <ChromaticAberration blendFunction={BlendFunction.NORMAL} offset={[0.0005, 0.0012]} />
      </EffectComposer>
    </>
  );
};
