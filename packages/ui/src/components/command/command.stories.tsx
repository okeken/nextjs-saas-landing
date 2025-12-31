import type { Meta, StoryObj } from "@storybook/react";

import { Command } from "@metallicjs/ui/components/command";

const meta = {
  title: "Components/Command",
  component: Command,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Command" },
};
