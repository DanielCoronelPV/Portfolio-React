import { useEffect, useState } from "react";

export const SectionNav = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: "home", label: "00", delay: "0.1s" },
    { id: "about", label: "01", delay: "0.2s" },
    // { id: "skills", label: "02", delay: "0.3s" },
    { id: "experience", label: "02", delay: "0.3s" },
    { id: "projects", label: "03", delay: "0.4s" },
    { id: "contact", label: "04", delay: "0.5s" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center">
      <div className="flex flex-col items-center gap-3">
        {sections.map((section, index) => {
          const isActive = activeSection === index;
          const isLast = index === sections.length - 1;

          return (
            <div
              key={section.id}
              className="relative flex flex-col items-center"
            >
              {/* Línea arriba SOLO si es el último y está activo */}
              {isLast && isActive && (
                <div
                  className="w-px h-14 bg-primary mb-3 animate-fade-in-right transition-all duration-500 ease-in-out"
                  style={{ animationDelay: "0.6s" }}
                />
              )}

              <a
                href={`#${section.id}`}
                className={`text-xl font-trade animate-fade-in-right transition-all duration-300 ${
                  isActive
                    ? "text-primary scale-110"
                    : "text-muted-foreground hover:text-primary hover:translate-x-1"
                }`}
                style={{ animationDelay: section.delay }}
              >
                {section.label}
              </a>

              {/* Línea abajo para todas menos la última */}
              {!isLast && (
                <div
                  className={`w-px cursor-pointer bg-primary animate-fade-in-right transition-all duration-500 ${
                    isActive ? "h-14 opacity-100 mt-3" : "h-0 opacity-0"
                  }`}
                  style={{ animationDelay: "0.6s" }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
