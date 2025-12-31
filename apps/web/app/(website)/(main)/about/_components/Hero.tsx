const Hero = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div className="flex flex-col gap-2 text-center mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">About Us</h1>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col gap-4 justify-center max-w-[700px] mx-auto">
            <h4 className="font-bold text-lg sm:text-xl">
              Header Description Goes Here
            </h4>

            <p>
              A streamlined CMS that integrates directly into your workflow. No
              plugins, no external panels. Editors enjoy a rich editing
              experience, while developers work with familiar Markdown. Unified
              content model, zero headaches.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img src="/assets/website/works-dashboard.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
