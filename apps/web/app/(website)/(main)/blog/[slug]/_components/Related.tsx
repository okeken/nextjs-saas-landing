// import BlogCard from "../../_components/BlogCard";

const Related = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:pb-12 lg:pb-14">
      <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10">
        Related Posts
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 xl:gap-12 my-8 md:my-10">
        {/* {Array.from({ length: 3 }).map((_, idx) => (
          <BlogCard id={idx} key={idx} />
        ))} */}
      </div>
    </section>
  );
};

export default Related;
