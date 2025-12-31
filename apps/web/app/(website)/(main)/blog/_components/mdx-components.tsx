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

  blockquote: ({ children }: { children: ReactNode }) => (
    <div className="border-l-4 border-primary pl-6 py-2 my-8 italic text-muted-foreground">
      {children}
    </div>
  ),
};
