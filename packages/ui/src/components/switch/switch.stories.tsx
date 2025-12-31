import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "@metallicjs/ui/components/switch";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Switch" },
};
