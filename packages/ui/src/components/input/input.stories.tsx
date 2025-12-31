import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@metallicjs/ui/components/input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Input" },
};
