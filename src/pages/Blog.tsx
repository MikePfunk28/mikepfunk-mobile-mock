
import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Canvas3D } from "@/components/Canvas3D";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Text, Float } from "@react-three/drei";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
}

const MOCK_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Changing the AI Configuration",
    excerpt: "Changing the configuration using Ollama Modelfiles to create a custom experience.",
    date: "06/01/2025",
    url: "https://blog.mikepfunk.com/blog/configuring-ai/"
  },
  {
    id: "2",
    title: "Local testing before deploying to AWS or the Cloud",
    excerpt: "Using Localstack, Docker, and Terraform to automate local testing.",
    date: "05/11/2025",
    url: "https://blog.mikepfunk.com/blog/fourth-local/"
  },
  {
    id: "3",
    title: "Building your own Container in Golang and Docker",
    excerpt: "Use GO to create your own docker containers.",
    date: "01/02/2024",
    url: "https://blog.mikepfunk.com/blog/six-docker/"
  }
];

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, we would fetch from API
    const fetchPosts = async () => {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPosts(MOCK_POSTS);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <div className="relative h-[50vh] mb-8">
          <Canvas3D>
            <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
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
                Blog
              </Text>
            </Float>
          </Canvas3D>
        </div>

        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-funk-blue text-glow">Latest Posts</h1>

          {loading ? (
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="relative">
                  <Skeleton className="h-40 w-full bg-funk-blue/10" />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Card key={post.id} className="glass-morph overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center mb-2 text-funk-grey text-sm">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>

                    <h2 className="text-xl font-bold mb-2 text-funk-white">{post.title}</h2>
                    <p className="text-funk-grey mb-4">{post.excerpt}</p>

                    <Button
                      variant="link"
                      className="p-0 text-funk-blue"
                      asChild
                    >
                      <a href={post.url} target="_blank" rel="noopener noreferrer">
                        Read more <ArrowRight size={14} className="ml-1" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
