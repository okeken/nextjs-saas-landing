import type { ReactNode } from "react";

export const mdxComponents = {
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-lg md:text-xl lg:text-2xl font-bold mt-12 mb-4">
      {children}
    </h2>
  ),

  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="md:text-lg lg:text-xl font-bold mt-8 mb-4">{children}</h3>
  ),

  p: ({ children }: { children: ReactNode }) => (
    <p className="leading-relaxed mb-6">{children}</p>
  ),

  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
  ),

  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
  ),

  a: ({ children, href }: { children: ReactNode; href?: string }) => (
    <a
      href={href}
      className="text-primary underline underline-offset-4 hover:opacity-80"
    >
      {children}
    </a>
  ),

  // Fenced code blocks. The inner <code> drops the inline-code styling below.
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="mb-6 overflow-x-auto rounded-lg border border-border bg-muted p-4 text-sm leading-relaxed [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-[1em]">
      {children}
    </pre>
  ),

  code: ({ children }: { children: ReactNode }) => (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em]">
      {children}
    </code>
  ),

  blockquote: ({ children }: { children: ReactNode }) => (
    <div className="border-l-4 border-primary pl-6 py-2 my-8 italic text-muted-foreground">
      {children}
    </div>
  ),
};
