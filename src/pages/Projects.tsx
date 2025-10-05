import { useState, useEffect, Suspense } from "react";
import { Canvas3D } from "@/components/Canvas3D";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Project, GithubService } from "@/services/GithubService";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Project categorization helper - EXACT specifications from user
const categorizeProject = (project: Project): 'AI' | 'Games' | 'Leetcode' | 'Professional' => {
  const name = project.name.toLowerCase().replace(/[-_]/g, ' ');
    // AI: LocalLearningModel, aicoder, senator truth grapher, ai recipe generator, model fine tuning, databot, mnemonic, MemoryMaster + generic AI terms
  if (name.includes('locallearningmodel') || name.includes('local learning model') ||
      name.includes('aicoder') || name.includes('senator truth graph') || name.includes('senator truth grapher') ||
      name.includes('ai recipe generator') || name.includes('model fine tuning') || name.includes('fine tuning') ||
      name.includes('databot') || name.includes('mnemonic') || name.includes('memorymaster') ||
      name.includes('memory master') || name.includes('flashcard') || name.includes('aiderai') ||
      name.includes('holy wildflower') || name.includes('holy-wildflower') ||
      name.includes('ai') || name.includes('gpt') || name.includes('bot') || name.includes('neural') ||
      name.includes('ml') || name.includes('machine learning') || name.includes('hugging face')) {
    return 'AI';
  }

  // LeetCode/Learning: leetcode, advent of code, py4e, cs50, linkedin article, local stack, cs50 python, hello
  if (name.includes('leetcode') || name.includes('advent of code') || name.includes('py4e') ||
      name.includes('cs50') || name.includes('linkedin article') || name.includes('localstack') ||
      name.includes('local stack') || name.includes('cs50 python') || name.includes('hello')) {
    return 'Leetcode';
  }  // Games: quantum drift (top - has demo), neon shadow, myfirstgame, satellite, a breeze in the wind, not in my cloud, keep going 2, keep going, mikepfunk games
  if (name.includes('quantum drift') || name.includes('neon shadow') || name.includes('myfirstgame') ||
      name.includes('satellite') || name.includes('a breeze in the wind') || name.includes('not in my cloud') ||
      name.includes('keep going 2') || name.includes('keep going') || name.includes('mikepfunk games')) {
    return 'Games';
  }

  // Professional: Everything else
  return 'Professional';
};

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
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
  // Categorize projects
  const categorizedProjects = {
    AI: projects.filter(p => categorizeProject(p) === 'AI'),
    Games: projects.filter(p => categorizeProject(p) === 'Games'),
    Leetcode: projects.filter(p => categorizeProject(p) === 'Leetcode'),
    Professional: projects.filter(p => categorizeProject(p) === 'Professional')
  };  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />      {/* Three.js Canvas with key projects - larger size */}
      <div className="relative h-[50vh]">
        <Canvas3D>
          <Suspense fallback={null}>
            {/* You'll add the key projects in Canvas3D.tsx: databot, linkedin, mnemonic, quantum drift, flashcards, github */}
          </Suspense>
        </Canvas3D>
      </div>

      {/* Categories section BELOW the Canvas3D */}
      <main className="flex-grow flex flex-col">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-funk-blue text-glow text-center">Project Categories</h2>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-funk-blue">Loading projects...</div>
            </div>
          ) : (            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6 h-auto">
                <TabsTrigger value="all" className="text-xs sm:text-sm p-2 sm:p-3">All ({projects.length})</TabsTrigger>
                <TabsTrigger value="ai" className="text-xs sm:text-sm p-2 sm:p-3">AI ({categorizedProjects.AI.length})</TabsTrigger>
                <TabsTrigger value="games" className="text-xs sm:text-sm p-2 sm:p-3">Games ({categorizedProjects.Games.length})</TabsTrigger>
                <TabsTrigger value="leetcode" className="text-xs sm:text-sm p-2 sm:p-3">Learning ({categorizedProjects.Leetcode.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                  {projects.map((project) => (
                    <CompactProjectCard key={project.id} project={project} category={categorizeProject(project)} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ai">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                  {categorizedProjects.AI.map((project) => (
                    <CompactProjectCard key={project.id} project={project} category="AI" />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="games">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                  {categorizedProjects.Games.map((project) => (
                    <CompactProjectCard key={project.id} project={project} category="Games" />
                  ))}
                </div>
              </TabsContent>              <TabsContent value="leetcode">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                  {categorizedProjects.Leetcode.map((project) => (
                    <CompactProjectCard key={project.id} project={project} category="LeetCode/Learning" />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Compact Project Card Component for categories section
const CompactProjectCard = ({ project, category }: { project: Project; category: string }) => {  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'AI': return 'bg-purple-500/20 text-purple-300';
      case 'Games': return 'bg-green-500/20 text-green-300';
      case 'Leetcode': return 'bg-orange-500/20 text-orange-300';
      case 'Professional': return 'bg-blue-500/20 text-blue-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <Card className="glass-morph overflow-hidden h-48 flex flex-col">
      <div className="p-3 flex flex-col h-full">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-sm font-bold text-funk-blue line-clamp-2 flex-1 mr-2">
            {project.name}
          </h3>
          <Badge className={`text-xs px-2 py-1 ${getCategoryColor(category)}`}>
            {category}
          </Badge>
        </div>

        <p className="text-funk-grey text-xs mb-3 line-clamp-3 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.language && (
            <span className="text-xs bg-funk-blue/20 text-funk-blue px-2 py-1 rounded-full">
              {project.language}
            </span>
          )}
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs bg-funk-dark/50 text-funk-grey px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2 mt-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(project.url, '_blank')}
            className="text-xs flex-1 h-7"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            Code
          </Button>
          {project.demo_url && (
            <Button
              variant="default"
              size="sm"
              onClick={() => window.open(project.demo_url, '_blank')}
              className="text-xs flex-1 h-7"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectsPage;
