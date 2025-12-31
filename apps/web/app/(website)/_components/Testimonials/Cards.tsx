import { cn } from "@metallicjs/ui/lib/utils";
import { TestimonialItem } from "./types";

function CardsTestimonials({
  items,
  className,
  title,
}: {
  items: TestimonialItem[];
  className?: string;
  title: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14",
        className
      )}
    >
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-10 text-center">
        {title}
      </h3>

      <div className="overflow-x-auto flex gap-8 no-scrollbar pb-4">
        {items.map(({ content, role, name }, index) => (
          <div
            key={`${index}`}
            className="min-w-[250px] border dark:border-muted-foreground rounded-md flex flex-col gap-2 p-3 break-inside-avoid max-h-max"
          >
            {name ? <h4 className="md:text-lg font-bold">{name}</h4> : null}
            {content ? <p className="text-sm md:text-base">{content}</p> : null}
            {role ? (
              <div className="bg-sidebar-border rounded-md p-2 font-medium text-sm md:text-base">
                {role}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardsTestimonials;
