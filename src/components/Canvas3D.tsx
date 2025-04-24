
import * as THREE from "three";
import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text, useTexture, Environment } from "@react-three/drei";
import { useIsMobile } from "@/hooks/use-mobile";

interface CameraControlsProps {
  enableRotate?: boolean;
}

const CameraControls = ({ enableRotate = true }: CameraControlsProps) => {
  const controlsRef = useRef<any>(null);
  const isMobile = useIsMobile();
  
  return (
    <OrbitControls 
      ref={controlsRef}
      enableZoom={true}
      enablePan={false}
      enableRotate={enableRotate}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={Math.PI / 2}
      dampingFactor={0.05}
      rotateSpeed={isMobile ? 0.5 : 0.8}
      zoomSpeed={0.5}
      makeDefault
    />
  );
};

interface FloatingObjectProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  color?: string;
  geometry?: "box" | "sphere" | "torus";
  speed?: number;
}

const FloatingObject = ({
  position,
  rotation = [0, 0, 0],
  scale = 1,
  color = "#33C3F0",
  geometry = "box",
  speed = 1
}: FloatingObjectProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const t = state.clock.getElapsedTime() * speed;
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.1;
    meshRef.current.rotation.y += 0.01 * speed;
  });

  let geometryElement;
  switch(geometry) {
    case "sphere":
      geometryElement = <sphereGeometry args={[0.5 * scale, 16, 16]} />;
      break;
    case "torus":
      geometryElement = <torusGeometry args={[0.3 * scale, 0.1 * scale, 16, 32]} />;
      break;
    default:
      geometryElement = <boxGeometry args={[0.4 * scale, 0.4 * scale, 0.4 * scale]} />;
  }

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation as [number, number, number]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {geometryElement}
      <meshStandardMaterial
        color={hovered ? "#8BE9FD" : color}
        metalness={0.5}
        roughness={0.3}
        emissive={hovered ? "#8BE9FD" : "#000000"}
        emissiveIntensity={hovered ? 0.5 : 0}
      />
    </mesh>
  );
};

export const ProjectCard = ({ 
  project, 
  position, 
  onClick
}: { 
  project: any, 
  position: [number, number, number],
  onClick: () => void 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  
  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.005;
    if (hovered) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={onClick}
      >
        <boxGeometry args={[1.5, 0.8, 0.1]} />
        <meshStandardMaterial 
          color={hovered ? "#8BE9FD" : "#33C3F0"}
          metalness={0.5}
          roughness={0.3}
          transparent={true}
          opacity={0.7}
          emissive={hovered ? "#8BE9FD" : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
        <Text
          position={[0, 0, 0.06]}
          color="white"
          fontSize={0.15}
          maxWidth={1.3}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
        >
          {project.name}
        </Text>
      </mesh>
    </group>
  );
};

export const BackgroundScene = () => {
  return (
    <group>
      <FloatingObject position={[-2, 1, -3]} geometry="sphere" color="#33C3F0" speed={0.8} />
      <FloatingObject position={[2, -0.5, -2]} geometry="torus" color="#8BE9FD" scale={1.2} speed={0.5} />
      <FloatingObject position={[-1.5, -1, -4]} geometry="box" color="#5383B0" speed={0.6} />
      <FloatingObject position={[1.5, 1.5, -3]} geometry="sphere" color="#5383B0" scale={0.7} speed={0.9} />
    </group>
  );
};

interface Canvas3DProps {
  children?: React.ReactNode;
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
}

export const Canvas3D = ({ 
  children, 
  cameraPosition = [0, 0, 5], 
  enableControls = true 
}: Canvas3DProps) => {
  return (
    <div className="absolute inset-0 h-full w-full touch-none">
      <Canvas
        camera={{ position: cameraPosition }}
        gl={{ antialias: true, alpha: true }}
      >
        <fog attach="fog" args={["#1A1F2C", 5, 15]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
        <spotLight position={[-5, 5, 5]} angle={0.15} penumbra={1} intensity={0.5} castShadow />
        <Suspense fallback={null}>
          <Environment preset="city" />
          {children}
          <BackgroundScene />
        </Suspense>
        {enableControls && <CameraControls />}
      </Canvas>
    </div>
  );
};
