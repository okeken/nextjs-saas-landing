import type { Meta, StoryObj } from "@storybook/react";
import { TrendingUp, TrendingDown, Info } from "lucide-react";

import { StatCard } from "@metallicjs/ui/components/StatCard";

const meta: Meta<typeof StatCard> = {
  title: "Components/StatCard",
  component: StatCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    icon: { control: false },
    changeColor: { control: "text" },
    boldTitle: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof StatCard>;

export const Basic: Story = {
  args: {
    title: "Total Revenue",
    value: "£12,480",
  },
};

export const WithPositiveChange: Story = {
  args: {
    title: "New Users",
    value: 324,
    change: "+8.2%",
    changeColor: "text-green-600",
    subText: "vs last week",
    icon: <TrendingUp size={18} />,
  },
};

export const WithNegativeChange: Story = {
  args: {
    title: "Churn",
    value: "3.1%",
    change: "+0.4%",
    changeColor: "text-red-600",
    subText: "week over week",
    icon: <TrendingDown size={18} />,
  },
};

export const SubtleTitle: Story = {
  args: {
    title: "Support Tickets",
    value: 58,
    boldTitle: false,
    icon: <Info size={18} />,
  },
};
