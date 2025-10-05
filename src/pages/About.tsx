
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Canvas3D } from "@/components/Canvas3D";
import { Card } from "@/components/ui/card";
import { Text, Float } from "@react-three/drei";
import { LinkedInBadge } from "@/components/ui/linkedin-badge";

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
                outlineWidth={0.06}
                outlineColor="#66E3FF"
                outlineBlur={0.02}
                strokeWidth={0.015}
                strokeColor="#66E3FF"
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
                <li><b>FullStack Development</b> (React, NextJS, TypeScript)</li>
                <li><b>Cloud Architecture</b>, (IaC, and DevOps CI/CD Pipeline, CRUD)</li>
                <li>
                  <b>Backend/API Development</b> (Node.js, Python, Express, FastAPI)
                  <ol className="list-decimal ml-6 mt-2">
                    <li>(AWS) Serverless, Lambda, API Gateway, Bedrock, DynamoDB</li>
                    <li>(GCP) Big Query, OAuth, Workspace, Gemini, Gemma</li>
                    <li>(Azure) OpenAI, Promptflow, Github Copilot</li>
                    <li>(Cloudflare) Pages, Durable Objects, KV, Workers</li>
                  </ol>
                </li>
                <li><b>Database Management</b> (PostgreSQL, MongoDB, Pinecone)</li>
                <li><b>3D Web Development</b> (ThreeJS, Tailwind CSS, React)</li>
                <li><b>UI/UX Design</b> (ShadCN, Tailwind CSS, JSX)</li>
                <li><b>Machine Learning</b> (Scikit-learn, Keras, TensorFlow, PyTorch)</li>
                <li><b>AI/ML Development</b> (ROC, Vulkan, llama.cpp, LangChain)</li>
              </ul>
            </Card>

            <Card className="glass-morph p-6">
              <h2 className="text-xl font-bold mb-4 text-funk-blue">Certifications</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-funk-white">AWS AI Practitioner</h3>
                  <p className="text-sm text-funk-grey">Early Adopter Certification • 2025</p>
                  <a href="https://www.credly.com/badges/2e373ede-44d9-4aa9-87e9-33c213577c4c/public_url" target="_blank" rel="noopener noreferrer" className="text-funk-blue hover:underline">View Badge</a>
                </div>
                <div>
                  <h3 className="font-medium text-funk-white">AWS Cloud Practitioner</h3>
                  <p className="text-sm text-funk-grey">Certification • Nov 2024</p>
                  <a href="https://www.credly.com/badges/1a7ee221-1301-4d27-aab4-c5729507cfe3/public_url" target="_blank" rel="noopener noreferrer" className="text-funk-blue hover:underline">View Badge</a>
                </div>
                <div>
                  <h3 className="font-medium text-funk-white">Generative AI for Business Leaders</h3>
                  <p className="text-sm text-funk-grey">Certificate of Completion • 2024</p>

                  <a
                    href="/CertificateOfCompletion_Generative AI for Business Leaders.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-funk-blue hover:underline"
                  >View Badge
                  </a>
                </div>
                <div>
                  <h3 className="font-medium text-funk-white">Pursuing</h3>
                  <p className="text-sm text-funk-grey">AWS AI/ML Associate • AWS Certified Developer</p>
                </div>
                <div>
                  <h3 className="font-medium text-funk-white">Models I've Built:</h3>
                  <p className="text-sm text-funk-grey">AI Models and Datasets I maintain</p>
                  <a href="https://ollama.com/mikepfunk28" className="text-funk-blue text-glow hover:underline">Models</a>
                  &nbsp;
                  &nbsp;
                  <a href="MikePfunk28/corporateDatasets" className="text-funk-blue text-glow hover:underline">Datasets</a>
                </div>
              </div>
            </Card>
            <Card className="container mx-auto px-4 py-8 glass-morph p-6">
              <h2 className="text-xl font-bold p-2 mb-3 text-funk-blue">AWS Instructor Cherokee's video:</h2>
              <p className="text-funk-grey p-1 mb-3">
                Cherokee was one of my instructors at AWS Cloud Institute.   I had been building an AWS Learning
                game that you could play and have fun while learning AWS.  She was very impressed an approached me
                about making a video about it, as she thought it was a unique, and innovative way to learn AWS.
              </p>
              <p className="text-funk-grey p-1 mb-2">
                Cherokee can be found on LinkedIn, and this video can attest to my skills and passion for development,
                both on and off the cloud.  She witnessed me start with an epic idea for one person, and bring it to fruition.
              </p>
              <p className="text-sm text-funk-grey p-2 mb-4">See what Cherokee has to say:</p>
              <a
                href="https://www.linkedin.com/posts/cherokeeboose_aws-awscloudinstitute-gamifiedlearning-activity-7341949808527437826-sRbU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAADG1csBe8QajpvS1ppfFoUWN2QFME53HaQ"
                target="_blank"
                rel="noopener noreferrer"

              >
                <div className="rounded shadow-lg relative inline-block px-4 py-8">
                  <img
                    src="/Cherokee552x300.png"
                    alt="Cherokee's LinkedIn post about my AWS Learning Game"
                    className="rounded shadow-lg hover:underline relative inline-block"
                  />
                </div>
              </a>
            </Card>
            <Card className="glass-morph p-6">
              <h2 className="text-xl font-bold mb-4 text-funk-blue">LinkedIn</h2>
              <LinkedInBadge />
              <div className="text-funk-grey pt-8 mb-2">
                <h3 className="text-xl font-bold mb-2 text-funk-blue">References:</h3>
                <p>
                  Other than the video, you can view Cherokee's reference, as well as my other references on my
                  {" "}
                  <a href="https://www.linkedin.com/in/mikepfunk/" target="_blank" rel="noopener noreferrer"><b><i>LinkedIn</i></b></a>
                  {" "}
                  page.
                </p>
              </div>
              <br />
              <p className="text-funk-grey">You can view my other projects, articles I've written, and more on my LinkedIn
                page.  I am always looking for new opportunities to collaborate and create innovative solutions.
                Feel free to reach out if you have any questions or would like to{/*
                */} <a href="https://www.linkedin.com/in/mikepfunk/" target="_blank" rel="noopener noreferrer"><b>connect!</b></a>
              </p>

            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
