import type { Meta, StoryObj } from "@storybook/react";

import { Calendar } from "@metallicjs/ui/components/calendar";

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Calendar" },
};
