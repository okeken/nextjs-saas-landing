"use client";

import { ReactNode } from "react";

import { Card, CardContent } from "../card";

interface StatCardProps {
  icon?: ReactNode;
  title: string;
  value: string | number;
  change?: string;
  changeColor?: string;
  subText?: string;
  boldTitle?: boolean;
}

export default function StatCard({
  icon,
  title,
  value,
  change,
  changeColor = "text-slate-500",
  subText = "this week",
  boldTitle = true,
}: StatCardProps) {
  return (
    <Card interactive className="shadow-sm w-full flex-1">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center space-x-2">
          {icon && <div className="">{icon}</div>}
          <div className={boldTitle ? "font-medium " : ""}>{title}</div>
        </div>
        <div className="text-3xl font-bold">{value}</div>
        {change && (
          <div className="text-sm flex items-center space-x-1">
            <span className={`${changeColor} font-medium`}>{change}</span>
            <span className="text-neutral-subtle">{subText}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export { StatCard };
