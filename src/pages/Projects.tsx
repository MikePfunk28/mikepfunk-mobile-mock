
import { useState, useEffect, Suspense } from "react";
import { Canvas3D, ProjectCard } from "@/components/Canvas3D";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Project, GithubService } from "@/services/GithubService";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await GithubService.fetchProjects();
        setProjects(fetchedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
        toast({
          title: "Error loading projects",
          description: "Could not load GitHub projects. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow flex flex-col">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-funk-blue text-glow">Projects</h1>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="relative h-40">
                  <Skeleton className="absolute inset-0 bg-funk-blue/10" />
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="relative h-[50vh] mb-8 rounded-lg overflow-hidden border border-funk-blue/20">
                <Canvas3D>
                  <Suspense fallback={null}>
                    {projects.slice(0, 9).map((project, index) => {
                      // Arrange projects in a 3x3 grid in 3D space
                      const row = Math.floor(index / 3);
                      const col = index % 3;
                      const x = (col - 1) * 2;
                      const y = (1 - row) * 1.2;
                      
                      return (
                        <ProjectCard 
                          key={project.id} 
                          project={project} 
                          position={[x, y, -2]}
                          onClick={() => setSelectedProject(project)} 
                        />
                      );
                    })}
                  </Suspense>
                </Canvas3D>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <Card key={project.id} className="glass-morph overflow-hidden">
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2 text-funk-blue">{project.name}</h3>
                      <p className="text-funk-grey text-sm mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.language && (
                          <span className="text-xs bg-funk-blue/20 text-funk-blue px-2 py-1 rounded-full">
                            {project.language}
                          </span>
                        )}
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs bg-funk-dark/50 text-funk-grey px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-funk-grey">
                          Updated: {new Date(project.updated_at).toLocaleDateString()}
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-1 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                          
                          {project.demo_url && (
                            <Button size="sm" className="bg-funk-blue hover:bg-funk-blue/80" asChild>
                              <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-1 h-4 w-4" />
                                Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
