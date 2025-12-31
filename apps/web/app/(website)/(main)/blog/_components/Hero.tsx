const Hero = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14">
      <div className="flex flex-col gap-2 lg:gap-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Blogs</h1>
        <p className="text-sm sm:text-base font-medium text-muted-foreground">
          Don’t miss the stories, ideas, and trends everyone’s talking about
        </p>
      </div>
    </section>
  );
};

export default Hero;
