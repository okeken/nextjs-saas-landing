import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "@metallicjs/ui/components/toggle";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Toggle" },
};
