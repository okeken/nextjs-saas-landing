import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@metallicjs/ui/components/label";

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Label" },
};
