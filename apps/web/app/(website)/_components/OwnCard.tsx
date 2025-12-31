import { ReactNode } from "react";

interface OwnCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  descriptionDarkClassName?: "" | "dark:text-popover";
}

const OwnCard = ({
  icon,
  title,
  description,
  descriptionDarkClassName = "",
}: OwnCardProps) => {
  return (
    <div className="p-4 flex flex-col items-center gap-2 lg:gap-3 rounded-md text-center">
      {icon}
      <h4 className="font-bold sm:text-lg">{title}</h4>
      <p
        className={`font-medium text-xs sm:text-sm text-muted-foreground ${descriptionDarkClassName}`}
      >
        {description}
      </p>
    </div>
  );
};

export default OwnCard;
