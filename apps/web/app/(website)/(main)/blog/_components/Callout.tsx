export default function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-primary pl-6 py-2 my-8 italic text-muted-foreground">
      {children}
    </div>
  );
}
