import { Mail, Linkedin, Github, Twitter, ArrowDown } from "lucide-react";

export const SocialNav = () => {
  const socials = [
    {
      icon: Mail,
      href: "mailto:danicoronel201070@gmail.com",
      label: "Email",
      delay: "0.1s",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dani-coro",
      label: "LinkedIn",
      delay: "0.2s",
    },
    {
      icon: Github,
      href: "https://www.github.com/DanielCoronelPV",
      label: "GitHub",
      delay: "0.3s",
    },
    // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center animate-fade-in-left hover:-translate-x-1 justify-center rounded-lg glass-effect hover:bg-primary/20 transition-all group"
          style={{ animationDelay: social.delay }}
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
      ))}

      {/* Separator */}
      <div
        className="w-px h-12 bg-border animate-fade-in-left transition-all"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Scroll Down Arrow */}
      <button
        onClick={scrollToContact}
        className="w-10 h-10 flex items-center animate-fade-in-left hover:-translate-x-1 justify-center rounded-lg glass-effect hover:bg-primary/20 transition-all group animate-bounce"
        style={{ animationDelay: "0.4s" }}
        aria-label="Scroll to contact"
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </button>
    </div>
  );
};
