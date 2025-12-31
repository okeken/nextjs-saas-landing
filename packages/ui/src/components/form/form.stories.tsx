import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@metallicjs/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@metallicjs/ui/components/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@metallicjs/ui/components/form";
import { Input } from "@metallicjs/ui/components/input";
import { Switch } from "@metallicjs/ui/components/switch";

// ----- Schema & Types -------------------------------------------------
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  newsletter: z.boolean().default(false),
});

type FormValues = z.infer<typeof schema>;

// ----- Reusable Demo Form --------------------------------------------
type DemoProps = {
  disabled?: boolean;
  simulateServerError?: boolean;
  showDescription?: boolean;
  defaultValues?: Partial<FormValues>;
};

function Demo({
  disabled,
  simulateServerError,
  showDescription,
  defaultValues,
}: DemoProps) {
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      newsletter: false,
      ...defaultValues,
    },
  });

  const [submitting, setSubmitting] = React.useState(false);

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    if (simulateServerError) {
      methods.setError("email", {
        type: "server",
        message: "This email is already in use.",
      });
    } else {
      // noop success for demo
    }
    setSubmitting(false);
  };

  return (
    <Card className="w-[420px]">
      <CardHeader>
        <CardTitle>Account Setup</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="space-y-4"
            aria-busy={submitting}
          >
            {/* Name */}
            <FormField
              control={methods.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Jane Doe"
                      disabled={disabled || submitting}
                      {...field}
                    />
                  </FormControl>
                  {showDescription && (
                    <FormDescription>Your public display name.</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={methods.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="jane@example.com"
                      disabled={disabled || submitting}
                      {...field}
                    />
                  </FormControl>
                  {showDescription && (
                    <FormDescription>
                      We’ll send confirmations here.
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={methods.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      disabled={disabled || submitting}
                      {...field}
                    />
                  </FormControl>
                  {showDescription && (
                    <FormDescription>Minimum 6 characters.</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Newsletter (boolean) */}
            <FormField
              control={methods.control}
              name="newsletter"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Subscribe to newsletter</FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        disabled={disabled || submitting}
                        aria-label="Subscribe to newsletter"
                      />
                    </FormControl>
                  </div>
                  {showDescription && (
                    <FormDescription>
                      Occasional tips and product updates.
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center gap-2 pt-2">
              <Button type="submit" disabled={disabled || submitting}>
                {submitting ? "Submitting…" : "Create account"}
              </Button>
              <Button
                type="button"
                variant="secondary"
                disabled={disabled || submitting}
                onClick={() => methods.reset()}
              >
                Reset
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

// ----- Storybook Meta -------------------------------------------------
const meta = {
  title: "Components/Form",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Foundation primitives for building accessible forms with **react-hook-form**. " +
          "`Form` wraps `FormProvider`. Use `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, and `FormMessage` to compose fields. " +
          "Errors from RHF are surfaced via `FormMessage`. Accessibility attributes (aria-invalid/aria-describedby) are wired automatically.",
      },
    },
  },
  // Helps Docs list each part on the page
  subcomponents: {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
  },
  argTypes: {
    // Form itself only accepts children; hide noisy controls
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----- Stories --------------------------------------------------------

export const Basic: Story = {
  name: "Basic (zod validation)",
  render: () => <Demo showDescription />,
};

export const ErrorStates: Story = {
  name: "Server error example",
  render: () => (
    <Demo simulateServerError defaultValues={{ email: "taken@example.com" }} />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates how server-side errors can be injected using `setError`, which then flows into `FormMessage` automatically.",
      },
    },
  },
};

export const Disabled: Story = {
  render: () => <Demo disabled showDescription />,
  parameters: {
    docs: {
      description: {
        story: "All inputs disabled to showcase readonly/blocked UI states.",
      },
    },
  },
};

export const NoDescriptions: Story = {
  render: () => <Demo showDescription={false} />,
  parameters: {
    docs: {
      description: { story: "Compact layout without field descriptions." },
    },
  },
};
