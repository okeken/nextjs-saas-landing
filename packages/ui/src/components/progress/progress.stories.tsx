import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "@metallicjs/ui/components/progress";

const meta = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Progress" },
};
