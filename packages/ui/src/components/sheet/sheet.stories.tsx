import type { Meta, StoryObj } from "@storybook/react";

import { Sheet } from "@metallicjs/ui/components/sheet";

const meta = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Sheet" },
};
