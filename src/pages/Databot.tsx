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
                Databot
              </Text>
            </Float>
          </Canvas3D>
        </div>
        <table className="w-full text-left table-auto border-collapse border border-funk-blue/20">
          <thead>
            <tr>
              <th className="border border-funk-blue/20 px-4 py-2">Capability</th>
              <th className="border border-funk-blue/20 px-4 py-2">How it Works</th>
              <th className="border border-funk-blue/20 px-4 py-2">Benefit</th>
            </tr>
            <tr>
              <td className="border border-funk-blue/20 px-4 py-2"><strong>Multi-source ingestion</strong></td>
              <td className="border border-funk-blue/20 px-4 py-2">Connects to databases, cloud object stores, SaaS exports, and spreadsheets.</td>
              <td className="border border-funk-blue/20 px-4 py-2"> SaaS exports, and spreadsheets.	One unified knowledge layer instead of silos.</td>
            </tr>
            <tr>
              <td className="border border-funk-blue/20 px-4 py-2"><strong>Adaptive encoding</strong></td>
              <td className="border border-funk-blue/20 px-4 py-2">	Chooses between high-dimensional vectors (for rich semantics) and lightweight cryptographic hashes (for rapid exact matches).</td>
              <td className="border border-funk-blue/20 px-4 py-2">Balances accuracy, speed, and storage cost automatically.</td>
            </tr>
            <tr>
              <td className="border border-funk-blue/20 px-4 py-2"><strong>Contextual summarization</strong></td>
              <td className="border border-funk-blue/20 px-4 py-2">Generates concise, source-linked digests before storing.</td>
              <td className="border border-funk-blue/20 px-4 py-2">Cuts noise, reduces token usage, improves retrieval.</td>
            </tr>
            <tr>
              <td className="border border-funk-blue/20 px-4 py-2"><strong>Natural-language Q&A</strong></td>
              <td className="border border-funk-blue/20 px-4 py-2">A retrieval-augmented LLM matches questions to relevant chunks, reasons over them, and answers in everyday language.</td>
              <td className="border border-funk-blue/20 px-4 py-2">Analysts get insights without writing queries.</td>
            </tr>
            <tr>
              <td className="border border-funk-blue/20 px-4 py-2"><strong>Decision support</strong></td>
              <td className="border border-funk-blue/20 px-4 py-2">Surfaces key drivers, anomalies, and “what-if” projections using built-in ML models.</td>
              <td className="border border-funk-blue/20 px-4 py-2">Faster, data-backed decisions.
              </td>
            </tr>
          </thead>
        </table>

        <div className="container mx-auto px-4 py-8">
          <Card className="glass-morph p-6 mb-8">
            <h1 className="text-3xl font-bold mb-4 text-funk-blue text-glow">Databot</h1>
            <p className="text-funk-grey mb-4">
              Databot is an AI-powered data analysis tool that helps you make
              sense of your data quickly and easily.
              Databot has been trained on corporate data, and is capable of
              aggregating multiple sources together, to give you better insight.
              Databot makes use of advanced machine learning algorithms to
              analyze your data and provide insights that can help you make
              better decisions.

              Instead of having an engineer come up with complex SQL queries,
              or having to probe your data for insights, you can just ask it
              for insights.  Use plain text to get insights on your data,
              instead of having to write SQL queries or complex code.  Databot
              is designed to be user-friendly and accessible to everyone,
              regardless of their technical background.
            </p>
            <p className="text-funk-grey">
              With Databot, you can upload your data in various formats,
              including CSV, JSON, and Excel, and get instant insights
              into your data. Whether you're a business owner looking
              to optimize your operations or a researcher trying to
              uncover patterns in your data, Databot has you covered.
              With Databot you are able to take your data off the cloud
              and save costs, while not sacrificing the insights that
              data could provide.
            </p>
          </Card>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4 py-8">
        <Card className="glass-morph p-6">
              <h2 className="text-xl font-bold mb-4 text-funk-blue">Features</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-funk-white">Embeds your data for easy lookup</h3>
                  <p className="text-sm text-funk-grey">Embeds your data and knows advanced business metrics to provide insights, and embed the results for you.</p>
                </div>
                <div>
                  <h3 className="font-medium text-funk-white">Can run locally</h3>
                  <p className="text-sm text-funk-grey">Small model can easily run on your local machine.</p>
                </div>
                <div>
                  <h3 className="font-medium text-funk-white">Integrates with your app</h3>
                  <p className="text-sm text-funk-grey">Small enough to be embedded into your application or website.</p>
                </div>
              </div>

            </Card>
            <Card className="glass-morph p-6">
              <h2 className="text-xl font-bold mb-4 text-funk-blue">Limitations</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-funk-white">Context Window</h3>
                  <p className="text-sm text-funk-grey">Make sure you can fit your data within the context window.</p>
                </div>
                <div>
                  <h3 className="font-medium text-funk-white">Built for Analysis</h3>
                  <p className="text-sm text-funk-grey">The model is made to analyze data, and translate that into actionable insights.</p>
                </div>
                <div>
                  <h3 className="font-medium text-funk-white">Currently Text only</h3>
                  <p className="text-sm text-funk-grey">The model is limited to text only for now, voice is on the roadmap, and will be implemented as soon as possible.</p>
                </div>
              </div>
            </Card>
          </div>

      </main>

      <Footer />
    </div>
  );
};

export default DatabotPage;
