import { Button } from "@metallicjs/ui/components/button";

const Started = ({
  subtitle = "A clean, SEO-ready Next.js SaaS website foundation you can adapt to your product.",
  title = "Start with a solid SaaS website.",
  buttonText = "Use the Template",
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}) => {
  return (
    <section className="px-4 md:px-8 lg:px-12 my-6 md:my-10 lg:my-14">
      <div className="px-4 md:px-8 lg:px-12 max-w-5xl mx-auto bg-primary-100 rounded-md py-8 md:py-10 text-center">
        <div
          className="flex flex-col gap-4 md:gap-6 justify-center items-center
         dark:text-popover"
        >
          <h4 className="text-2xl md:text-3xl font-bold">{title}</h4>
          <p className="text-sm sm:text-base text-muted-foreground">
            {subtitle}
          </p>
          <Button>{buttonText}</Button>
        </div>
      </div>
    </section>
  );
};

export default Started;
