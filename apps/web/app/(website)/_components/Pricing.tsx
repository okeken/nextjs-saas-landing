"use client";

import { useState } from "react";

import { Button } from "@metallicjs/ui/components/button";

import CheckIcon from "@/public/assets/website/black-check-icon.svg";

const MONTHLY = "MONTHLY",
  ANNUALLY = "ANNUALLY";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState(MONTHLY);

  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div className="flex flex-col gap-2 lg:gap-4 text-center mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Pricing</h1>
        <p className="text-sm sm:text-base font-medium text-muted-foreground">
          Flexible plans designed to scale with your business. Enjoy all
          features. Cancel or switch
          <br className="hidden sm:block" /> plans anytime.
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-6 md:gap-10 lg:gap-14 xl:gap-16">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 xsm:gap-2 bg-background dark:bg-sidebar-border p-1 lg:p-2 rounded-md text-xs sm:text-sm md:text-base font-medium">
            <div
              className={`cursor-pointer flex items-center justify-center rounded-md p-2 md:p-3 lg:p-4 ${
                activeTab === MONTHLY ? "bg-card" : "text-muted-foreground"
              }`}
              onClick={() => setActiveTab(MONTHLY)}
            >
              <p>Pay Monthly</p>
            </div>
            <div
              className={`cursor-pointer flex items-center gap-1 rounded-md p-2 md:p-3 lg:p-4 ${
                activeTab === ANNUALLY ? "bg-card" : "text-muted-foreground"
              }`}
              onClick={() => setActiveTab(ANNUALLY)}
            >
              <p>Pay Annually</p>
              <p className="bg-primary-400 text-white text-xs px-1 xs:px-3 py-1 rounded-full">
                15% off
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-3 lg:gap-6 xl:gap-8">
          <div className="flex items-center justify-center">
            <div className="xs:min-w-[380px] md:min-w-auto p-3 md:p-2 lg:p-3 pt-4 rounded-md bg-background dark:bg-sidebar-border">
              <div className="flex flex-col gap-2 items-center p-5 md:p-4 lg:p-7 bg-card rounded-md dark:border-muted-foreground border-[0.5px]">
                <div className="border-b flex flex-col gap-4 lg:gap-6 pb-8 lg:pb-10 w-full">
                  <div className="flex flex-col gap-4">
                    <p className="font-medium md:text-lg">Indie</p>
                    {activeTab === MONTHLY ? (
                      <h4 className="font-bold text-2xl md:text-3xl flex items-center gap-1">
                        $19.99
                        <span className="text-base font-medium text-muted-foreground">
                          /monthly
                        </span>
                      </h4>
                    ) : (
                      <h4 className="font-bold text-2xl md:text-3xl flex items-center gap-1">
                        $199
                        <span className="text-base font-medium text-muted-foreground">
                          /lifetime
                        </span>
                      </h4>
                    )}
                  </div>
                  <div className="text-muted-foreground ">
                    For solo founders and prototypes.
                  </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                  <Button
                    className="w-full bg-card dark:bg-sidebar-border mt-2"
                    variant={"outline"}
                  >
                    Get Indie
                  </Button>
                  <div className="flex flex-col gap-4 text-muted-foreground ">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>All core modules</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>CLI codegen + OpenAPI</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Connect your preferred payment provider</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="xs:min-w-[380px] md:min-w-auto p-2 pt-5 rounded-md bg-[linear-gradient(179.56deg,var(--primary-100)_0.38%,var(--primary-700)_213.76%)] relative">
              <span className="absolute -top-3 -right-12 -translate-x-1/2 bg-primary-400 text-white text-xs px-3 py-1 rounded-full">
                🔥 Recommended
              </span>
              <div className="flex flex-col gap-2 items-center p-5 md:p-4 lg:p-7 bg-card dark:bg-sidebar-border rounded-md border-[0.5px] border-primary-700">
                <div className="border-b flex flex-col gap-4 lg:gap-6 pb-8 lg:pb-10 w-full">
                  <div className="flex flex-col gap-4">
                    <p className="font-medium md:text-lg">Pro</p>
                    {activeTab === MONTHLY ? (
                      <h4 className="font-bold text-2xl md:text-3xl flex items-center gap-1">
                        $19.99
                        <span className="text-base font-medium text-muted-foreground">
                          /monthly
                        </span>
                      </h4>
                    ) : (
                      <h4 className="font-bold text-2xl md:text-3xl flex items-center gap-1">
                        $249
                        <span className="text-base font-medium text-muted-foreground">
                          /lifetime
                        </span>
                      </h4>
                    )}
                  </div>
                  <div className="text-muted-foreground ">
                    For growing products and teams.
                  </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                  <Button className="w-full mt-2">Get Pro</Button>
                  <div className="flex flex-col gap-4 text-muted-foreground ">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Everything in Indie</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Tenancy-based architecture</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Fine-grained Role-Based Access Control (RBAC)</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Priority Updates</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>API-key scoped permissions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="xs:min-w-[380px] md:min-w-auto p-3 md:p-2 lg:p-3 pt-4 rounded-md bg-background dark:bg-sidebar-border">
              <div className="flex flex-col gap-2 items-center p-5 md:p-4 lg:p-7 bg-card rounded-md dark:border-muted-foreground border-[0.5px]">
                <div className="border-b flex flex-col gap-4 lg:gap-6 pb-8 lg:pb-10 w-full">
                  <div className="flex flex-col gap-4">
                    <p className="font-medium md:text-lg">Agency</p>
                    {activeTab === MONTHLY ? (
                      <h4 className="font-bold text-2xl md:text-3xl flex items-center gap-1">
                        $19.99
                        <span className="text-base font-medium text-muted-foreground">
                          /monthly
                        </span>
                      </h4>
                    ) : (
                      <h4 className="font-bold text-2xl md:text-3xl flex items-center gap-1">
                        $499
                        <span className="text-base font-medium text-muted-foreground">
                          /lifetime
                        </span>
                      </h4>
                    )}
                  </div>
                  <div className="text-muted-foreground ">
                    For agencies shipping multiple SaaS.
                  </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                  <Button
                    className="w-full bg-card dark:bg-sidebar-border mt-2"
                    variant={"outline"}
                  >
                    Contact Sales
                  </Button>
                  <div className="flex flex-col gap-4 text-muted-foreground ">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Unlimited client projects</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>card‑label UI tokens</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="shrink-0" />
                      <p>Commercial support channel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
