import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="px-4 md:px-8 lg:px-12 max-w-5xl mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
        {children}
      </section>
    </>
  );
};

export default Layout;
