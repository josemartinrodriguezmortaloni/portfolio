"use client";

import { useEffect, useState, useRef } from "react";
import { Menu } from "lucide-react";

export default function Nav() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const clickedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detectar sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      // Si acabamos de hacer clic, no procesamos el evento de scroll
      if (clickedRef.current) return;

      const sections = [
        "about",
        "projects",
        "experience",
        "recognition",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100; // offset para mejor detección

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Ejecutar una vez para establecer la sección inicial
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Recognition", id: "recognition" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setActiveSection(id);
    setIsMenuOpen(false);
    clickedRef.current = true;

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        clickedRef.current = false;
      }, 1000);
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-auto">
      {/* Desktop Navigation */}
      <div className="hidden md:flex backdrop-blur-md backdrop-filter rounded-full px-6 py-1">
        <div className="flex items-center justify-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`group relative text-gray-900 transition-all duration-300 py-2 px-1 ${
                activeSection === item.id
                  ? "font-medium text-primary"
                  : "hover:text-primary"
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 transform transition-transform duration-300 ease-in-out ${
                  activeSection === item.id
                    ? "bg-primary scale-x-100"
                    : "bg-gray-300 scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-full backdrop-blur-md backdrop-filter"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-lg backdrop-blur-md backdrop-filter shadow-lg">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`py-2 px-4 rounded-md transition-colors ${
                    activeSection === item.id
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
