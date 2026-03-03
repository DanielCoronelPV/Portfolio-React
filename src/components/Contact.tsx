import { useState } from "react";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { AnimatedCubeBackground } from "./AnimatedCubeBackground";
import { SectionTitle } from "./SectionTitle";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <AnimatedCubeBackground />
      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      <div className="container relative z-10 flex w-full justify-center">
        <div className="lg:px-12 max-w-7xl md:px-14 w-full">
          {/* Section Header */}
          <div className="mb-16">
            <div
              className="flex flex-col sm:flex-row w-full justify-start items-start sm:items-center animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="mb-0 text-5xl font-aspire md:text-6xl lg:text-7xl font-bold sm:mb-8 text-foreground">
                {t("contact.title")}
              </h2>
              <SectionTitle>{t("contact.title2")}</SectionTitle>
            </div>
            <h2
              className="text-2xl text-muted-foreground font-trade sm:text-3xl md:text-4xl animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              {t("contact.subtitle")}
            </h2>
          </div>

          {/* Contact Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg text-foreground font-trade sm:text-xl md:text-2xl animate-fade-in-up mb-6">
                  {t("contact.connect")}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-enia mb-8">
                  {t("contact.connectDescription")}
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <a
                  href="mailto:danicoronel201070@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl glass-effect transition-all group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:-translate-y-1 transition-all glass-effect">
                    <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <div className="text-muted-foreground leading-relaxed text-sm font-enia group-hover:-translate-y-1 transition-all duration-200">
                      {t("contact.email")}
                    </div>
                    <div className="text-foreground leading-relaxed text-sm font-enia group-hover:-translate-y-1 transition-all duration-500">
                      danicoronel201070@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/xxUjygThr7CTJXGf9"
                  target="_blank"
                  className="flex items-center gap-4 p-4 rounded-xl glass-effect group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:-translate-y-1 transition-all glass-effect">
                    <MapPin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <div className="text-muted-foreground leading-relaxed text-sm font-enia group-hover:-translate-y-1 transition-all duration-200">
                      {t("contact.location")}
                    </div>
                    <div className="text-foreground leading-relaxed text-sm font-enia group-hover:-translate-y-1 transition-all duration-500">
                      {t("contact.availableFrom")}
                    </div>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg text-foreground font-trade sm:text-xl md:text-2xl animate-fade-in-up mb-4">
                  {t("contact.follow")}
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/daniel-ar%C3%ADstides-coronel-gonz%C3%A1lez-9a8082255/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl glass-effect hover:bg-primary/10 hover:-translate-y-1 transition-all group"
                  >
                    <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://github.com/DanielCoronelPV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl glass-effect hover:bg-primary/10 hover:-translate-y-1 transition-all group"
                  >
                    <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="p-8 rounded-2xl glass-effect hover:bg-card/60 transition-all flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-foreground font-trade sm:text-2xl md:text-3xl animate-fade-in-up mb-4">
                    {t("contact.ready")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm font-enia">
                    {t("contact.readyDescription")}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse relative">
                      <div className="absolute inset-0 rounded-full bg-card animate-ping opacity-75" />
                    </div>
                    <span className="text-foreground leading-relaxed text-sm font-enia">
                      {t("contact.available")}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm font-enia">
                    {t("contact.availableDescription")}
                  </p>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 hover:-translate-y-1 text-primary-foreground transition-all"
                  onClick={() => setIsModalOpen(true)}
                >
                  {t("contact.title")} {t("contact.title2")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
