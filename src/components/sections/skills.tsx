import { skillGroups } from "@data/skills";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          id="skills-heading"
          eyebrow="Systems"
          title="Technologies I use on shipped work"
          description="Grouped by how I actually use them — not a list of every tool I have opened."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <h3 className="text-sm font-medium tracking-wide text-foreground">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-[12px] text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
