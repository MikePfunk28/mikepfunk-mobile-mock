import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Canvas3D } from "@/components/Canvas3D";
import { Card } from "@/components/ui/card";
import { Text, Float } from "@react-three/drei";

const DatabotPage = () => {
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
                Databot
              </Text>
            </Float>
          </Canvas3D>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Card className="glass-morph p-6 mb-8">
            <h1 className="text-3xl font-bold mb-4 text-funk-blue text-glow">Databot</h1>
            <p className="text-funk-grey mb-4">
              Databot is an AI-powered data analysis tool that helps you make sense of your data quickly and easily.
              It uses advanced machine learning algorithms to analyze your data and provide insights that can help you
              make better decisions.  Instead of having an engineer come up with complex SQL queries, or having to probe
              your data for insights, you can just ask it for insights.  Use plain text to get insights on your data,
              instead of having to write SQL queries or complex code.  Databot is designed to be user-friendly
              and accessible to everyone, regardless of their technical background.
            </p>
            <p className="text-funk-grey">
              With Databot, you can upload your data in various formats, including CSV, JSON, and Excel, and get instant
              insights into your data. Whether you're a business owner looking to optimize your operations or a researcher
              trying to uncover patterns in your data, Databot has you covered.  With Databot you are able to take your
              data off the cloud and save costs, while not sacrificing the insights that data could provide.
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DatabotPage;
