import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Canvas3D } from "@/components/Canvas3D";
import { Card } from "@/components/ui/card";
import { Text, Float } from "@react-three/drei";

const Imagine_Engine = () => {
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
                outlineWidth={0.06}
                outlineColor="#66E3FF"
                outlineBlur={0.02}
                strokeWidth={0.02}
                strokeColor="#66E3FF"
              >
                Imagine Engine
              </Text>
            </Float>
          </Canvas3D>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Card className="glass-morph p-6 mb-8">
            <h1 className="text-3xl font-bold mb-4 text-funk-blue text-glow text-center">Imagine Engine</h1>
            <p className="text-funk-grey mb-4">
              Imagine Engine is an open-ended adventure game where you can go in
              any direction and make your own story. Create your own classes,
              play as a pre-built class, or mix and match to shape your adventure.
            </p>
            <p className="text-funk-grey">
              Imagine Engine is still in progress. New content and choices are
              being added as development continues.
            </p>
            <br />
            <a href="https://imagine-engine.mikepfunk.com" target="_blank" rel="noopener noreferrer" className="flex text-left mb-2">

              <span className="ml-2 font-bold mb-4 text-fuchsia-500 hover:text-fuchsia-500/80">Open Imagine Engine</span>

            </a>
          </Card>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4 py-8">
          <Card className="glass-morph p-6">
            <h2 className="text-xl font-bold mb-4 text-funk-blue">Features</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-funk-white">Open-Ended Stories</h3>
                <p className="text-sm text-funk-grey">Choose your direction and create a story through your decisions.</p>
              </div>
              <div>
                <h3 className="font-medium text-funk-white">Custom Classes</h3>
                <p className="text-sm text-funk-grey">Create a class that fits the character you want to play.</p>
              </div>
              <div>
                <h3 className="font-medium text-funk-white">Flexible Builds</h3>
                <p className="text-sm text-funk-grey">Start with a pre-built class or combine classes to make your own build.</p>
              </div>
            </div>

          </Card>
          <Card className="glass-morph p-6">
            <h2 className="text-xl font-bold mb-4 text-funk-blue">In Development</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-funk-white">More Adventures</h3>
                <p className="text-sm text-funk-grey">New places, choices, and stories are planned for future updates.</p>
              </div>
              <div>
                <h3 className="font-medium text-funk-white">More Class Options</h3>
                <p className="text-sm text-funk-grey">Additional ways to customize characters are in progress.</p>
              </div>
              <div>
                <h3 className="font-medium text-funk-white">Expanded Choices</h3>
                <p className="text-sm text-funk-grey">More paths and outcomes will deepen each adventure.</p>
              </div>
              <div>
                <h3 className="font-medium text-funk-white">Ongoing Updates</h3>
                <p className="text-sm text-funk-grey">The game will continue to grow as new ideas are built.</p>
              </div>
            </div>
          </Card>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Imagine_Engine;
