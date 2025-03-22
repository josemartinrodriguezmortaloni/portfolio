"use client";

import { useEffect, useState, useRef } from "react";

export default function Nav() {
  const [activeSection, setActiveSection] = useState("about");
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
    // Establecer inmediatamente la sección activa
    setActiveSection(id);

    // Marcar que acabamos de hacer clic para evitar que el evento de scroll interfiera
    clickedRef.current = true;

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // offset para que no quede justo debajo de la navbar
        behavior: "smooth",
      });

      // Permitir que el evento de scroll vuelva a funcionar después de que termine la animación
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        clickedRef.current = false;
      }, 1000); // tiempo suficiente para la animación de scroll
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-10 backdrop-blur-md backdrop-filter rounded-full px-6 py-1">
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
    </nav>
  );
}
