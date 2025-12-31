import type { Meta, StoryObj } from "@storybook/react";

import { ThemeSwitcher } from "@metallicjs/ui/components/theme-switcher";

const meta = {
  title: "Components/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "ThemeSwitcher" },
};
