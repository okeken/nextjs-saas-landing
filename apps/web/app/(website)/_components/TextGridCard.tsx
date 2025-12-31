
import { cn } from "@metallicjs/ui/lib/utils";
import CheckmarkIcon from "@/public/assets/website/checkmark-icon.svg";

interface TextGridProps {
  title: string;
  subtitle?: string;
  image: string;
  items: string[];
  reverse?: boolean;
  vertical?: boolean;
}

const TextGrid = ({
  title,
  subtitle,
  image,
  items,
  reverse = false,
  vertical,
}: TextGridProps) => {
  if (vertical)
    return (
      <div className="p-1 rounded-md bg-background dark:bg-popover border-2 border-card dark:border-sidebar-border h-full w-full">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex items-center justify-center">
            <img src={image} alt="" />
          </div>

          <div className="flex flex-col gap-2 justify-center mx-auto bg-card dark:bg-sidebar-border p-4 rounded-md">
            <h4 className="font-bold text-lg sm:text-xl">{title}</h4>

            {subtitle ? (
              <p className="text-muted-foreground">{subtitle}</p>
            ) : null}

            {items.map((text, i) => (
              <TextGridItem key={i}>{text}</TextGridItem>
            ))}
          </div>
        </div>
      </div>
    );

  return (
    <div
      className={cn(
        "grid md:grid-cols-2 gap-6 md:gap-8",
        reverse ? "md:[&>*:first-child]:order-2" : ""
      )}
    >
      <div className="flex items-center justify-center">
        <img src={image} alt="" />
      </div>

      <div className="flex flex-col gap-4 justify-center max-w-[700px] mx-auto">
        <h4 className="font-bold text-lg sm:text-xl">{title}</h4>

        {subtitle ? <p className="text-muted-foreground">{subtitle}</p> : null}

        {items.map((text, i) => (
          <TextGridItem key={i}>{text}</TextGridItem>
        ))}
      </div>
    </div>
  );
};

export default TextGrid;

interface TextGridItemProps {
  children: React.ReactNode;
}

const TextGridItem = ({ children }: TextGridItemProps) => {
  return (
    <div className="shadow-(--card-shadow) p-1 rounded-md bg-background dark:bg-popover border-2 border-card dark:border-sidebar-border">
      <div className="flex gap-2 items-center p-2 bg-card dark:bg-sidebar-border rounded-md text-muted-foreground">
        <CheckmarkIcon className="shrink-0" />
        <p className="xl:text-lg">
          <RenderHTML html={String(children)} />
        </p>
      </div>
    </div>
  );
};

// Allow only very small subset: <span class='font-bold'>...</span> and plain text.
const RenderHTML = ({ html }: { html: string }) => {
  const safe = sanitizeInlineHtml(html);
  return <span dangerouslySetInnerHTML={{ __html: safe }} />;
};

function sanitizeInlineHtml(input: string) {
  // Strip script/style tags entirely
  let out = input
    .replace(/<\s*script[^>]*>[\s\S]*?<\s*\/\s*script\s*>/gi, "")
    .replace(/<\s*style[^>]*>[\s\S]*?<\s*\/\s*style\s*>/gi, "");

  // Remove event handlers like onclick=...
  out = out.replace(/\son\w+\s*=\s*(['"]).*?\1/gi, "");

  // Remove javascript: URLs
  out = out.replace(/\s(href|src)\s*=\s*(['"])\s*javascript:.*?\2/gi, "");

  // Drop all tags except <span> and <br>
  out = out.replace(/<(\/?)(?!span\b|br\b)[^>]*>/gi, "");

  // On span, allow only class="font-bold" (or class='font-bold'); strip any other attributes
  out = out.replace(/<span\b([^>]*)>/gi, (match, attrs) => {
    const hasBold = /\bclass\s*=\s*(['"])\s*font-bold\s*\1/i.test(attrs);
    return hasBold ? "<span class='font-bold'>" : "<span>";
  });

  return out;
}
