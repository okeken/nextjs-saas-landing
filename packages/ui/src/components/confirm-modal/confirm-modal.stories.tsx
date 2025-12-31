// ConfirmModal.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "@metallicjs/ui/components/button";
import { ConfirmModal } from "@metallicjs/ui/components/confirm-modal";

const ICON_DATA =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#FEE2E2"/>
      <path d="M12 7v6m0 4h.01" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  );

const meta = {
  title: "Components/ConfirmModal",
  component: ConfirmModal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Confirmation dialog for destructive/important actions. Disables confirm while `onConfirm` runs.",
      },
    },
  },
  argTypes: {
    onOpenChange: { table: { disable: true } },
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

function Wrapper(props: React.ComponentProps<typeof ConfirmModal>) {
  const [open, setOpen] = React.useState(!!props.open);
  React.useEffect(() => setOpen(!!props.open), [props.open]);

  return (
    <div className="space-y-4">
      <Button onClick={() => setOpen(true)}>Open confirm</Button>
      <ConfirmModal {...props} open={open} onOpenChange={setOpen} />
    </div>
  );
}

export const Default: Story = {
  render: (args) => <Wrapper {...args} />,
  args: {
    open: false,
    title: "Refund payment?",
    bodyText: "Are you sure you want to refund this payment?",
    hasVariantColour: false,
    onConfirm: async () => {
      await delay(1200);
    },
  },
};

export const WithVariantColour: Story = {
  render: (args) => <Wrapper {...args} />,
  args: {
    ...Default.args,
    hasVariantColour: true,
    title: "Delete customer?",
    bodyText: "This will permanently remove the customer and related data.",
  },
};

export const OpenInitially: Story = {
  render: (args) => <Wrapper {...args} />,
  args: { ...Default.args, open: true },
};

export const FailingConfirm: Story = {
  render: (args) => <Wrapper {...args} />,
  args: {
    ...Default.args,
    title: "Failing confirm (demo)",
    bodyText: "The confirm action will reject; the modal will stay open.",
    onConfirm: async () => {
      await delay(800);
      throw new Error("Server said no.");
    },
  },
};
