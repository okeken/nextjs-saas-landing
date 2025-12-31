export function clamp(input: string, max: number = 25) {
  const s = (input ?? "").trim();
  if (!s) return "";
  return s.length > max ? s.slice(0, max - 1).trimEnd() + "…" : s;
}
