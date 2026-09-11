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
          background: "#07090c",
          color: "#e7eef4",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#3dd6f5",
          }}
        >
          <span>System / Engineering</span>
          <span>Online</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 60, lineHeight: 1.05 }}>{site.name}</div>
          <div
            style={{
              fontSize: 26,
              color: "#8b98a6",
              maxWidth: 860,
              lineHeight: 1.35,
            }}
          >
            {site.headline}
          </div>
        </div>
        <div style={{ fontSize: 20, color: "#8b98a6" }}>{site.url}</div>
      </div>
    ),
    size,
  );
}
