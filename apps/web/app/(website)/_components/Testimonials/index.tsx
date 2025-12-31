"use client";

import React from "react";

import { TestimonialItem } from "./types";
import CarouselTestimonials from "./Carousel";
import CardsTestimonials from "./Cards";
import MultCardTestimonials from "./MultiCards";

export interface TestimonialsProps {
  variant?: "carousel" | "cards" | "default";
  items?: TestimonialItem[];
  className?: string;
  title?: React.ReactNode;
}

const defaultCardItems: TestimonialItem[] = [
  {
    id: 1,
    name: "James Oludayo",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    content:
      "We launched our marketing site in a weekend. The layout, spacing, and sections already felt polished without heavy customization.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    content:
      "The structure makes it easy to ship fast without the site feeling generic. Everything is organized and predictable.",
  },
  {
    id: 3,
    name: "Marcus Thompson",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    content:
      "This template feels like a strong starting point, not something you throw away after week one.",
  },
  {
    id: 4,
    name: "Amina Yusuf",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    content:
      "We didn’t need to rethink page layouts or SEO basics. Everything important was already in place.",
  },
  {
    id: 5,
    name: "Daniel Foster",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop",
    content:
      "The consistency across sections is what stood out. It looks intentional instead of stitched together.",
  },
  {
    id: 6,
    name: "Lucía Martínez",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
    content:
      "It gave our small team confidence that the site would scale as the product evolved.",
  },
  {
    id: 7,
    name: "Michael Adeyemi",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop",
    content:
      "We were able to add new pages and sections without breaking the overall look and feel.",
  },
  {
    id: 8,
    name: "Priya Nair",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
    content:
      "It removed a lot of early decision fatigue around layout, spacing, and content hierarchy.",
  },
  {
    id: 9,
    name: "Ethan Brooks",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    content:
      "Compared to other templates we tried, this one felt calmer and more professional out of the box.",
  },
  {
    id: 10,
    name: "Fatima Al-Zahra",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    content:
      "The developer experience is solid. Files are easy to navigate and nothing feels over-engineered.",
  },
  {
    id: 11,
    name: "Alex Morgan",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    content:
      "It helped us avoid common mistakes on our first public launch, especially around structure and SEO.",
  },
  {
    id: 12,
    name: "Noah Williams",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=400&fit=crop",
    content:
      "You can tell this was designed with real SaaS websites in mind, not just demos.",
  },
  {
    id: 13,
    name: "Zainab Bello",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&fit=crop",
    content:
      "It strikes a good balance between flexibility and sensible defaults.",
  },
  {
    id: 14,
    name: "Thomas Reed",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
    content: "This saved us weeks of iteration on design and layout decisions.",
  },
  {
    id: 15,
    name: "Hannah Park",
    image:
      "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=400&h=400&fit=crop",
    content:
      "If you need a clean, modern SaaS website foundation, this gets you there fast.",
  },
];

export default function Testimonials({
  items,
  className,
  title = "Loved by Builders",
}: TestimonialsProps) {

    return (
      <MultCardTestimonials
        items={items ?? defaultCardItems}
        className={className}
        title={title}
      />
    );
  

}
