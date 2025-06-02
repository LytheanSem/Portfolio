import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-mono text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-foreground">
                Lythean Sem's<span className="text-primary"> Portfolio</span>
              </span>
            </span>
          </a>

          {/* desktop version */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-mono"
              >
                {`// ${item.name.toLowerCase()}`}
              </a>
            ))}
          </div>

          {/* mobile version */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay - outside nav, covers full viewport */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-background/95 backdrop-blur-lg flex flex-col">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-foreground"
            aria-label="Close Menu"
          >
            <X size={32} />
          </button>
          <nav className="flex-1 flex flex-col items-center justify-center overflow-y-auto">
            <div className="flex flex-col space-y-8 text-2xl w-full max-w-xs mx-auto">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-mono text-center py-2 rounded-lg focus:bg-primary/10 focus:outline-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {`// ${item.name.toLowerCase()}`}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
