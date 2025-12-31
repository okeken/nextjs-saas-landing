"use client";

import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

import { Input } from "@metallicjs/ui/components/input";
import { cn } from "@metallicjs/ui/lib/utils";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}
export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ className, fullWidth, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`relative ${fullWidth && "w-full"}`}>
      <Input
        type={showPassword ? "text" : "password"}
        className={cn("pr-10", className)}
        ref={ref}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-muted-foreground focus:outline-none"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <EyeOff className="w-4 h-4" />
        ) : (
          <Eye className="w-4 h-4" />
        )}
      </button>
    </div>
  );
});
PasswordInput.displayName = "PasswordInput";
