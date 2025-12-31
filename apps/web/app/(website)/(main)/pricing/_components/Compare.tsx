"use client";

import { CheckCircle2 as TickLogo } from "lucide-react";

const Compare = () => {
  return (
    <section className="max-w-5xl mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div className="flex flex-col gap-2 text-center mb-6 md:mb-10 lg:mb-14 xl:mb-16 max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold">Compare Plans</h3>
        <p className="text-sm sm:text-base font-medium text-muted-foreground">
          Flexible plans designed to scale with your business. Enjoy all
          features. Cancel or switch
          <br className="hidden sm:block" /> plans anytime.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="overflow-hidden min-w-[500px]">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold mb-4 md:mb-6">
            <h3 className="md:text-xl lg:text-2xl md:col-span-2">Capability</h3>
            <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-sm md:text-base text-center">
              <h4>Core</h4>
              <h4>Pro</h4>
              <h4>Agency</h4>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
            <h4 className="text-[13px] md:text-base md:col-span-2">
              Auth + MFA + Backup Codes
            </h4>
            <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
                <p>Built‑in</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
            <h4 className="text-[13px] md:text-base md:col-span-2">
              ATeams & RBAC
            </h4>
            <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
                <p>Basic roles & invites</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
                <p>Fine-grained RBAC</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
                <p>Full control</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
            <h4 className="text-[13px] md:text-base md:col-span-2">
              Organizations / Multi-Vendor Support
            </h4>
            <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
              <div className="flex items-center justify-center gap-2">-</div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
            <h4 className="text-[13px] md:text-base md:col-span-2">
              API-Key Scoped Permissions
            </h4>
            <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
              <div className="flex items-center justify-center gap-2">-</div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
            <h4 className="text-[13px] md:text-base md:col-span-2">
              CLI Codegen (Prisma → Zod → API → OpenAPI)
            </h4>
            <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
            <h4 className="text-[13px] md:text-base md:col-span-2">
              Billing (plans, trials, usage, seats)
            </h4>
            <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
                <p>Stripe & Lemon Squeezy</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
            <h4 className="text-[13px] md:text-base md:col-span-2">
              CMS (Blog, Docs, Changelog)
            </h4>
            <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
            <h4 className="text-[13px] md:text-base md:col-span-2">
              React Email Templates (auth, billing, lifecycle)
            </h4>
            <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
            <h4 className="text-[13px] md:text-base md:col-span-2">
              Polished UI (forms, tables, modals, checkout)
            </h4>
            <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
                <p>White-label ready</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
            <h4 className="text-[13px] md:text-base md:col-span-2">
              Design Tokens & Branding
            </h4>
            <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
                <p>Basic theme vars</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
                <p>Full code branding</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
            <h4 className="text-[13px] md:text-base md:col-span-2">
              E2E Tests + Fixtures
            </h4>
            <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
            <h4 className="text-[13px] md:text-base md:col-span-2">
              Custom Feature Requests
            </h4>
            <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
              <div className="flex items-center justify-center gap-2">-</div>
              <div className="flex items-center justify-center gap-2">-</div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
                <p>Priority access</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
            <h4 className="text-[13px] md:text-base md:col-span-2">
              Priority Support
            </h4>
            <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
              <div className="flex items-center justify-center gap-2">-</div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
                <p>Updates & roadmap</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <TickLogo className="text-primary scale-80" />
                <p>Email + Slack</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
            <h4 className="text-[13px] md:text-base md:col-span-2">
              License & Usage
            </h4>
            <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
              <div className="flex items-center justify-center gap-2">
                <p>One-time use across all your projects</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <p>Same</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <p>Same + white-label rights</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
            <h4 className="text-[13px] md:text-base md:col-span-2">
              Price (one-time)
            </h4>
            <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
              <div className="flex items-center justify-center gap-2">
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl">
                  $199
                </h3>
              </div>
              <div className="flex items-center justify-center gap-2">
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl">
                  $249
                </h3>
              </div>
              <div className="flex items-center justify-center gap-2">
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl">
                  $499
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compare;
