import { useState, useEffect } from "react";
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

  // Cerrar el menú cuando se cambia de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Cerrar el menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Prevenir el scroll del body cuando el menú está abierto en móvil
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Overlay cuando el menú está abierto */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <header className="fixed top-8 left-0 right-0 z-50 w-full pointer-events-none">
        <nav className="flex justify-center px-4 sm:px-6 lg:px-8 pointer-events-auto">
          <div className="flex flex-col items-center">
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
              <div className="md:hidden mt-2 bg-white/95 backdrop-blur-md border border-border rounded-2xl shadow-soft animate-in slide-in-from-top-2 duration-200">
                <div className="flex flex-col space-y-1 p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive(link.path)
                        ? "text-primary bg-accent"
                        : "text-foreground hover:text-primary hover:bg-accent/50"
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-2">
                    <Button asChild className="w-full">
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
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
