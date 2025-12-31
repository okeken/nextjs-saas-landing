import ArrowDownIcon from "@/public/assets/website/arrow-down-icon.svg";
import CalendarIcon from "@/public/assets/website/calendar-icon.svg";

const Comments = () => {
  return (
    <div className="sm:w-11/12">
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Comments</h3>

      <div className="grid gap-6">
        {Array.from({ length: 3 }).map((_, idx) => (
          <CommentCard key={idx} />
        ))}
      </div>

      <div className="flex items-center justify-center mt-4">
        <div className="shadow-[0px_1px_2px_0px_#0000000D] flex gap-2 sm:gap-3 lg:gap-4 items-center bg-card border border-sidebar text-primary-500 rounded-full p-3 px-4 md:p-4 md:px-6 font-bold cursor-pointer dark:bg-sidebar-border">
          <p>Load More</p>
          <ArrowDownIcon />
        </div>
      </div>
    </div>
  );
};

export default Comments;

const CommentCard = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-2 xs:gap-3 items-center text-sm">
        <div className="flex gap-1 items-center">
          <div className="h-8 w-8 rounded-full overflow-hidden flex justify-center items-center">
            <img src="/assets/website/author-image.png" alt="" />
          </div>
          <p className="font-bold">ken</p>
        </div>
        <div className="h-1 w-1 rounded-full bg-neutral-subtle dark:bg-surface-6"></div>
        <div className="flex gap-1 items-center text-muted-foreground">
          <CalendarIcon />
          <p>Apr 28, 2022</p>
        </div>
      </div>
      <p>
        This article really captures the energy in startup space right now. The
        funding numbers are wild! I just hope more investors also focus on
        supporting early-stage founders outside Lagos.
      </p>
    </div>
  );
};
