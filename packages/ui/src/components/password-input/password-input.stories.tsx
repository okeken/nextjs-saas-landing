import type { Meta, StoryObj } from "@storybook/react";

import { PasswordInput } from "@metallicjs/ui/components/password-input";

const meta = {
  title: "Components/PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "PasswordInput" },
};
