import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

export const alt = `Portfolio de ${profile.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0f172a",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 28, color: "#60a5fa" }}>{profile.location}</div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 16 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 42, color: "#cbd5e1", marginTop: 12 }}>
          {profile.title}
        </div>
      </div>
    ),
    { ...size }
  );
}