"use client";

import { Button } from "@metallicjs/ui/components/button";

import MailIcon from "@/public/assets/website/mail-icon.svg";
import UserIcon from "@/public/assets/website/user-icon.svg";
import FacebookLogo from "@/public/assets/website/facebook-logo.svg";
import InstagramLogo from "@/public/assets/website/instagram-logo.svg";
import LinkedinLogo from "@/public/assets/website/linkedin-logo.svg";
import TwitterLogo from "@/public/assets/website/twitter-logo.svg";

const Hero = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div className="flex flex-col gap-2 text-center mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Have questions? We’re just <br className="hidden xs:block" /> a
          message away
        </h1>
      </div>

      <div className="max-w-5xl mx-auto grid xs:grid-cols-2 gap-4 md:gap-8">
        <div className="p-2 rounded-md bg-background dark:bg-sidebar-border">
          <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 h-full p-4 md:p-6 lg:p-8 bg-card dark:bg-popover rounded-md border-surface-4 dark:border-surface-8 border-[0.5px]">
            <MailIcon />
            <h4 className="font-bold sm:text-lg">Send us an email</h4>
            <p className="font-medium text-sm text-muted-foreground">
              Plan little description of 2 max line
            </p>
            <div className="mt-1">
              <Button>Send mail</Button>
            </div>
          </div>
        </div>
        <div className="p-2 rounded-md bg-background dark:bg-sidebar-border">
          <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 h-full p-4 md:p-6 lg:p-8 bg-card dark:bg-popover rounded-md border-surface-4 dark:border-surface-8 border-[0.5px]">
            <UserIcon />
            <h4 className="font-bold sm:text-lg">Socials</h4>
            <p className="font-medium text-sm text-muted-foreground">
              Plan little description of 2 max line
            </p>
            <div className="flex gap-2 sm:gap-3 md:gap-4 items-center mt-1">
              <FacebookLogo />
              <TwitterLogo />
              <LinkedinLogo />
              <InstagramLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
