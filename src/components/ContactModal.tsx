import { useState } from "react";
import { Mail, Calendar, Linkedin, Github, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "@/config/env.ts";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"quick" | "form">("quick");
  const [openCalendly, setOpenCalendly] = useState(false);
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      toast({
        title: t("form.successTitle"),
        description: t("form.successDesc"),
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Opcional: cerrar modal automáticamente
      setTimeout(() => {
        onOpenChange(false);
        setActiveTab("quick");
      }, 800);
    } catch (error) {
      console.error(error);

      toast({
        title: t("form.wrongTitle"),
        description: t("form.wrongDesc"),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Contact Modal */}
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[600px] bg-background antialiased border-border">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">
              <div className="flex w-full justify-center">
                <div className="text-2xl font-aspire mb-2 mr-2">
                  {t("contact.title")}
                </div>
                <div className="text-2xl font-aspire text-gradient mb-2">
                  {t("contact.title2")}
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 py-4">
            <a
              href="https://www.linkedin.com/in/daniel-arístides-coronel-gonzález-9a8082255/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted hover:-translate-y-1 transition-all group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/DanielCoronelPV"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted hover:-translate-y-1 transition-all group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-secondary rounded-lg">
            <button
              onClick={() => setActiveTab("quick")}
              className={`py-2 px-4 rounded-md text-sm font-medium transition-all ${
                activeTab === "quick"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground font-enia"
              }`}
            >
              {t("modal.quickConnect")}
            </button>
            <button
              onClick={() => setActiveTab("form")}
              className={`py-2 px-4 rounded-md text-sm font-medium transition-all ${
                activeTab === "form"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground font-enia"
              }`}
            >
              {t("modal.fillForm")}
            </button>
          </div>

          {/* Content */}
          <div className="py-4">
            {activeTab === "quick" ? (
              <div className="space-y-4">
                {/* Email Card */}
                <a
                  href="mailto:danicoronel201070@gmail.com"
                  className="p-6 rounded-xl border border-border hover:bg-card/60 transition-all duration-200 flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-lg glass-effect group-hover:bg-primary/10 group-hover:-translate-y-1 transition-all">
                    <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 font-enia">
                      {t("modal.email")}
                    </h3>
                    <p className="text-sm text-foreground mb-1 font-enia">
                      danicoronel201070@gmail.com
                    </p>
                    <p className="text-sm text-muted-foreground font-enia">
                      {t("modal.sendEmail")}
                    </p>
                  </div>
                </a>

                {/* Book a Call Card */}
                <div
                  onClick={() => {
                    setActiveTab("quick");
                    setOpenCalendly(true);
                    onOpenChange(false);
                  }}
                  className="cursor-pointer p-6 rounded-xl border border-border hover:bg-card/60 transition-all duration-200 flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-lg glass-effect group-hover:bg-primary/10 group-hover:-translate-y-1 transition-all">
                    <Calendar className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 font-enia">
                      {t("modal.bookCall")}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1 font-enia">
                      {t("modal.schedule")}
                    </p>
                    <p className="text-sm text-muted-foreground font-enia">
                      {t("modal.bookCalendar")}
                    </p>
                  </div>
                </div>

                {/* Availability Status */}
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse relative">
                      <div className="absolute inset-0 rounded-full bg-card animate-ping opacity-75" />
                    </div>
                    <span className="text-sm font-medium font-enia">
                      {t("modal.available")}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-enia">
                    {t("modal.name")}
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("modal.yourName")}
                    className="bg-secondary border-border font-enia"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-enia">
                    {t("modal.email")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("modal.emailExample")}
                    className="bg-secondary border-border font-enia"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-enia">
                    {t("modal.message")}
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("modal.messageDescription")}
                    rows={4}
                    className="bg-secondary border-border resize-none font-enia"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-1 transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4 mr-2 font-enia" />
                  {loading ? "Sending..." : t("modal.send")}
                </Button>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Calendly Modal */}
      <Dialog open={openCalendly} onOpenChange={setOpenCalendly} modal={false}>
        <DialogContent className="sm:max-w-[900px] bg-background border-border p-0 overflow-hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>Schedule a Call</DialogTitle>
          </DialogHeader>
          <div className="flex justify-between items-center p-4 border-b border-border">
            <h3 className="font-semibold">{t("modal.scheduleCall")}</h3>
          </div>
          <div className="w-full h-[80vh]">
            <iframe
              src="https://calendly.com/danicoronel201070/30min"
              width="100%"
              height="100%"
              frameBorder="0"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
