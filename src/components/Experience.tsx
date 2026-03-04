import { Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { AnimatedCubeBackground } from "./AnimatedCubeBackground";
import { useTranslation } from "react-i18next";

import drrSystemas from "@/assets/experiences/exp-drrsystemas.webp";
import cowatercraft from "@/assets/experiences/exp-cowatercraft.webp";
import paraqvaria from "@/assets/experiences/exp-paraqvaria.webp";

export const Experience = () => {
  const { t } = useTranslation();

  const timelineRef = useRef<HTMLDivElement>(null);
  const [circlePosition, setCirclePosition] = useState(0);
  const experiences = [
    {
      role: t("experience.head1"),
      img: "/logo.png",
      company: "Lic. Daniel Coronel",
      url: "https://www.linkedin.com/in/dani-coro",
      period: "2026",
      technologies: ["React", "TypeScript", "Next", "Motion"],
      description: t("experience.description1"),
      achievements: [
        t("experience.achievement1-1"),
        t("experience.achievement1-2"),
        t("experience.achievement1-3"),
        t("experience.achievement1-4"),
        t("experience.achievement1-5"),
      ],
    },
    {
      role: t("experience.head2"),
      img: drrSystemas,
      company: "DRR Systemas",
      url: "https://drrsystemas.github.io/drr-page/",
      period: "2025 - Present",
      technologies: ["C#", ".Net", "Blazor"],
      description: t("experience.description2"),
      achievements: [
        t("experience.achievement2-1"),
        t("experience.achievement2-2"),
        t("experience.achievement2-3"),
        t("experience.achievement2-4"),
        t("experience.achievement2-5"),
        t("experience.achievement2-6"),
      ],
    },
    {
      role: t("experience.head3"),
      img: cowatercraft,
      company: "Co Watercraft",
      url: "https://www.cowatercraft.com/",
      period: "2025",
      technologies: ["Angular", "TypeScript", "Node.js"],
      description: t("experience.description3"),
      achievements: [
        t("experience.achievement3-1"),
        t("experience.achievement3-2"),
        t("experience.achievement3-3"),
        t("experience.achievement3-4"),
        t("experience.achievement3-5"),
      ],
    },
    {
      role: t("experience.head4"),
      img: paraqvaria,
      company: "Paraqvaria Broker y Servicios S.A.",
      url: "https://www.paraqvaria.com.py/",
      period: "2023 - 2024",
      technologies: [
        "Angular",
        "Ionic",
        "TypeScript",
        "Node.js",
        "JWT Authentication",
      ],
      description: t("experience.description4"),
      achievements: [
        t("experience.achievement4-1"),
        t("experience.achievement4-2"),
        t("experience.achievement4-3"),
        t("experience.achievement4-4"),
        t("experience.achievement4-5"),
        t("experience.achievement4-6"),
        t("experience.achievement4-7"),
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate how much of the timeline is in view
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;

      // Position relative to viewport center
      const scrollProgress = Math.max(
        0,
        Math.min(1, (viewportHeight / 2 - timelineTop) / timelineHeight),
      );

      setCirclePosition(scrollProgress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="py-24 relative">
      <AnimatedCubeBackground />
      <div className="container flex w-full justify-center">
        <div className="lg:px-12 max-w-7xl md:px-14">
          {/* Section Header */}
          <div className="mb-16">
            <div
              className="flex flex-col sm:flex-row w-full justify-start items-start sm:items-center animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="mb-0 text-5xl font-aspire md:text-6xl lg:text-7xl font-bold sm:mb-8 text-foreground">
                {t("experience.title")}
              </h2>
              <SectionTitle>{t("experience.title2")}</SectionTitle>
            </div>
            <h2
              className="text-2xl text-muted-foreground font-trade sm:text-3xl md:text-4xl animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              {t("experience.subtitle")}
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative" ref={timelineRef}>
            {/* Timeline Line */}
            <div className="absolute left-[0.7rem] md:left-[1rem] top-0 bottom-0 w-px bg-gradient-to-b from-muted-foreground to-transparent block" />

            {/* Animated Circle Indicator */}
            <div
              className="absolute md:left-[0.3rem] w-6 h-6 rounded-full bg-[url('/src/assets/profile-animated.webp')] bg-cover shadow-[0_0_20px_hsl(189_94%_55%_/_0.5)] block transition-all duration-300 ease-out z-10"
              style={{ top: `${circlePosition}%` }}
            >
              <div className="absolute inset-0 rounded-full bg-card animate-ping opacity-75" />
            </div>

            {/* Experience Items */}
            <div className="space-y-12 ml-7 md:ml-16">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`flex ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full lg:w-[70%] p-8 rounded-2xl glass-effect hover:-translate-y-1 group hover:bg-card/60 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 sm:p-3 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-all duration-200">
                        <img
                          className="w-10 h-10 md:w-16 md:h-16 object-contain group-hover:-translate-y-1 transition-all duration-200"
                          src={exp.img}
                          alt="image"
                        />
                      </div>

                      <div className="flex flex-col">
                        <h3 className="text-xl text-muted-foreground font-trade sm:text-2xl md:text-3xl group-hover:text-foreground transition-colors">
                          {exp.role}
                        </h3>

                        <div className="flex flex-wrap gap-2 items-center text-muted-foreground">
                          <a
                            href={exp.url}
                            target="_blank"
                            className="font-medium font-enia text-primary"
                          >
                            @ {exp.company}
                          </a>
                          <span>•</span>
                          <span className="text-sm font-enia">
                            {exp.period}
                          </span>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mt-3 cursor-default">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs md:text-sm text-muted-foreground font-enia rounded-full glass-effect transition-all hover:text-foreground hover:bg-primary/20 hover:-translate-y-0.5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground font-enia group-hover:text-foreground transition-colors duration-200 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <span className="text-primary mt-1">▹</span>
                          <span className="mt-1 font-enia">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
