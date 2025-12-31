export default function MediaPlaceholder({
  height = 300,
  label,
}: {
  height?: number;
  label?: string;
}) {
  return (
    <div
      className="w-full rounded-xl bg-divider flex items-center justify-center my-8"
      style={{ height }}
    >
      {label ? (
        <span className="text-sm text-muted-foreground">{label}</span>
      ) : null}
    </div>
  );
}
