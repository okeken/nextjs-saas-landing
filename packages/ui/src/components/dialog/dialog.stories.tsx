import type { Meta, StoryObj } from "@storybook/react";

import { Dialog } from "@metallicjs/ui/components/dialog";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Dialog" },
};
