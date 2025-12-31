import { ReactNode } from "react";

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <div className="shadow-(--card-shadow) p-2 rounded-md bg-background dark:bg-popover border-2 border-card dark:border-sidebar-border">
      <div className="flex flex-col p-4 gap-2 md:gap-3 lg:gap-4 bg-card dark:bg-sidebar-border rounded-md h-full">
        {icon}
        <h4 className="font-bold sm:text-lg">{title}</h4>
        <p className="font-medium text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
