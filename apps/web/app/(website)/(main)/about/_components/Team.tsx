const Team = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div className="flex flex-col gap-2 text-center mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Team</h1>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-2 sm:gap-4 lg:gap-8 xl:gap-10">
        <div className="shadow-(--card-shadow) p-2 rounded-md bg-background dark:bg-popover border-2 border-card dark:border-sidebar-border">
          <div className="flex flex-col gap-2 md:gap-3 h-full rounded-md">
            <div className="rounded-md h-80 bg-primary-100"></div>
            <div className="flex flex-col gap-1 bg-card dark:bg-sidebar-border rounded-md p-2 md:p-3 font-bold">
              <h4 className="text-lg sm:text-xl lg:text-2xl">John Esho</h4>
              <p className="text-muted-foreground lg:text-lg">CEO</p>
            </div>
          </div>
        </div>

        <div className="shadow-(--card-shadow) p-2 rounded-md bg-background dark:bg-popover border-2 border-card dark:border-sidebar-border">
          <div className="flex flex-col gap-2 md:gap-3 h-full rounded-md">
            <div className="rounded-md h-80 bg-primary-100"></div>
            <div className="flex flex-col gap-1 bg-card dark:bg-sidebar-border rounded-md p-2 md:p-3 font-bold">
              <h4 className="text-lg sm:text-xl lg:text-2xl">John Esho</h4>
              <p className="text-muted-foreground lg:text-lg">CEO</p>
            </div>
          </div>
        </div>

        <div className="shadow-(--card-shadow) p-2 rounded-md bg-background dark:bg-popover border-2 border-card dark:border-sidebar-border">
          <div className="flex flex-col gap-2 md:gap-3 h-full rounded-md">
            <div className="rounded-md h-80 bg-primary-100"></div>
            <div className="flex flex-col gap-1 bg-card dark:bg-sidebar-border rounded-md p-2 md:p-3 font-bold">
              <h4 className="text-lg sm:text-xl lg:text-2xl">John Esho</h4>
              <p className="text-muted-foreground lg:text-lg">CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
