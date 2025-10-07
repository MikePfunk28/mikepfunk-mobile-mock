
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Home, User, Folder, Book, Smartphone, ChevronDown } from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
  icon: JSX.Element;
}

export const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navigation: NavigationItem[] = [
    { name: "Home", href: "/", icon: <Home size={14} /> },
    { name: "About", href: "/about", icon: <User size={14} /> },
    { name: "Projects", href: "/projects", icon: <Folder size={14} /> },
    { name: "Blog", href: "/blog", icon: <Book size={14} /> },
    { name: "Mnemonic", href: "/mnemonic", icon: <User size={14} /> },

    { name: "Ai_Hub", href: "/Ai_Hub", icon: <User size={14} /> },
    { name: "Databot", href: "/databot", icon: <User size={14} /> },
    { name: "Games", href: "/games", icon: <Smartphone size={14} /> },
  ];

  return (
    <nav className="fixed w-full z-50">
      {/* Title Bar */}
      <div className="glass-morph px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-black text-xl text-funk-blue text-glow-strong">MikePFunk</span>
          </div>          <div className="flex items-center space-x-2 responsive-icons">
            <a
              href="https://github.com/mikepfunk28"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit GitHub Profile"
              className="p-1 rounded-full hover:bg-funk-blue/20 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-funk-white">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>      {/* Hover Menu Section */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Menu Indicator Bar */}
        <div className="glass-morph mt-1 px-4 py-2 mx-2 rounded-md border border-funk-blue/20 cursor-pointer">
          <div className="flex items-center justify-center space-x-2 text-funk-white responsive-icons">
            <Menu size={16} />
            <span className="text-sm">Menu</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${isHovered ? 'rotate-180' : ''}`}
            />
          </div>
        </div>

        {/* Dropdown Menu */}
        {isHovered && (
          <div className="glass-morph mt-1 px-4 py-2 rounded-md mx-2 border border-funk-blue/20">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-funk-blue/20 transition-colors text-funk-white responsive-icons"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
