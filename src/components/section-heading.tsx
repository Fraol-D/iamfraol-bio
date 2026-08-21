import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  level?: "h2" | "h3";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className,
  level = "h2",
}: SectionHeadingProps) {
  const Title = level;

  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Title
        id={id}
        className={cn(
          "mt-3 font-heading tracking-tight text-balance",
          level === "h2" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl",
        )}
      >
        {title}
      </Title>
      {description ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}
