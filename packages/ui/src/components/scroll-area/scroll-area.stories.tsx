import type { Meta, StoryObj } from "@storybook/react";

import { ScrollArea } from "@metallicjs/ui/components/scroll-area";

const meta = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "ScrollArea" },
};
