import { FileText, Mail, Phone } from "lucide-react";

import { site } from "@data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const links = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    value: site.email,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    href: site.socials.linkedin,
    value: "fraol-ashebir",
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    href: site.socials.github,
    value: "Fraol-D",
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "Resume",
    href: site.resumePath,
    value: "Download PDF",
    icon: FileText,
    external: true,
  },
  {
    label: "Phone",
    href: `tel:${site.phone.replace(/\s+/g, "")}`,
    value: site.phone,
    icon: Phone,
    external: false,
  },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          id="contact-heading"
          eyebrow="Establish connection"
          title="If this work is relevant, I would like to hear from you."
          description="Email is the fastest path. GitHub, LinkedIn, and a resume are here if you want more context first."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 px-4",
              )}
            >
              <item.icon data-icon="inline-start" />
              <span className="flex flex-col items-start leading-none">
                <span className="text-[10px] tracking-wide text-muted-foreground uppercase">
                  {item.label}
                </span>
                <span className="mt-1 text-sm">{item.value}</span>
              </span>
              {item.external ? (
                <span className="sr-only">(opens in a new tab)</span>
              ) : null}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
