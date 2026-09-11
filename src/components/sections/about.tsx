import Image from "next/image";

import { site } from "@data/site";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-border"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1.4fr)_18rem]">
        <div>
          <SectionHeading
            id="about-heading"
            eyebrow="Operator"
            title="How I work"
          />
          <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <figure className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-lg border border-border bg-muted lg:mx-0">
          <Image
            src={site.photo.src}
            alt={site.photo.alt}
            fill
            sizes="288px"
            className="object-cover object-top"
          />
        </figure>
      </div>
    </section>
  );
}
