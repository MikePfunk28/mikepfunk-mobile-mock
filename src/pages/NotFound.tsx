
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Canvas3D } from "@/components/Canvas3D";
import { Text, Float } from "@react-three/drei";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="relative h-[40vh] w-full mb-8">
          <Canvas3D>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
              <Text
                position={[0, 0, -1]}
                color="#33C3F0"
                fontSize={1.2}
                anchorX="center"
                anchorY="middle"
              >
                404
              </Text>
            </Float>
          </Canvas3D>
        </div>
        
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4 text-funk-blue text-glow">Page Not Found</h1>
          <p className="text-xl text-funk-grey mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Button className="bg-funk-blue hover:bg-funk-blue/80" asChild>
            <Link to="/">
              <Home className="mr-2" size={16} />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
