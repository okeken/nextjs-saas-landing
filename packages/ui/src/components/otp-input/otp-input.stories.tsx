import type { Meta, StoryObj } from "@storybook/react";

import { OtpInput } from "@metallicjs/ui/components/otp-input";

const meta = {
  title: "Components/OtpInput",
  component: OtpInput,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OtpInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "OtpInput" },
};
