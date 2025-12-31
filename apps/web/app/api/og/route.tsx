import { ImageResponse } from "next/og";
import { getOgPalette, type OgTheme } from "@/lib/seo/brand-tokens";
import { SITE } from "@/config";

export const runtime = "edge";
export const revalidate = 3600;

function clamp(input: string, max: number) {
  const s = (input ?? "").trim();
  if (!s) return "";
  return s.length > max ? s.slice(0, max - 1).trimEnd() + "…" : s;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const theme = (searchParams.get("theme") as OgTheme) || "dark";
  const title = clamp(searchParams.get("title") ?? SITE.name, 70);
  const subtitle = clamp(searchParams.get("subtitle") ?? "", 120);

  const pal = getOgPalette(theme);

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: pal.bg,
          color: pal.fg,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: pal.accent,
                boxShadow: `0 0 0 7px ${pal.ring}`,
              }}
            />
            <div style={{ fontSize: 24, opacity: 0.92 }}>{SITE.name}</div>
          </div>

          <div style={{ fontSize: 22, opacity: 0.7 }}>
            {SITE.url.replace(/^https?:\/\//, "")}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: -1.6,
              lineHeight: 1.05,
            }}
          >
            {title}
          </div>

          {subtitle ? (
            <div
              style={{
                fontSize: 34,
                lineHeight: 1.25,
                maxWidth: 980,
                color: pal.muted,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ fontSize: 22, opacity: 0.7 }}>{SITE.tagline}</div>

          <div
            style={{
              width: 240,
              height: 10,
              borderRadius: 999,
              background: `linear-gradient(90deg, ${pal.accent}, rgba(255,255,255,0))`,
              opacity: 0.95,
            }}
          />
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
