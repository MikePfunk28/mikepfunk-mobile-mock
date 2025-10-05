import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Canvas3D } from "@/components/Canvas3D";
import { Card } from "@/components/ui/card";
import { Text, Float } from "@react-three/drei";

const MnemonicPage = () => {
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
                Mnemonic
              </Text>
            </Float>
          </Canvas3D>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Card className="glass-morph p-6 mb-8">
            <h1 className="text-3xl font-bold mb-4 text-funk-blue text-glow text-center">Mnemonic App</h1>
            <p className="text-funk-grey mb-4">
              Mnemonic is a simple tool to save and help you remember terms you are studying.
              I am going to add advanced AI capabilities to it, allowing you to have it suggest
              the Mnemonic device for your terms, or subject matter.  I built this using AWS SAM
              cli and AWS Amplify, where users authenticate with Cognito User Pools.  From
              there, they can upload their terms and Mnemonic will save them to DynamoDB.
            </p>
            <p className="text-funk-grey">
              With Mnemonic, you can easily create and manage your own mnemonic devices for studying.
              You can quiz yourself on the terms you have saved, and even share your mnemonics with others.
              The app is designed to be simple and intuitive, making it easy for anyone to use.
              Wait for the announcement of the new AI features, and I will keep you updated on the progress.
            </p>
            <a href="https://mnemonic.mikepfunk.com" target="_blank" rel="noopener noreferrer" className="flex text-left mb-2">

              <span className="ml-2 font-bold mb-4 text-fuchsia-500 hover:text-fuchsia-500/80">Visit the app</span>

            </a>
          </Card>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4 py-8">
          <Card className="glass-morph p-6">
            <h2 className="text-xl font-bold mb-4 text-funk-blue">Features</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-funk-white">Create your own Mnemonic Device</h3>
                <p className="text-sm text-funk-grey">Never forget a Mnemonic device again.</p>
              </div>
              <div>
                <h3 className="font-medium text-funk-white">Quiz Yourself</h3>
                <p className="text-sm text-funk-grey">Test your knowledge with quizzes based on your saved terms.</p>
              </div>
              <div>
                <h3 className="font-medium text-funk-white">Practice Mode</h3>
                <p className="text-sm text-funk-grey">Practice mode is how you quiz yourself, show and hide the answers.</p>
              </div>
            </div>

          </Card>
          <Card className="glass-morph p-6">
            <h2 className="text-xl font-bold mb-4 text-funk-blue">AI Limitations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-funk-white">Context Window</h3>
                <p className="text-sm text-funk-grey">Make sure you can fit your data within the context window.</p>
              </div>
              <div>
                <h3 className="font-medium text-funk-white">Built to Create Mnemonic Devices</h3>
                <p className="text-sm text-funk-grey">The model is designed to help you create and manage your own mnemonic devices.</p>
              </div>
              <div>
                <h3 className="font-medium text-funk-white">Currently Text only</h3>
                <p className="text-sm text-funk-grey">The model is limited to text only for now, adding AI is on the roadmap, and will be implemented as soon as possible.</p>
              </div>
            </div>
          </Card>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default MnemonicPage;
