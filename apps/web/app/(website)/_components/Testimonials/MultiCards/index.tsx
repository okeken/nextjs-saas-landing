"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

import { cn } from "@metallicjs/ui/lib/utils";
import { TestimonialItem } from "../types";

const HEIGHT = 520;

const MultCardTestimonials = ({
  items,
  className,
  title,
}: {
  items: TestimonialItem[];
  className?: string;
  title: React.ReactNode;
}) => {
  const { left, middle, right } = useMemo(
    () => splitIntoColumns(items),
    [items]
  );
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-center">
          {title}
        </h3>

        {/* Mobile: static (no animation) */}
        <div className="grid gap-4 sm:grid-cols-2 md:hidden">
          {items.slice(0, 6).map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>

        {/* Desktop: animated columns (disabled for prefers-reduced-motion) */}
        {!reduceMotion ? (
          <div className="relative hidden md:block overflow-hidden rounded-2xl">
            <FadeMask />

            <div className="grid grid-cols-3 gap-6 md:gap-8 h-[520px]">
              {/* LEFT — up */}
              <VerticalColumn
                items={left}
                direction="up"
                speed={20}
                fadeFirst
              />

              {/* MIDDLE — down (opposite) */}
              <VerticalColumn items={middle} direction="down" speed={16} />

              {/* RIGHT — down */}
              <VerticalColumn
                items={right}
                direction="down"
                speed={18}
                fadeFirst
              />
            </div>
          </div>
        ) : (
          // Reduced motion: static on desktop too
          <div className="hidden md:grid grid-cols-3 gap-6 md:gap-8">
            {items.slice(0, 9).map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MultCardTestimonials;

/* -------------------------- Column -------------------------- */

function VerticalColumn({
  items,
  direction,
  speed,
  fadeFirst,
}: {
  items: TestimonialItem[];
  direction: "up" | "down";
  speed: number; // px/sec
  fadeFirst?: boolean;
}) {
  const y = useMotionValue(0);
  const [paused, setPaused] = useState(false);

  const measureRef = useRef<HTMLDivElement | null>(null);
  const loopHeightRef = useRef(0);

  const loopItems = useMemo(() => [...items, ...items], [items]);

  useLayoutEffect(() => {
    if (!measureRef.current) return;

    // Height of a single set (not duplicated)
    const measured = measureRef.current.offsetHeight;

    // Ensure there's always enough distance to scroll
    loopHeightRef.current = Math.max(measured, HEIGHT + 120);

    // Start in a valid wrap range
    y.set(direction === "down" ? -loopHeightRef.current : 0);
  }, [direction, items.length, y]);

  useAnimationFrame((_t, delta) => {
    if (paused) return;

    const h = loopHeightRef.current;
    if (!h) return;

    const dir = direction === "up" ? -1 : 1;
    let next = y.get() + (dir * (speed * delta)) / 1000;

    // Wrap in [-h, 0)
    if (next <= -h) next += h;
    if (next >= 0) next -= h;

    y.set(next);
  });

  return (
    <div
      className="relative overflow-hidden testimonial-mask"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* measurer (single set) */}
      <div className="absolute inset-x-0 top-0 opacity-0 pointer-events-none">
        <div ref={measureRef} className="flex flex-col gap-4">
          {items.map((item, i) => (
            <TestimonialCard key={`m-${i}`} item={item} />
          ))}
        </div>
      </div>

      <motion.div
        style={{ y }}
        className="flex flex-col gap-4 will-change-transform"
      >
        {loopItems.map((item, i) => (
          <TestimonialCard
            key={`${i}-${item.name ?? "item"}`}
            item={item}
            className={fadeFirst && i === 0 ? "opacity-70" : ""}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* -------------------------- UI bits -------------------------- */

function FadeMask() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent z-10" />
    </>
  );
}

function TestimonialCard({
  item,
  className,
}: {
  item: TestimonialItem;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border dark:border-muted-foreground rounded-md flex flex-col gap-2 p-4 bg-background",
        className
      )}
    >
      {item.name ? <h4 className="font-bold">{item.name}</h4> : null}
      {item.content ? (
        <p className="text-sm md:text-base text-muted-foreground">
          {item.content}
        </p>
      ) : null}
      {item.role ? (
        <div className="bg-sidebar-border rounded-md p-2 text-sm font-medium">
          {item.role}
        </div>
      ) : null}
    </div>
  );
}

/* -------------------------- Helpers -------------------------- */

function splitIntoColumns<T>(items: T[]) {
  const left: T[] = [];
  const middle: T[] = [];
  const right: T[] = [];

  items.forEach((item, i) => {
    if (i % 3 === 0) left.push(item);
    else if (i % 3 === 1) middle.push(item);
    else right.push(item);
  });

  return { left, middle, right };
}
