import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "@metallicjs/ui/components/modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Modal" },
};
