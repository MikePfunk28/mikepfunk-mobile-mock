import { type Mesh } from "three";
import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, useTexture, Environment } from "@react-three/drei";
import { useIsMobile } from "@/hooks/use-mobile";


interface CameraControlsProps {
  enableRotate?: boolean;
}

const CameraControls = ({ enableRotate = true }: CameraControlsProps) => {
  const controlsRef = useRef<never>(null);
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
  geometry?: "box" | "sphere" | "torus" | "card";
  speed?: number;
  label?: string;
  url?: string;
  iconSrc?: string;
}

const FloatingObject = ({
  position,
  rotation = [0, 0, 0],
  scale = 3,
  color = "#33C3F0",
  geometry = "card",
  speed = 1,
  label,
  url,
  iconSrc
}: FloatingObjectProps) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Always call useTexture to avoid conditional hook errors
  const iconTexture = useTexture(iconSrc || '/placeholder.svg');

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.getElapsedTime() * speed;
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.1;
    meshRef.current.rotation.y += 0.01 * speed;
  });


  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  let geometryElement;
  switch(geometry) {
    case "sphere":
      geometryElement = <sphereGeometry args={[0.7 * scale, 32, 32]} />;
      break;
    case "torus":
      geometryElement = <torusGeometry args={[0.5 * scale, 0.2 * scale, 32, 48]} />;
      break;
    case "card":
      geometryElement = <boxGeometry args={[1.5 * scale, 0.8 * scale, 0.1 * scale]} />;
      break;
    default:
      geometryElement = <boxGeometry args={[1.2 * scale, 0.8 * scale, 0.1 * scale]} />;
  }

  return (
    <group>
      <mesh
        ref={meshRef}
        position={position}
        rotation={rotation as [number, number, number]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
      >
        {geometryElement}
        <meshStandardMaterial
          color={hovered ? "#8BE9FD" : color}
          metalness={0.7}
          roughness={0.2}
          transparent={true}
          opacity={0.8}
          emissive={hovered ? "#8BE9FD" : "#000000"}          emissiveIntensity={hovered ? 0.8 : 0}
          map={iconSrc ? iconTexture : null}
        />
      </mesh>
      {label && (
        <Text
          position={[position[0], position[1] - 1.9, position[2]]}
          color={hovered ? "#8BE9FD" : "#33C3F0"}
          fontSize={0.7}
          maxWidth={3}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
        >
          {label}        </Text>
      )}
    </group>
  );
};

interface Project {
  name: string;
  // Add other project properties as needed
}
//const light = new THREE.DirectionalLight()
//light.color.set('blue')

//const slight = new THREE.SpotLight()
//slight.color.set('red')

export const ProjectCard = ({
  project,
  position,
  onClick
}: {
  project: Project,
  position: [number, number, number],
  onClick: () => void
}) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

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
        ref={meshRef}onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerLeave={() => setHovered(false)}
        onClick={onClick}
      >
        <boxGeometry args={[1.5, 0.8, 0.1]} />
        <meshStandardMaterial
          color={hovered ? "#8BE9FD" : "#33C3F0"}
          metalness={0.5}
          roughness={0.3}
          transparent={true}
          opacity={0.9}
          emissive={hovered ? "#8BE9FD" : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
        <Text
          position={[0, 0, 0.6]}
          color="white"
          fontSize={0.24}
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
      <FloatingObject
        position={[-10, 2, -6]}
        geometry="box"
        color="#fff"
        speed={0.6}
        label="Quantum Drift"
        url="https://mikepfunk.com/games/aws-cloud-mystery"
        iconSrc="/qd.png"
      />
      <FloatingObject
        position={[10, -5, -6]}
        geometry="box"
        color="#fff"
        speed={0.8}
        label="Databot"
        url="https://mikepfunk.com/databot"
        iconSrc="/mikepfunk_transparent_177x182-2.png"
      />
      <FloatingObject
        position={[-10, -5, -6]}
        geometry="box"
        color="#fff"
        speed={0.8}
        label="LinkedIn"
        url="https://www.linkedin.com/in/michaelpfundt/"
        iconSrc="/linkedin.gif"
      />
      <FloatingObject
        position={[10, 2, -6]}
        geometry="box"
        color="#fff"
        speed={0.6}
        label="GitHub"
        url="https://github.com/MikePfunk28"
        iconSrc="/github.png"
      />
      <FloatingObject
        position={[0, -5, -6]}
        geometry="box"
        color="#fff"
        speed={0.8}
        label="Flashcards"
        url="https://flashcards.mikepfunk.com"
        iconSrc="/mikepfunk_transparent_177x182-3.png"
      />
      <FloatingObject
        position={[0, 2, -6]}
        geometry="box"
        color="#fff"
        speed={0.6}
        label="Mnemonic"
        url="https://mnemonic.mikepfunk.com"
        iconSrc="/mikepfunk_transparent_177x182-4.png"
      />
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
  cameraPosition = [0, -3, 3],
  enableControls = true
}: Canvas3DProps) => {
  return (
    <div className="absolute inset-0 h-full w-full touch-none">
      <Canvas
        camera={{ position: cameraPosition }}
        gl={{ antialias: true, alpha: true }}
      >
        <fog attach="fog" args={["#F0F8FF", 20, 30]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.9} castShadow />
        <spotLight position={[-5, 0, 5]} angle={0.15} penumbra={1} intensity={0.9} castShadow />
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
