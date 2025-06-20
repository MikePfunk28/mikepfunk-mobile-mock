
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
        <div className="relative h-[50vh] mb-8">
          <Canvas3D>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
              <Text
                position={[0, -1.0, -1]}
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
            <h1 className="text-3xl font-bold mb-4 text-funk-blue text-glow">Michael Pfundt</h1>
            <p className="text-funk-grey mb-4">
              Developer, designer, and creator based in Boston, MA. I build web applications, games, and interactive experiences
              with a focus on user experience and innovative technology solutions.  I built the AWS Cloud Mystery, am working on
              my new project, as well as another game.  I have created, trained, fine-tuned, my own AI models, as well as worked
              with quantitative models, making my own purpose built models, and more.  Early in my career I worked on Bioshock,
              as well as was a gamer growing up, getting my own Nintendo at 5 years old, which just increased my passion for
              development and technology.
            </p>
            <p className="text-funk-grey">
              My expertise includes frontend development with React, backend systems with python, Node.js
              and AWS, and building interactive applications with modern web technologies.  I also have ran
              the support department for a flight tracking software company, where I was in charge of
              customer implementations, to supporting all our customers.  I was the technical lead,
              customer facing, and therefore handled all customer escalations, Sales Engineering, and
              translating customer needs into technical solutions with the Product Management team.
            </p>
          </Card>
          <img src="/fred_and_I-small.png" alt="Fred and I doing what we do best" className="rounded-lg mb-8 w-full max-w-2xl mx-auto" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-morph p-6">
              <h2 className="text-xl font-bold mb-4 text-funk-blue">Skills</h2>
              <ul className="space-y-2 text-funk-grey">
                <li>FullStack Development (React, TypeScript)</li>
                <li>Cloud Services (AWS)</li>
                <li>3D Web Development (Three.js)</li>
                <li>UI/UX Design</li>
                <li>Game Development</li>
              </ul>
            </Card>

            <Card className="glass-morph p-6">
              <h2 className="text-xl font-bold mb-4 text-funk-blue">Certifications</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-funk-white">AWS AI Practitioner</h3>
                  <p className="text-sm text-funk-grey">Early Adopter Certification • 2025</p>
                </div>
                <div>
                  <h3 className="font-medium text-funk-white">AWS Cloud Practitioner</h3>
                  <p className="text-sm text-funk-grey">Certification • Nov 2024</p>
                </div>
                <div>
                  <h3 className="font-medium text-funk-white">Pursuing</h3>
                  <p className="text-sm text-funk-grey">AWS AI/ML Associate • AWS Certified Developer</p>
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
