"use client";

import { Button } from "@metallicjs/ui/components/button";

const Message = () => {
  return (
    <section className="px-4 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div className="flex flex-col gap-2 text-center mb-6 md:mb-10 max-w-5xl mx-auto">
        <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold">
          Send a Message
        </h3>
      </div>

      <div className="max-w-xl lg:max-w-2xl mx-auto bg-background dark:bg-sidebar-border rounded-md p-6 flex flex-col gap-6 sm:gap-8">
        <div className="grid gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-bold text-sm">
              Name <span className="text-error-800">*</span>
            </label>
            <input
              name="name"
              id="name"
              placeholder="Enter your name"
              className="border border-surface-4 dark:border-surface-8 rounded-sm bg-card p-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-bold text-sm">
              Email Address <span className="text-error-800">*</span>
            </label>
            <input
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="border border-surface-4 dark:border-surface-8 rounded-sm bg-card p-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="font-bold text-sm">
              Message <span className="text-error-800">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter a brief message"
              className="border border-surface-4 dark:border-surface-8 rounded-sm bg-card p-2 resize-none"
            ></textarea>
          </div>
          <Button className="mt-4">Submit</Button>
        </div>
      </div>
    </section>
  );
};

export default Message;
