
import React from 'react';
import { Github, Smartphone, Book } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="glass-morph mt-auto py-4 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-funk-grey">© {new Date().getFullYear()} Mike Funk</p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/mikepfunk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-funk-grey hover:text-funk-blue transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://flashcards.mikepfunk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-funk-grey hover:text-funk-blue transition-colors"
              aria-label="Flashcards"
            >
              <Book size={20} />
            </a>
            <a
              href="https://mikepfunk28.github.io/Quantum-Drift-The-Lost-AWS-Architect/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-funk-grey hover:text-funk-blue transition-colors"
              aria-label="Games"
            >
              <Smartphone size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
