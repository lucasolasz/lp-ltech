import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION } from "@/lib/site";

export const alt = "LTECH — Inteligência Operacional";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Share card used by Open Graph and Twitter for every page that does not ship its own. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          color: "#f3f3f0",
          backgroundColor: "#07070a",
          backgroundImage:
            "radial-gradient(60% 70% at 100% 0%, rgba(255,107,0,.45), transparent 70%), radial-gradient(50% 60% at 0% 100%, rgba(255,51,102,.35), transparent 70%)",
        }}
      >
        <div style={{ fontSize: 34, letterSpacing: 12 }}>LTECH</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 300, lineHeight: 1.05, letterSpacing: -2 }}>Inteligência Operacional</div>
          <div style={{ fontSize: 30, color: "rgba(243,243,240,.65)", maxWidth: 900 }}>{SITE_DESCRIPTION}</div>
        </div>
      </div>
    ),
    size,
  );
}
