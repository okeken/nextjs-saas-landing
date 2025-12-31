import { cn } from "@metallicjs/ui/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { TestimonialItem } from "./types";

function CarouselTestimonials({
  items,
  className,
  title,
}: {
  items: TestimonialItem[];
  className?: string;
  title: React.ReactNode;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  useEffect(() => {
    if (!isPaused) {
      const id = setInterval(next, 5000);
      return () => clearInterval(id);
    }
  }, [isPaused, currentIndex]);

  return (
    <section
      className={cn(
        "px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14",
        className
      )}
    >
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-10">
        {title}
      </h3>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="text-center mb-12">
          <p className="text-xl max-w-4xl mx-auto">
            {items[currentIndex]?.content}
          </p>
        </div>

        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
            {items[currentIndex]?.image ? (
              <img
                src={items[currentIndex]!.image!}
                alt={items[currentIndex]?.name ?? "Author"}
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>
          {items[currentIndex]?.name ? (
            <h3 className="text-lg font-semibold text-gray-900">
              {items[currentIndex]?.name}
            </h3>
          ) : null}
        </div>

        <div className="flex items-center justify-center gap-2 mb-8">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300 cursor-pointer",
                index === currentIndex
                  ? "bg-primary-700 w-3 h-3"
                  : "bg-neutral-subtle dark:bg-surface-6"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-between">
          <button
            className="max-w-min cursor-pointer"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ArrowLeft />
          </button>
          <button
            className="max-w-min cursor-pointer"
            onClick={next}
            aria-label="Next testimonial"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CarouselTestimonials;
