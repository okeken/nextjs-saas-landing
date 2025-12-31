import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "@metallicjs/ui/components/card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Card" },
};
