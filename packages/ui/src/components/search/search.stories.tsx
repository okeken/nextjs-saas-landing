import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import SearchInput from "@metallicjs/ui/components/search";

const meta: Meta<typeof SearchInput> = {
  title: "Components/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    placeholder: "Search...",
    onSearch: () => {},
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Input placeholder text",
    },
    onSearch: {
      action: "onSearch",
      description: "Fires on every change with the current query",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Search projects, users, tags…",
  },
};

export const ControlledDemo: Story = {
  render: (args) => {
    const [q, setQ] = React.useState("");
    return (
      <div style={{ display: "grid", gap: 8 }}>
        <SearchInput
          {...args}
          onSearch={(val) => {
            setQ(val);
            args.onSearch?.(val);
          }}
        />
        <div style={{ fontSize: 12, opacity: 0.8 }}>
          Query: <code>{q}</code>
        </div>
      </div>
    );
  },
};
