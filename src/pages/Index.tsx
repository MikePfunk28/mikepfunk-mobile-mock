
import { useState, useEffect } from "react";
import { Canvas3D } from "@/components/Canvas3D";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { Text, Float } from "@react-three/drei";

const HomePage = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading resources
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow flex flex-col">
        <div className="relative flex-grow">
          <Canvas3D>
            <HomeScene navigate={navigate} />
          </Canvas3D>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`text-center transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-funk-white text-glow">
                MikePFunk
              </h1>
              <p className="text-xl mb-6 text-funk-grey">
                Developer | Cloud Development
              </p>
              <div className="pointer-events-auto">
                <Button
                  className="bg-funk-blue hover:bg-funk-blue/80 text-white"
                  onClick={() => navigate('/projects')}
                >
                  View Projects <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const HomeScene = ({ navigate }: { navigate: (path: string) => void }) => {
  return (
    <>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Text
          position={[0, 1.5, -1]}
          color="#33C3F0"
          fontSize={0.5}
          font="/fonts/Inter-Bold.woff"
          anchorX="center"
          anchorY="middle"
        >
          Welcome
        </Text>
      </Float>

      <mesh position={[0, 0, -2]} onClick={() => navigate('/projects')}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#33C3F0"
          metalness={0.5}
          roughness={0.2}
          emissive="#33C3F0"
          emissiveIntensity={0.2}
        />
      </mesh>
    </>
  );
};

export default HomePage;
