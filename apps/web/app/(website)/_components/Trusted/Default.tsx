"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { cn } from "@metallicjs/ui/lib/utils";
import type { Partner } from "./data";

export default function MarqueeCenter({
  partners,
  className,
  heading,
}: {
  partners: Partner[];
  className?: string;
  heading?: React.ReactNode;
}) {
  const logos = partners;


  return (
   <>
    <section
      className={cn(
        "dark:bg-gray-200 lg:py-10 md:py-10   py-6",
        className
      )}
    >    
   <div className="px-4  lg:px-12 max-w-[1440px] mx-auto py-8 lg:py-14  md:py-12">
       <div className="flex flex-col mb-6 md:mb-10 lg:mb-14 gap-4 md:gap-6">
        <div className="flex items-center justify-center">
          <p className="text-primary-700 rounded-full py-2 px-3 font-bold text-xs sm:text-sm lg:text-base bg-primary-100 lg:mb-4">
            {heading ?? "WE ARE TRUSTED BY"}
          </p>
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center dark:text-popover">
          Our Partners
        </h3>
      </div>

      {/* Mobile marquee */}
      <div className="relative overflow-hidden sm:hidden mt-6">
        <Marquee pauseOnHover speed={28} gradient={true}>
          {logos.concat(logos).map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="shrink-0 mx-6">
          
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Desktop grid */}
      <div className="hidden sm:grid grid-cols-5 gap-4 xl:gap-6 items-center mt-10">
        {logos.map((partner, index) => {
          
            return  (
          <div
            key={`${partner.name}-${index}`}
            className="flex items-center justify-center"
          >  
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        )
        }
        )}
      </div>
   </div>
    </section>
   </>
  );
}


