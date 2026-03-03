import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Branding */}
            <div className="text-center md:text-left">
              <div className="flex">
                <div className="text-2xl font-aspire mb-2 mr-2">Daniel </div>
                <div className="text-2xl font-aspire text-gradient mb-2">
                  Coronel
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("footer.role")}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/daniel-ar%C3%ADstides-coronel-gonz%C3%A1lez-9a8082255/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:-translate-y-1 hover:bg-primary/10 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/DanielCoronelPV"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:-translate-y-1 hover:bg-primary/10 transition-all group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:danicoronel201070@gmail.com"
                className="p-3 rounded-full glass-effect hover:-translate-y-1 hover:bg-primary/10 transition-all group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} Daniel Coronel. {t("footer.rights")}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
