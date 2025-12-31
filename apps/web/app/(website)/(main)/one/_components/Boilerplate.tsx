const Boilerplate = () => {
  return (
    <section className="bg-primary-100 py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto relative">
        <div className="absolute -right-44 -top-10 xs:-right-40 sm:-right-30 md:-right-20 lg:right-8 xl:right-16">
          <img src="/assets/website/floating-dashboard.webp" alt="" />
        </div>

        <div className="text-center flex flex-col gap-4 xsm:w-[90%] xs:w-4/5 mx-auto">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold md:w-4/5 mx-auto dark:text-popover">
            Stop rebuilding the same
            <br className="hidden xs:block" /> SaaS marketing pages.
          </h3>

          <p className="text-xs sm:text-sm lg:text-base font-medium md:w-[90%] lg:w-[85%] mx-auto dark:text-popover">
            Landing pages, pricing, blog, and docs
            <br />
            are the same for every SaaS.
            <br className="hidden lg:block" />
            This template gives you a clean, SEO-ready foundation so you can
            focus on your product.
          </p>
        </div>

        <div className="absolute hidden md:block -bottom-20 -left-18 lg:-bottom-12 lg:left-0 xl:left-14">
          <img src="/assets/website/floating-dashboard.webp" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Boilerplate;
