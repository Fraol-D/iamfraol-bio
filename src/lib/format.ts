const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function toDate(value: string) {
  if (/^\d{4}-\d{2}$/.test(value)) {
    return new Date(`${value}-01T00:00:00.000Z`);
  }
  return new Date(`${value}T00:00:00.000Z`);
}

export function formatMonthYear(value: string) {
  return monthFormatter.format(toDate(value));
}

export function formatRange(start: string, end: string | null) {
  const from = formatMonthYear(start);
  const to = end ? formatMonthYear(end) : "Present";
  return `${from} – ${to}`;
}

export function hostnameFromUrl(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}
