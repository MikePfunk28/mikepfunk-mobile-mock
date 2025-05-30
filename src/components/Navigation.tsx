
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Folder, Book, Smartphone, Github } from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
  icon: JSX.Element;
}

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation: NavigationItem[] = [
    { name: "Home", href: "/", icon: <Home size={20} /> },
    { name: "About", href: "/about", icon: <User size={20} /> },
    { name: "Databot", href: "/databot", icon: <User size={20} /> },
    { name: "Projects", href: "/projects", icon: <Folder size={20} /> },
    { name: "Blog", href: "/blog", icon: <Book size={20} /> },
    { name: "Games", href: "/games", icon: <Smartphone size={20} /> },
  ];

  return (
    <nav className="fixed w-full z-50">
      <div className="glass-morph px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl text-funk-blue text-glow">MikePFunk</span>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/mikepfunk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-full hover:bg-funk-blue/20 transition-colors"
            >
              <Github size={20} className="text-funk-white" />
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-funk-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="glass-morph mt-1 px-4 py-2 rounded-md mx-2 border border-funk-blue/20">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="flex items-center space-x-2 p-2 rounded-md hover:bg-funk-blue/20 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
