import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "@metallicjs/ui/components/select";

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Select" },
};
