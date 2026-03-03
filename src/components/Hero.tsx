"use client";

import { useTranslation } from "react-i18next";
import { TabletSmartphone, Monitor } from "lucide-react";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="relative lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-36 lg:pt-20"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(189_94%_55%_/_0.15),transparent_70%)]" />

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(217_33%_17%_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(217_33%_17%_/_0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />

      <div className="container relative z-10 flex w-full justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:px-12 max-w-7xl sm:px-10">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left ">
            {/* Greeting */}
            <div
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.1s" }}
            >
              <p className="text-muted-foreground text-lg font-enia">
                {t("hero.greeting")}
              </p>
            </div>

            <div className="space-y-8">
              {/* Name */}
              <h1
                className="animate-fade-in-up opacity-0 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="font-aspire text-foreground">Daniel</span>
                <span className="pl-4 font-aspire text-gradient">Coronel</span>
              </h1>

              {/* Title */}
              <div
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: "0.3s" }}
              >
                <h2 className="text-2xl text-gradient font-trade sm:text-3xl md:text-4xl">
                  {t("hero.title")}
                </h2>
              </div>

              {/* Description */}
              <div
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="text-base font-enia text-muted-foreground max-w-2xl lg:mx-0 mx-auto leading-relaxed">
                  {t("hero.description1")}
                </p>
              </div>

              <div
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: "0.5s" }}
              >
                <h2 className="text-2xl text-foreground font-trade sm:text-3xl md:text-4xl">
                  {t("hero.whatido")}
                </h2>
              </div>

              <div className="flex flex-col items-center w-full md:flex-row justify-center lg:justify-start gap-y-2 gap-x-2">
                <div
                  className="px-6 py-4 flex max-w-[300px] rounded-lg glass-effect hover:bg-primary/20 transition-all group items-center gap-x-4 justify-center animate-fade-in-up bg-primary/10 text-foreground border border-border/50 opacity-0"
                  style={{ animationDelay: "0.6s" }}
                >
                  <Monitor className="w-5 h-5 md:w-6 md:h-6 duration-200 group-hover:-translate-y-1 text-muted-foreground flex justify-center group-hover:text-primary transition-all" />
                  <h4 className="whitespace-nowrap cursor-default group-hover:-translate-y-1 duration-500 group-hover:text-primary transition-all h-full text-base text-muted-foreground font-trade sm:text-xl md:text-2xl">
                    {t("hero.web")}
                  </h4>
                </div>
                <div
                  className="px-6 py-4 flex max-w-[300px] rounded-lg glass-effect hover:bg-primary/20 transition-all group items-center gap-x-4 justify-center animate-fade-in-up bg-primary/10 text-foreground border border-border/50 opacity-0"
                  style={{ animationDelay: "0.6s" }}
                >
                  <TabletSmartphone className="flex w-5 h-5 md:w-6 md:h-6 duration-200 group-hover:-translate-y-1 text-muted-foreground group-hover:text-primary transition-all" />
                  <h4 className="whitespace-nowrap cursor-default group-hover:-translate-y-1 duration-500 group-hover:text-primary text-base text-muted-foreground transition-all font-trade sm:text-xl md:text-2xl">
                    {t("hero.mobile")}
                  </h4>
                </div>
              </div>

              {/* Availability Badge */}
              <div
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse relative">
                    <div className="absolute inset-0 rounded-full bg-card animate-ping opacity-75" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {t("hero.open")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full py-20 lg:py-0 flex animate-scale-in justify-center lg:justify-end"
            style={{ animationDelay: "0.1s" }}
          >
            <img
              src="/src/assets/Profile-animated.png"
              alt="Profile-animated"
              className="w-[350px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
