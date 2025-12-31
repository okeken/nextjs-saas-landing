const Demo = ({ coloredBg = false }: { coloredBg?: boolean }) => {
  return (
    <section
      className={`py-8 md:py-10 my-6 md:my-10 ${
        coloredBg ? "bg-background dark:bg-sidebar-border" : ""
      }`}
    >
      <div className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto ">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10">
          Demo
        </h3>
        <div>
          <img src="/assets/website/hero.webp" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Demo;
