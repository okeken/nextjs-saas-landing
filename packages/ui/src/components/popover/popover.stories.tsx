import type { Meta, StoryObj } from "@storybook/react";

import { Popover } from "@metallicjs/ui/components/popover";

const meta = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Popover" },
};
