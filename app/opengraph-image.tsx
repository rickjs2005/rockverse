import { ImageResponse } from "next/og";

export const alt = "ROCKVERSE — A história do som mais alto do planeta";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(circle at 50% 40%, rgba(220, 38, 38, 0.25) 0%, rgba(220, 38, 38, 0.08) 40%, rgba(5, 5, 5, 0) 70%)",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 168,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#ffffff" }}>ROCK</span>
          <span style={{ color: "#ff6b00" }}>VERSE</span>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 34,
            fontWeight: 800,
            color: "#9ca3af",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          A história do som mais alto do planeta
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 14,
            backgroundImage: "linear-gradient(90deg, #dc2626, #f59e0b)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
