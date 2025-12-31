import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@metallicjs/ui/components/badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  args: { children: "Badge" },
  tags: ["autodocs"],
  parameters: { controls: { sort: "requiredFirst" } },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { variant: "default" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Success: Story = { args: { variant: "success" } };
export const Warning: Story = { args: { variant: "warning" } };
export const Danger: Story = { args: { variant: "danger" } };

export const Matrix: Story = {
  name: "Visual Matrix",
  parameters: { chromatic: { disableSnapshot: false } },
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {(
        [
          "default",
          "secondary",
          "outline",
          "success",
          "warning",
          "danger",
        ] as const
      ).map((variant) => (
        <div
          key={variant}
          className="flex flex-col gap-2 p-3 rounded-md border"
        >
          <div className="text-xs text-muted-foreground">{variant}</div>
          <div className="flex gap-2 flex-wrap">
            <Badge variant={variant}>Badge</Badge>
            <Badge variant={variant}>Another</Badge>
          </div>
        </div>
      ))}
    </div>
  ),
};
