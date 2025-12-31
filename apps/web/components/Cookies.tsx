"use client";

import { useState } from "react";

import { Button } from "@metallicjs/ui/components/button";

import CookiesIcon from "@/public/assets/website/cookies-icon.svg";

const Cookies = () => {
  const [show, setShow] = useState(true);

  if (show)
    return (
      <div className="fixed bottom-8 right-4 z-50 p-4 flex flex-col gap-3 max-w-96 bg-card dark:bg-background rounded-xl">
        <CookiesIcon />
        <div className="flex flex-col gap-2 text-sm">
          <div>
            <h4 className="font-bold">Cookie Statement</h4>
            <p className="text-muted-foreground">
              Please note that we take your privacy seriously and only process
              your personal information. Your continued use of this platform
              indicates that you consent to the processing of your data by
              MetallicJS.
            </p>
          </div>
          <p className="text-muted-foreground">
            Our site also uses cookies to enhance your experience on this
            platform. You can modify your preference using the option below.
            Please read our Cookie Policy for more information.
          </p>
        </div>
        <Button size="sm" onClick={() => setShow(false)}>
          Accept
        </Button>
      </div>
    );

  return null;
};

export default Cookies;
