import type { Meta, StoryObj } from "@storybook/react";
import { HeartIcon } from "lucide-react";

import { Button } from "@metallicjs/ui/components/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: { children: "Click me" },
  tags: ["autodocs"],
  parameters: { controls: { sort: "requiredFirst" } },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: "default", size: "default" } };
export const Destructive: Story = { args: { variant: "destructive" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Link: Story = { args: { variant: "link" } };

export const Sizes: Story = {
  render: (args: any) => (
    <div className="flex items-center gap-3">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="default">
        Default
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="icon" aria-label="Icon">
        <HeartIcon />
      </Button>
    </div>
  ),
};

export const Matrix: Story = {
  name: "Visual Matrix",
  parameters: { chromatic: { disableSnapshot: false } },
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      {(
        [
          "default",
          "destructive",
          "outline",
          "secondary",
          "ghost",
          "link",
        ] as const
      ).map((variant) => (
        <div
          key={variant}
          className="flex flex-col gap-2 p-3 rounded-md border"
        >
          <div className="text-xs text-muted-foreground">{variant}</div>
          <div className="flex gap-2">
            <Button variant={variant}>Default</Button>
            <Button variant={variant} disabled>
              Disabled
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant={variant} size="sm">
              Small
            </Button>
            <Button variant={variant} size="lg">
              Large X
            </Button>
          </div>
        </div>
      ))}
    </div>
  ),
};
