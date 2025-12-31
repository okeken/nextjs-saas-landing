import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "@metallicjs/ui/components/textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Textarea" },
};
