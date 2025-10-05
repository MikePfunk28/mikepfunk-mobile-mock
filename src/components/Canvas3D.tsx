import * as THREE from "three";
import { useRef, useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, useTexture, Environment } from "@react-three/drei";
import { useIsMobile } from "@/hooks/use-mobile";


interface CameraControlsProps {
  enableRotate?: boolean;
}

const CameraControls = ( { enableRotate = true }: CameraControlsProps ) => {
  const controlsRef = useRef<never>( null );
  const isMobile = useIsMobile( 680 );

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      enableRotate={false}
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

// load a texture, set wrap mode to repeat
const texture = new THREE.TextureLoader().load( "textures/water.jpg" );
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 4, 4 );

const FloatingObject = ( {
  position,
  rotation = [0, 0, 0],
  scale = 3,
  color = "#33C3F0",
  geometry = "card",
  speed = 1,
  label,
  url,
  iconSrc
}: FloatingObjectProps ) => {
  const meshRef = useRef<THREE.Mesh>( null );
  const [hovered, setHovered] = useState( false );
  const [parallax, setParallax] = useState<[number, number]>( [0, 0] );
  const isNarrow = useIsMobile( 680 );

  // Always call useTexture to avoid conditional hook errors
  const iconTexture = useTexture( iconSrc || '/placeholder.svg' );



  useEffect( () => {
    if ( !hovered ) return;
    const handleMouseMove = ( e: MouseEvent ) => {
      const x = ( e.clientX / window.innerWidth ) * 2 - 1; // -1 to 1
      const y = ( e.clientY / window.innerHeight ) * 2 - 1;
      setParallax( [x * 0.3, y * 0.6] ); // adjust for tilt strength
    };
    window.addEventListener( "mousemove", handleMouseMove );
    return () => window.removeEventListener( "mousemove", handleMouseMove );
  }, [hovered] );


  const handleClick = () => {
    if ( url ) {
      window.open( url, '_blank' );
    }
  };

  let geometryElement;
  switch ( geometry ) {
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
        rotation={hovered ? [parallax[1], 0, -parallax[0]] : rotation}
        onPointerOver={() => setHovered( true )}
        onPointerOut={() => setHovered( false )}
        onClick={handleClick}
      >
        {geometryElement}
        <meshStandardMaterial
          color={hovered ? "#33AAE0" : color}
          metalness={0.7}
          roughness={0.2}
          transparent={true}
          opacity={0.8}
          emissive={hovered ? "#000000" : "#000000"} emissiveIntensity={hovered ? 0.8 : 0}
          map={iconSrc ? iconTexture : null}
        />
      </mesh>
      {label && (
        <Text
          position={[position[0], position[1] - 1.9, position[2]]} // moved down from -1.5/-1.6
          color="#33AAE0"
          fontSize={0.58}
          maxWidth={4}
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
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

export const ProjectCard = ( {
  project,
  position,
  onClick
}: {
  project: Project,
  position: [number, number, number],
  onClick: () => void
} ) => {
  const meshRef = useRef<THREE.Mesh>( null );
  const [hovered, setHovered] = useState( false );



  return (
    <group position={position}>
      <mesh
        ref={meshRef} onPointerOver={() => setHovered( true )}
        onPointerOut={() => setHovered( false )}
        onPointerLeave={() => setHovered( false )}
        onClick={onClick}
      >
        <boxGeometry args={[1.5, 0.8, 0.1]} />
        <meshStandardMaterial
          color={hovered ? "#33AAE0" : "#33C3F0"}
          metalness={0.5}
          roughness={0.3}
          transparent={true}
          opacity={0.9}
          emissive={hovered ? "#33AAE0" : "#000000"}
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

// Removed accidental exported component named useIsMobile

export const BackgroundScene = () => {
  // If below 680px, bring objects closer horizontally and vertically without scaling
  const isNarrow = useIsMobile( 680 );
  const compress = ( v: [number, number, number] ): [number, number, number] => {
    if ( !isNarrow ) return v;
    // Tighten X and Y spacing more on very narrow screens; keep Z the same to avoid size change
    return [v[0] * 0.5, v[1] * 0.8, v[2]];
  };

  return (
    <group>
      <FloatingObject position={compress( [-7, 1, -9] )} geometry="box" color="#fff" speed={0.6} label="Quantum" url="https://mikepfunk28.github.io/Quantum-Drift-The-Lost-AWS-Architect/" iconSrc="/qd.png" />
      <FloatingObject position={compress( [7, -5, -9] )} geometry="box" color="#fff" speed={0.8} label="Databot" url="https://mikepfunk.com/databot" iconSrc="/mikepfunk_transparent_177x182-2.png" />
      <FloatingObject position={compress( [-7, -5, -9] )} geometry="box" color="#fff" speed={0.8} label="LinkedIn" url="https://www.linkedin.com/in/michaelpfundt/" iconSrc="/linkedin.gif" />
      <FloatingObject position={compress( [7, 1, -9] )} geometry="box" color="#fff" speed={0.6} label="GitHub" url="https://github.com/MikePfunk28" iconSrc="/github.png" />
      <FloatingObject position={compress( [0, -5, -9] )} geometry="box" color="#fff" speed={0.8} label="AI-Hub" url="https://ai-hub.mikepfunk.com" iconSrc="/mikepfunk_transparent_177x182-3.png" />
      <FloatingObject position={compress( [0, 1, -9] )} geometry="box" color="#fff" speed={0.6} label="Mnemonic" url="https://mnemonic.mikepfunk.com" iconSrc="/mikepfunk_transparent_177x182-4.png" />
    </group>
  );
};

interface Canvas3DProps {
  children?: React.ReactNode;
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
  showBackgroundScene?: boolean;
}

export const Canvas3D = ( {
  children,
  cameraPosition = [0, -3, 3],
  enableControls = true,
  showBackgroundScene = true
}: Canvas3DProps ) => {
  const isNarrow = useIsMobile( 680 );
  // Slightly pull camera back and widen FOV when narrow to avoid clipping without changing object size
  type CameraConfig = { position: [number, number, number]; fov?: number };
  const camera: CameraConfig = isNarrow
    ? { position: [0, -3.4, 3.9], fov: 66 }
    : { position: cameraPosition, fov: 60 };

  return (
    <div className="absolute inset-0 h-full w-full touch-none">
      <Canvas camera={camera} gl={{ antialias: true, alpha: true }}>
        <fog attach="fog" args={["#F0F8FF", 20, 30]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.9} castShadow />
        <spotLight position={[-5, 0, 5]} angle={0.15} penumbra={1} intensity={0.9} castShadow />
        <Suspense fallback={null}>
          <Environment preset="city" />
          {children}
          {showBackgroundScene && <BackgroundScene />}
        </Suspense>
        {enableControls && <CameraControls />}
      </Canvas>
    </div>
  );
};
