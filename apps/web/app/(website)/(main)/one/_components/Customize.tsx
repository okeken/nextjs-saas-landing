import TextGrid from "@/app/(website)/_components/TextGridCard";

import {
  themeTokensData,
  modularArchitectureData,
  deployData,
} from "@/lib/text-data";

const customizeData = [themeTokensData, modularArchitectureData, deployData];

const Customize = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div className="flex flex-col gap-2 text-center mb-8 md:mb-12 lg:mb-16">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Customize deeply. Deploy in one click.
        </h3>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20 xl:gap-24">
        {customizeData.map((section, i) => (
          <TextGrid
            key={i}
            title={section.title}
            image={section.image}
            items={section.items}
            reverse={section.reverse}
          />
        ))}
      </div>
    </section>
  );
};

export default Customize;
