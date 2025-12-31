"use client";

import clsx from "clsx";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

import { Input } from "@metallicjs/ui/components/input";

export interface OtpInputProps {
  length?: number;
  value?: string; // controlled
  onChange?: (otp: string) => void; // fires on any change
  onComplete?: (otp: string) => void; // fires when all digits filled
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
}

export function OtpInput({
  length = 6,
  value,
  onChange,
  onComplete,
  disabled = false,
  className,
  inputClassName,
}: OtpInputProps) {
  const [internal, setInternal] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  // source of truth: controlled or uncontrolled
  const digits =
    value !== undefined
      ? value
          .split("")
          .slice(0, length)
          .concat(Array(Math.max(0, length - value.length)).fill(""))
      : internal;

  const commit = (next: string[]) => {
    if (value === undefined) setInternal(next);
    const joined = next.join("");
    onChange?.(joined);
    if (next.every((d) => d !== "")) {
      onComplete?.(joined);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text/plain") ?? "";
    const nums = pasted.replace(/\D/g, "").slice(0, length).split("");
    if (!nums.length) return;

    const next = [...digits];
    for (let i = 0; i < length; i++) {
      next[i] = nums[i] ?? next[i] ?? "";
    }
    commit(next);

    const last = Math.min(nums.length, length) - 1;
    if (last >= 0) inputRefs.current[last]?.focus();
  };

  const setAt = (index: number, val: string) => {
    const next = [...digits];
    next[index] = val;
    commit(next);
  };

  const handleChange = (index: number, raw: string) => {
    if (disabled) return;
    const digit = (raw.match(/\d/g) ?? []).pop() ?? "";
    if (!digit) {
      setAt(index, "");
      return;
    }
    setAt(index, digit);

    if (index < length - 1) {
      inputRefs.current[index + 1]?.focus();
      inputRefs.current[index + 1]?.select();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    const { key } = e;

    if (key === "Backspace") {
      if (digits[index]) {
        setAt(index, "");
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        setAt(index - 1, "");
      }
      e.preventDefault();
    } else if (key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
      e.preventDefault();
    } else if (key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
      e.preventDefault();
    }
  };

  return (
    <div
      className={clsx("flex items-center gap-2", className)}
      onPaste={handlePaste}
      role="group"
      aria-label="One-time passcode input"
    >
      {Array.from({ length }).map((_, index) => (
        <Input
          key={index}
          ref={(el: HTMLInputElement | null) => {
            inputRefs.current[index] = el; // <-- return void
          }}
          autoComplete="one-time-code"
          inputMode="numeric"
          pattern="[0-9]*"
          type="text"
          maxLength={1}
          value={digits[index] ?? ""}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onFocus={(e) => e.currentTarget.select()}
          disabled={disabled}
          aria-label={`Digit ${index + 1}`}
          className={clsx("w-10 h-12 text-center text-xl", inputClassName)}
        />
      ))}
    </div>
  );
}
