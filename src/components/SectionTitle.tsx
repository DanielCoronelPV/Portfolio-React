interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle = ({
  children,
  className = "",
}: SectionTitleProps) => {
  return (
    <h2
      className={`text-5xl font-aspire md:text-6xl lg:text-7xl font-bold mb-8 ${className}`}
    >
      <span className="inline-block pl-4 pr-10 py-5">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
          {children}
        </span>
      </span>
    </h2>
  );
};
