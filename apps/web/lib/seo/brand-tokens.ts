import { OG_TOKENS, type OgTheme } from "./generated-og-tokens";

export function getOgPalette(theme: OgTheme) {
  return OG_TOKENS[theme];
}

export type { OgTheme };
