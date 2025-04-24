
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Canvas3D } from "@/components/Canvas3D";
import { Card } from "@/components/ui/card";
import { Text, Float } from "@react-three/drei";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="relative h-[30vh] mb-8">
          <Canvas3D>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
              <Text
                position={[0, 0, -1]}
                color="#33C3F0"
                fontSize={0.8}
                anchorX="center"
                anchorY="middle"
              >
                About Me
              </Text>
            </Float>
          </Canvas3D>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <Card className="glass-morph p-6 mb-8">
            <h1 className="text-3xl font-bold mb-4 text-funk-blue text-glow">Mike Funk</h1>
            <p className="text-funk-grey mb-4">
              Developer, designer, and creator based in Seattle. I build web applications, games, and interactive experiences
              with a focus on user experience and innovative technology solutions.
            </p>
            <p className="text-funk-grey">
              My expertise includes frontend development with React, backend systems with Node.js and AWS, 
              and building interactive applications with modern web technologies.
            </p>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-morph p-6">
              <h2 className="text-xl font-bold mb-4 text-funk-blue">Skills</h2>
              <ul className="space-y-2 text-funk-grey">
                <li>Frontend Development (React, TypeScript)</li>
                <li>Cloud Services (AWS)</li>
                <li>3D Web Development (Three.js)</li>
                <li>UI/UX Design</li>
                <li>Game Development</li>
              </ul>
            </Card>
            
            <Card className="glass-morph p-6">
              <h2 className="text-xl font-bold mb-4 text-funk-blue">Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-funk-white">Senior Developer</h3>
                  <p className="text-sm text-funk-grey">Technology Company • 2020 - Present</p>
                </div>
                <div>
                  <h3 className="font-medium text-funk-white">Web Developer</h3>
                  <p className="text-sm text-funk-grey">Creative Agency • 2017 - 2020</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
