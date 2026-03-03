import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "./SectionTitle";
import angularLogo from "@/assets/skills/angular-new.svg";
import reactLogo from "@/assets/skills/react-new.svg";
import typescriptLogo from "@/assets/skills/typescript.svg";
import ionicLogo from "@/assets/skills/ionic-new.svg";
import javaScriptLogo from "@/assets/skills/javascript.svg";
import htmlLogo from "@/assets/skills/html-new.svg";
import cssLogo from "@/assets/skills/css-new.svg";
import tailwindLogo from "@/assets/skills/tailwind.svg";
import nodejsLogo from "@/assets/skills/nodejs-new.svg";
import mongodbLogo from "@/assets/skills/mongodb-new.svg";
import gitLogo from "@/assets/skills/git-new.svg";
import gitHubLogo from "@/assets/skills/github.svg";
import dockerLogo from "@/assets/skills/docker-new.svg";
import awsLogo from "@/assets/skills/aws-new.svg";
import firebaseLogo from "@/assets/skills/firebase-new.svg";
import figmaLogo from "@/assets/skills/figma-new.svg";
import csharpLogo from "@/assets/skills/csharp.svg";
import dotnetLogo from "@/assets/skills/dotnet.svg";
import blazorLogo from "@/assets/skills/blazor.svg";
export const Skills = () => {
  const { t } = useTranslation();
  const [emblaRef1] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
      containScroll: false,
      duration: 50,
    },
    [
      Autoplay({
        delay: 2500,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
        playOnInit: true,
      }),
    ],
  );
  const [emblaRef2] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
      direction: "rtl",
      containScroll: false,
      duration: 50,
    },
    [
      Autoplay({
        delay: 2500,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
        playOnInit: true,
      }),
    ],
  );
  const allSkills = [
    { name: "React", logo: reactLogo },
    { name: "Angular", logo: angularLogo },
    { name: "C#", logo: csharpLogo },
    { name: ".NET", logo: dotnetLogo },
    { name: "JavaScript", logo: javaScriptLogo },
    { name: "TypeScript", logo: typescriptLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "Tailwind", logo: tailwindLogo },
    { name: "Blazor", logo: blazorLogo },
    { name: "Ionic", logo: ionicLogo },
    { name: "Node.js", logo: nodejsLogo },
    { name: "MongoDB", logo: mongodbLogo },
    { name: "Git", logo: gitLogo },
    { name: "Git Hub", logo: gitHubLogo },
    { name: "Docker", logo: dockerLogo },
    { name: "AWS", logo: awsLogo },
    { name: "Firebase", logo: firebaseLogo },
    { name: "Figma", logo: figmaLogo },
  ];
  const midpoint = Math.ceil(allSkills.length / 2);
  const row1Skills = allSkills.slice(0, midpoint);
  const row2Skills = allSkills.slice(midpoint);
  return (
    <div className="">
      {/* Section Header */}
      <div
        className="flex w-full justify-start items-center animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        <h2 className="text-2xl font-aspire md:text-3xl lg:text-4xl font-bold mb-8 text-foreground">
          {t("skills.title")}
        </h2>
        <h2 className="text-2xl pl-2 font-aspire md:text-3xl lg:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
          {t("skills.title2")}
        </h2>
      </div>
      {/* Skills Sliders */}
      <div className="space-y-8 mt-3">
        {/* Row 1 - Left to Right */}
        <div
          className="overflow-hidden animate-fade-in-left"
          ref={emblaRef1}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex">
            {[...row1Skills, ...row1Skills, ...row1Skills].map(
              (skill, index) => (
                <div
                  key={index}
                  className="md:pl-12 md:pr-12 flex-[0_0_160px] flex flex-col items-center"
                >
                  <div className="group gap-4 flex flex-col">
                    <div className="w-24 md:w-32 h-24 md:h-32 flex items-center justify-center p-4 md:p-6 rounded-2xl glass-effect group-hover:bg-primary/10 duration-200 transition-all">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain duration-200 group-hover:-translate-y-1 transition-all"
                      />
                    </div>
                    <p className="text-center text-xs text-muted-foreground font-enia group-hover:-translate-y-1 group-hover:text-foreground transition-all duration-500">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
        {/* Row 2 - Right to Left */}
        <div
          className="overflow-hidden animate-fade-in-right"
          ref={emblaRef2}
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex" dir="rtl">
            {[...row2Skills, ...row2Skills, ...row2Skills].map(
              (skill, index) => (
                <div
                  key={index}
                  className="md:pl-12 md:pr-12 flex-[0_0_160px] flex flex-col items-center "
                  dir="ltr"
                >
                  <div className="group gap-4 flex flex-col">
                    <div className="w-24 md:w-32 h-24 md:h-32 flex items-center justify-center p-4 md:p-6 rounded-2xl glass-effect duration-200 group-hover:bg-primary/10 transition-all">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain duration-200 group-hover:-translate-y-1 transition-all"
                      />
                    </div>
                    <p className="text-center text-xs text-muted-foreground font-enia group-hover:-translate-y-1 group-hover:text-foreground transition-all duration-500">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
