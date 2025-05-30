
interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  language: string;
  topics: string[];
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  fork: boolean;
  homepage: string | null;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  demo_url?: string;
  language: string;
  tags: string[];
  stars: number;
  created_at: Date;
  updated_at: Date;
}

export class GithubService {
  private static USERNAME = "mikepfunk28"; // Replace with your GitHub username
  private static BASE_URL = "https://api.github.com";

  static async fetchProjects(): Promise<Project[]> {
    try {
      const response = await fetch(
        `${this.BASE_URL}/users/${this.USERNAME}/repos?sort=updated&per_page=100`
      );

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.statusText}`);
      }

      const repos: GithubRepo[] = await response.json();

      // Filter out forked repositories and transform to our Project interface
      return repos
        .filter(repo => !repo.fork && !repo.name.includes('.github.io'))
        .map(repo => ({
          id: repo.id,
          name: repo.name.replace(/-/g, " "),
          description: repo.description || "No description provided",
          url: repo.html_url,
          demo_url: repo.homepage,
          language: repo.language || "Unknown",
          tags: repo.topics || [],
          stars: repo.stargazers_count,
          created_at: new Date(repo.created_at),
          updated_at: new Date(repo.updated_at),
        }));
    } catch (error) {
      console.error("Error fetching GitHub projects:", error);
      return [];
    }
  }
}
