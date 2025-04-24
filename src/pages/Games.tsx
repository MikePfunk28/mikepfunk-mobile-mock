
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Canvas3D } from "@/components/Canvas3D";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, ExternalLink } from "lucide-react";
import { Text } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import * as THREE from "three";

const GamesPage = () => {
  const navigate = useNavigate();

  const games = [
    {
      id: "aws-mystery",
      title: "AWS Cloud Mystery",
      description: "Solve the mysteries of AWS cloud services in this interactive adventure game.",
      url: "https://mikepfunk.com/games/aws-cloud-mystery"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="relative h-[40vh] mb-8">
          <Canvas3D>
            <GameScene />
          </Canvas3D>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-funk-blue text-glow">Games</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {games.map((game) => (
              <Card key={game.id} className="glass-morph overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <Smartphone className="mr-2 text-funk-blue" size={24} />
                    <h2 className="text-xl font-bold text-funk-white">{game.title}</h2>
                  </div>
                  
                  <p className="text-funk-grey mb-4">{game.description}</p>
                  
                  <Button 
                    className="bg-funk-blue hover:bg-funk-blue/80" 
                    asChild
                  >
                    <a href={game.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Play Game
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const GameScene = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <>
      <Text
        position={[0, 1, -2]}
        color="#33C3F0"
        fontSize={0.6}
        anchorX="center"
        anchorY="middle"
      >
        Games
      </Text>
      
      <mesh position={[0, -0.5, -2]} ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#33C3F0"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </>
  );
};

export default GamesPage;
