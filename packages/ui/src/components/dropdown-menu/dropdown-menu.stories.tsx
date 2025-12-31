import type { Meta, StoryObj } from "@storybook/react";

import { DropdownMenu } from "@metallicjs/ui/components/dropdown-menu";

const meta = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "DropdownMenu" },
};
