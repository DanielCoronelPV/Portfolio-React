import { useTranslation } from "react-i18next";
import { AnimatedCubeBackground } from "./AnimatedCubeBackground";
import { SectionTitle } from "./SectionTitle";

import { EffectCoverflow, Autoplay } from "swiper/modules";

import heroPlay from "@/assets/hero-play.png";
import heroCode from "@/assets/hero-code.jpeg";
import heroDogs from "@/assets/hero-dogs.jpeg";
import heroTravel from "@/assets/hero-travel.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Skills } from "./Skills";

export const About = () => {
  const { t } = useTranslation();

  const stats = [
    { label: t("about.stats.years"), value: "3+", delay: "0.3s" },
    { label: t("about.stats.projects"), value: "15+", delay: "0.4s" },
    { label: t("about.stats.technologies"), value: "10+", delay: "0.5s" },
  ];

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container z-10 flex w-full justify-center">
        <div className="lg:px-12 max-w-7xl md:px-14 relative h-auto overflow-hidden">
          {/* Section Header */}
          <div
            className="flex w-full justify-start items-center animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="text-5xl font-aspire md:text-6xl lg:text-7xl font-bold mb-8 text-foreground">
              {t("about.title")}
            </h2>
            <SectionTitle>{t("about.title2")}</SectionTitle>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Swiper / Stats */}
            <div
              className="animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                coverflowEffect={{
                  rotate: -50,
                  stretch: 0,
                  depth: 450,
                  modifier: 1,
                  slideShadows: false,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="w-full max-w-xl pb-5"
              >
                {[
                  { img: heroPlay, title: "I Play" },
                  { img: heroCode, title: "I Code" },
                  { img: heroTravel, title: "I Travel" },
                  { img: heroDogs, title: "Love Dogs" },
                ].map((item, index) => (
                  <SwiperSlide key={index} className="w-[60%]">
                    <div className="relative">
                      <div className="aspect-[6/7] overflow-hidden rounded-3xl glass-effect p-2">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>

                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-default">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-2xl glass-effect group hover:bg-primary/10 transition-all animate-fade-in-up"
                    style={{ animationDelay: stat.delay }}
                  >
                    <div className="text-4xl font-enia duration-200 text-primary mb-2 group-hover:-translate-y-1 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-enia group-hover:-translate-y-1 group-hover:text-foreground transition-all duration-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <div
                className="space-y-6 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <p className="text-base font-enia text-muted-foreground leading-relaxed">
                  {t("about.description")}
                </p>
                <p className="text-base font-enia text-muted-foreground leading-relaxed">
                  {t("about.description2")}
                </p>
                <p className="text-base font-enia text-muted-foreground leading-relaxed">
                  {t("about.description3")}
                </p>
              </div>
              <div
                className="flex flex-wrap gap-3 cursor-default animate-fade-in-up"
                style={{ animationDelay: "0.7s" }}
              >
                <span className="px-4 py-2 text-muted-foreground font-enia rounded-full glass-effect text-sm hover:-translate-y-1 transition-all hover:text-foreground hover:bg-primary/20">
                  React
                </span>
                <span className="px-4 py-2 text-muted-foreground font-enia rounded-full glass-effect text-sm hover:-translate-y-1 transition-all hover:text-foreground hover:bg-primary/20">
                  Angular
                </span>
                <span className="px-4 py-2 text-muted-foreground font-enia rounded-full glass-effect text-sm hover:-translate-y-1 transition-all hover:text-foreground hover:bg-primary/20">
                  Ionic
                </span>
                <span className="px-4 py-2 text-muted-foreground font-enia rounded-full glass-effect text-sm hover:-translate-y-1 transition-all hover:text-foreground hover:bg-primary/20">
                  TypeScript
                </span>
                <span className="px-4 py-2 text-muted-foreground font-enia rounded-full glass-effect text-sm hover:-translate-y-1 transition-all hover:text-foreground hover:bg-primary/20">
                  C#
                </span>
              </div>
            </div>
          </div>
          <Skills></Skills>
        </div>
      </div>
    </section>
  );
};
