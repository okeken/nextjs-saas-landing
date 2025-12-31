import type { Meta, StoryObj } from "@storybook/react";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@metallicjs/ui/components/toggle-group";

const meta: Meta<typeof ToggleGroup> = {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  parameters: { layout: "centered" },
  argTypes: {
    variant: { control: "radio", options: ["default", "outline", "ghost"] },
    size: { control: "radio", options: ["sm", "default", "lg"] },
    disabled: { control: "boolean" },
    className: { control: "text" },
    type: { table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    disabled: false,
  },
  render: (args) => (
    <ToggleGroup
      {...args}
      type="single"
      defaultValue={"grid"}
      aria-label="Default demo"
    >
      <ToggleGroupItem value="list">List</ToggleGroupItem>
      <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
      <ToggleGroupItem value="cards">Cards</ToggleGroupItem>
    </ToggleGroup>
  ),
};
