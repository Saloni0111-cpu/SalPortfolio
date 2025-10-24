// ModelViewer.tsx
import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import * as THREE from "three";

type ModelProps = {
  url: string;
};

function AnimatedModel({ url }: ModelProps) {
  const gltf = useGLTF(url) as unknown as GLTF;
  const ref = useRef<THREE.Group>(null);
  let time = 0;

  useFrame((_, delta) => {
    time += delta;
    if (!ref.current) return;

    // Hand waving animation
    const hand = ref.current.getObjectByName("RightHand");
    if (hand) hand.rotation.z = Math.sin(time * 3) * 0.5;

    // Head subtle movement
    const head = ref.current.getObjectByName("Head");
    if (head) head.rotation.x = Math.sin(time * 2) * 0.05;

    // Eye blinking if morph target exists
    const faceMesh = ref.current.getObjectByName("FaceMesh") as THREE.Mesh;
    if (faceMesh && faceMesh.morphTargetDictionary?.["Blink"]) {
      const index = faceMesh.morphTargetDictionary["Blink"];
      faceMesh.morphTargetInfluences![index] = (Math.sin(time * 5) + 1) / 2;
    }
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={[0, 0, 0]}
      rotation={[0, -1.5, 0]}
      scale={1}
    />
  );
}

export default function ModelViewer() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Detect screen size
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 1024); // Show only on screens wider than 1024px
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!isDesktop) return null; // Hide model on mobile/tablet screens

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: "-30px",
        width: "350px",
        height: "800px",
        top: "22rem",
        pointerEvents: "none",
        zIndex: 1000,
      }}
    >
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <AnimatedModel url="/models/myModel.glb" />
        </Suspense>
      </Canvas>
    </div>
  );
}
