import { site } from "@data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-mono text-[11px] tracking-[0.12em] uppercase">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-[11px] tracking-[0.12em] uppercase">
          {site.location} · System online
        </p>
      </div>
    </footer>
  );
}
