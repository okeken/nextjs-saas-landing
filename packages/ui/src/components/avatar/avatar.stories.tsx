import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@metallicjs/ui/components/avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Avatar" },
};
