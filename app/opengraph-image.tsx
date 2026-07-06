import { BRAND_NAME } from "@/lib/constants";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = BRAND_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "linear-gradient(135deg, #0F2B46 0%, #2563EB 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700, marginBottom: 20 }}>
          {BRAND_NAME}
        </div>
        <div style={{ fontSize: 36, opacity: 0.95 }}>
          Contabilitate Chișinău · Primele 10 Minute Gratuite
        </div>
      </div>
    ),
    { ...size }
  );
}
