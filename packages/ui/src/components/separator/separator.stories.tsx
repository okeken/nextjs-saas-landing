import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "@metallicjs/ui/components/separator";

const meta = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Separator" },
};
