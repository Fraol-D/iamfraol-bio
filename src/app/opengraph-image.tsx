import { ImageResponse } from "next/og";

import { site } from "@data/site";

export const alt = site.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#eef2f6",
          color: "#12161c",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#5b6573",
          }}
        >
          {site.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05 }}>{site.name}</div>
          <div
            style={{
              fontSize: 28,
              color: "#5b6573",
              maxWidth: 860,
              lineHeight: 1.35,
            }}
          >
            {site.headline}
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#6f6a62" }}>{site.url}</div>
      </div>
    ),
    size,
  );
}
