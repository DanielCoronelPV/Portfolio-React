import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { ContactModal } from "@/components/ContactModal";

export const Navigation = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["about", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 150;

      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection); // 👈 Si no encuentra nada, queda ""
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("nav.about"), href: "#about", delay: "0.2s" },
    // { label: t("nav.skills"), href: "#skills", delay: "0.3s" },
    { label: t("nav.experience"), href: "#experience", delay: "0.4s" },
    { label: t("nav.projects"), href: "#projects", delay: "0.5s" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      <nav
        className={`fixed border-none top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-b from-bg-blur to-bg-transparent"
            : "bg-transparent"
        }`}
      >
        <div className="container max-w-7xl px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex-shrink-0 hover:translate-y-1 relative bg-transparent transition-all flex items-center justify-center"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div
                className="absolute dark:h-10 dark:w-10 h-16 w-16 rounded-full 
      bg-primary/70 blur-xl 
      -z-10 
      top-1/2 left-1/2 
      transform -translate-x-1/2 -translate-y-1/2"
              ></div>
              <motion.img
                layoutId="main-logo"
                src="/logo.png"
                alt="Logo"
                className="h-10 w-auto bg-transparent"
              />
            </a>

            {/* Centered Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 glass-effect px-6 py-2 rounded-full">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-all animate-fade-in-down relative"
                    style={{ animationDelay: item.delay }}
                  >
                    <div className="hover:translate-y-1 transition-all ease-in-out font-enia">
                      {item.label}
                    </div>
                    {isActive && (
                      <span className="absolute -bottom-[0.5px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-scale-in" />
                    )}
                  </button>
                );
              })}
              <Button
                size="sm"
                className="bg-primary/10 hover:bg-primary/20 hover:translate-y-1 animate-fade-in-down transition-all text-foreground border border-border/50 ml-2 font-enia"
                onClick={() => setIsModalOpen(true)}
                style={{ animationDelay: "0.6s" }}
              >
                {t("nav.bookCall")}
              </Button>
            </div>

            {/* Right Side - Theme & Language Toggles */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg glass-effect animate-fade-in-down hover:translate-y-1 hover:bg-accent/10 transition-all"
                style={{ animationDelay: "0.7s" }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg w-full flex flex-row animate-fade-in-down glass-effect hover:translate-y-1 hover:bg-accent/10 transition-all"
                style={{ animationDelay: "0.8s" }}
                aria-label="Toggle language"
              >
                <Languages className="w-5 h-5" />
                <span className="ml-1 text-xs font-medium font-enia">
                  {i18n.language.toUpperCase()}
                </span>
              </button>
              <button
                className="p-2 rounded-lg md:hidden animate-fade-in-down hover:translate-y-1 hover:bg-accent/10 transition-all"
                style={{ animationDelay: "0.9s" }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Right Side - Theme, Language & Menu */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg glass-effect animate-fade-in-down hover:translate-y-1 hover:bg-accent/10 transition-all"
                style={{ animationDelay: "0.2s" }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg glass-effect animate-fade-in-down hover:translate-y-1 hover:bg-accent/10 transition-all flex items-center gap-1"
                style={{ animationDelay: "0.3s" }}
                aria-label="Toggle language"
              >
                <Languages className="w-5 h-5" />
                <span className="text-xs font-medium font-enia">
                  {i18n.language.toUpperCase()}
                </span>
              </button>
              <button
                className="p-2 rounded-lg animate-fade-in-down hover:bg-accent/10 hover:translate-y-1 transition-all ease-in-out glass-effect"
                style={{ animationDelay: "0.4s" }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed animate-fade-in-down-menu transition-all inset-0 z-40 md:hidden"
          style={{ animationDelay: "0.02s" }}
        >
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 p-4">
            <div className="glass-effect rounded-2xl p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-foreground hover:translate-y-1 hover:bg-primary/10 transition-all font-enia"
                >
                  {item.label}
                </button>
              ))}
              <Button
                size="sm"
                className="w-full bg-primary hover:translate-y-1 hover:bg-primary/90 transition-all text-primary-foreground font-enia"
                onClick={() => scrollToSection("#contact")}
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
