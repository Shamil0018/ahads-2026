interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  intro?: string;
}

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <div className="text-center mb-14">
      {eyebrow && (
        <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent mb-4">{eyebrow}</p>
      )}
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary">{title}</h1>
      <div className="rule-gold w-32 mx-auto mt-5" />
      {intro && (
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">{intro}</p>
      )}
    </div>
  );
}
