"use client";

import BlogHero from "./BlogHero";
import BlogPost from "./BlogPost";
import Comments from "./Comments";

const Content = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-5xl mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <BlogHero />
      <BlogPost />
      <Comments />
    </section>
  );
};

export default Content;
