import { certifications, education } from "@data/education";
import { experience } from "@data/experience";
import { SectionHeading } from "@/components/section-heading";
import { formatRange } from "@/lib/format";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          id="experience-heading"
          eyebrow="Record"
          title="Experience and education"
        />

        <div className="mt-12 grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="font-mono text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              Experience
            </h3>
            <ol className="mt-6 space-y-10">
              {experience.map((item) => (
                <li key={item.id}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <p className="font-medium text-foreground">
                      {item.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {formatRange(item.start, item.end)}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.organization}
                    {item.location ? ` · ${item.location}` : ""}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="pl-4 -indent-3">
                        <span aria-hidden="true">– </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="font-mono text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              Education
            </h3>
            <ol className="mt-6 space-y-10">
              {education.map((item) => (
                <li key={item.id}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <p className="font-medium text-foreground">
                      {item.credential}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {formatRange(item.start, item.end)}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.school}
                    {item.location ? ` · ${item.location}` : ""}
                  </p>
                  {item.details ? (
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {item.details.map((detail) => (
                        <li key={detail} className="pl-4 -indent-3">
                          <span aria-hidden="true">– </span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ol>

            {certifications.length > 0 ? (
              <div className="mt-12">
                <h3 className="font-mono text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                  Certification
                </h3>
                <ul className="mt-4 space-y-3">
                  {certifications.map((item) => (
                    <li key={item.id} className="text-sm">
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium underline-offset-4 hover:underline"
                        >
                          {item.name}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : (
                        <span className="font-medium">{item.name}</span>
                      )}
                      {item.issuer ? (
                        <span className="text-muted-foreground">
                          {" "}
                          · {item.issuer}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
