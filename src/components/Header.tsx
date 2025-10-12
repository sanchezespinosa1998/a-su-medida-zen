import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Resolución de dudas", path: "/dudas" },
    { name: "Sobre mí", path: "/sobre-mi" },
    { name: "Vídeos", path: "/videos" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-8 left-0 right-0 z-50 w-full pointer-events-none">
      <nav className="flex justify-center px-4 sm:px-6 lg:px-8 pointer-events-auto">
        <div className="flex h-16 items-center justify-between bg-background/95 border border-border rounded-2xl shadow-soft px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 pr-6">
            <span className="font-display text-xl font-bold text-primary">
              A SU MEDIDA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive(link.path)
                  ? "text-primary bg-accent"
                  : "text-foreground hover:text-primary hover:bg-accent/50"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="ml-4">
              <a
                href="https://wa.me/34693054790"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserva ahora
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive(link.path)
                    ? "text-primary bg-accent"
                    : "text-foreground hover:text-primary hover:bg-accent/50"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <a
                  href="https://wa.me/34693054790"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reserva ahora
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
