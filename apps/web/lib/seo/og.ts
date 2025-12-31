export function buildOgUrl(args: {
  title: string;
  subtitle?: string;
  theme?: "light" | "dark";
}) {
  const theme = args.theme ?? "dark";
  const title = encodeURIComponent(args.title);
  const subtitle = encodeURIComponent(args.subtitle ?? "");
  return `/api/og?theme=${theme}&title=${title}&subtitle=${subtitle}`;
}
