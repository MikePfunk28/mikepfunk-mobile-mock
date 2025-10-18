import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Canvas3D } from "@/components/Canvas3D";
import { Card } from "@/components/ui/card";
import { Text, Float } from "@react-three/drei";

const AI_Forge = () => {
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
                Ai-Hub
              </Text>
            </Float>
          </Canvas3D>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Card className="glass-morph p-6 mb-8">
            <h1 className="text-3xl font-bold mb-4 text-funk-blue text-glow text-center">AI-Hub</h1>
            <p className="text-funk-grey mb-4">
              AI-Forge is an agent builder you can use to customize your
              own AI Agents.  Build agents that can perform specific tasks,
              connect to various APIs, and even communicate with other agents.
              The possibilities are endless!  We built an agent decorator that
              enables you to setup queries, or install packages before running
              the agent builder, or setup post process Observability.  The agent
              decorator makes it easy for your agents to then create other agents,
              to accomplish more challenging tasks.
            </p>
            <p className="text-funk-grey">
              With AI-Forge, you can easily create and manage your
              own prompts, curate and store knowledge bases for various
              tasks. You can also save and categorize research papers
              or articles for future reference. The app is designed to
              I am actively developing this app, and adding new features
              all the time.  Check back often for updates!
            </p>
            <br />
            <a href="https://ai-forge.mikepfunk.com" target="_blank" rel="noopener noreferrer" className="flex text-left mb-2">

              <span className="ml-2 font-bold mb-4 text-fuchsia-500 hover:text-fuchsia-500/80">Check Out AI-Forge</span>

            </a>
          </Card>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4 py-8">
          <Card className="glass-morph p-6">
            <h2 className="text-xl font-bold mb-4 text-funk-blue">Features</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-funk-white">Prompt Engineering</h3>
                <p className="text-sm text-funk-grey">Create and keep track of the different prompt, and their effectiveness.</p>
              </div>
              <div>
                <h3 className="font-medium text-funk-white">Knowledge Bases</h3>
                <p className="text-sm text-funk-grey">Track knowledge bases for projects from one area.</p>
              </div>
              <div>
                <h3 className="font-medium text-funk-white">Research and Articles</h3>
                <p className="text-sm text-funk-grey">Easily save and categorize research papers or articles for future reference.</p>
              </div>
            </div>

          </Card>
          <Card className="glass-morph p-6">
            <h2 className="text-xl font-bold mb-4 text-funk-blue">Future Features</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-funk-white">Workflow Builder</h3>
                <p className="text-sm text-funk-grey">Chain prompts, build out workflows with ease.</p>
              </div>
              <div>
                <h3 className="font-medium text-funk-white">Customize and create Agents</h3>
                <p className="text-sm text-funk-grey">The model is designed to help you create and manage your own agents.</p>
              </div>
              <div>
                <h3 className="font-medium text-funk-white">MCP/A2A</h3>
                <p className="text-sm text-funk-grey">Use MCP and A2A protocols for communication and tool calling.
                  Build your own agents and turn them into powerful MCP servers.</p>
              </div>
              <div>
                <h3 className="font-medium text-funk-white">Turn Research into Agents</h3>
                <p className="text-sm text-funk-grey">Take the research paper, and use that to create that workflow, creating
                  agents on the fly.</p>
              </div>
            </div>
          </Card>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default AI_Forge;
