import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "./SectionTitle";

import viviendapro from "@/assets/projects/proj-viviendapro.webp";
import alamweb from "@/assets/projects/proj-almaweb.webp";
import aeroymarina from "@/assets/projects/proj-aeroymarina.webp";
import precisapp from "@/assets/projects/proj-precisapp.webp";

export const Projects = () => {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: t("projects.title-p1"),
      shortDescription: t("projects.shortdescription-p1"),
      description: t("projects.description-p1"),
      tags: [
        t("projects.tag1-p1"),
        t("projects.tag2-p1"),
        t("projects.tag3-p1"),
        t("projects.tag4-p1"),
      ],
      image: viviendapro,
      demoUrl: "https://vivienda.pro/",
      githubUrl: "https://github.com/pedrojcaceresl/vivienda-pro-back",
    },
    {
      title: t("projects.title-p2"),
      shortDescription: t("projects.shortdescription-p2"),
      description: t("projects.description-p2"),
      tags: [
        t("projects.tag1-p2"),
        t("projects.tag2-p2"),
        t("projects.tag3-p2"),
        t("projects.tag4-p2"),
        t("projects.tag5-p2"),
      ],
      image: alamweb,
      demoUrl: "https://drrsystemas.com.ar/",
      githubUrl: "https://github.com/LuisSalvarezza/AlmaWeb",
    },
    {
      title: t("projects.title-p3"),
      shortDescription: t("projects.shortdescription-p3"),
      description: t("projects.description-p3"),
      tags: [
        t("projects.tag1-p3"),
        t("projects.tag2-p3"),
        t("projects.tag3-p3"),
        t("projects.tag4-p3"),
        t("projects.tag5-p3"),
        t("projects.tag6-p3"),
      ],
      image: aeroymarina,
      demoUrl: null,
      githubUrl: null,
    },
    {
      title: t("projects.title-p4"),
      shortDescription: t("projects.shortdescription-p4"),
      description: t("projects.description-p4"),
      tags: [
        t("projects.tag1-p4"),
        t("projects.tag2-p4"),
        t("projects.tag3-p4"),
        t("projects.tag4-p4"),
      ],
      image: precisapp,
      demoUrl: null,
      githubUrl: null,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const center = window.innerHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      projectRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(center - elementCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveProject(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inicializa correctamente al cargar

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container flex w-full justify-center">
        <div className="lg:px-12 max-w-7xl md:px-14 w-full">
          {/* Section Header */}
          <div className="mb-16">
            <div
              className="flex flex-col sm:flex-row w-full justify-start items-start sm:items-center animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="mb-0 text-5xl font-aspire md:text-6xl lg:text-7xl font-bold sm:mb-8 text-foreground">
                {t("projects.title")}
              </h2>
              <SectionTitle>{t("projects.title2")}</SectionTitle>
            </div>
            <h2
              className="text-2xl text-muted-foreground font-trade sm:text-3xl md:text-4xl animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              {t("projects.subtitle")}
            </h2>
          </div>

          {/* Projects Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Scrolling Cards */}
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    projectRefs.current[index] = el;
                  }}
                  className={`group relative rounded-2xl glass-effect overflow-hidden transition-all duration-500 ${
                    activeProject === index
                      ? "ring-2 ring-primary/50 shadow-xl shadow-primary/20"
                      : "opacity-60"
                  }`}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 font-trade">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-enia">
                      {project.shortDescription}
                    </p>

                    {/* Mobile Description */}
                    <div
                      className={`lg:hidden transition-all duration-500 overflow-hidden ${
                        activeProject === index
                          ? "max-h-[500px] mt-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="space-y-4 pt-4 border-t border-primary/20">
                        <p className="text-foreground/90 leading-relaxed text-sm font-enia">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 text-xs rounded-full text-muted-foreground font-enia glass-effect transition-all hover:text-foreground hover:bg-primary/20 hover:-translate-y-0.5 cursor-default"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3 pt-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center text-sm px-4 py-2 rounded-lg bg-background/80 border border-primary/20 font-enia backdrop-blur-sm hover:-translate-y-1 hover:bg-primary/10 transition-all"
                            >
                              GitHub
                            </a>
                          )}

                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center text-sm px-4 py-2 rounded-lg bg-primary text-primary-foreground font-enia hover:-translate-y-1 hover:bg-primary/90 transition-all"
                            >
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Fixed Description Panel */}
            <div className="hidden lg:block lg:sticky lg:top-32">
              <div className="glass-effect rounded-2xl p-8 min-h-[500px]">
                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <h3 className="text-3xl font-bold mb-2 text-gradient font-trade">
                      {projects[activeProject].title}
                    </h3>
                    <p className="text-muted-foreground font-enia">
                      {projects[activeProject].shortDescription}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary font-enia">
                      {t("projects.about", "About this project")}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed font-enia">
                      {projects[activeProject].description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary font-enia">
                      {t("projects.technologies", "Technologies Used")}
                    </h4>
                    <div className="flex flex-wrap gap-2 cursor-default">
                      {projects[activeProject].tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs md:text-sm text-muted-foreground font-enia rounded-full glass-effect transition-all hover:text-foreground hover:bg-primary/20 hover:-translate-y-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    {projects[activeProject].githubUrl && (
                      <a
                        href={projects[activeProject].githubUrl}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-background/80 backdrop-blur-sm hover:-translate-y-1 hover:bg-primary/10 transition-all border border-primary/20"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                        <span className="font-enia">GitHub</span>
                      </a>
                    )}

                    {projects[activeProject].demoUrl && (
                      <a
                        href={projects[activeProject].demoUrl}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary hover:-translate-y-1 text-primary-foreground hover:bg-primary/90 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="font-enia">
                          {t("projects.viewDemo", "View Demo")}
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View More */}
          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 hover:-translate-y-1 transition-all duration-200 font-enia"
              onClick={() =>
                window.open("https://www.github.com/DanielCoronelPV", "_blank")
              }
            >
              {t("projects.viewAll")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
