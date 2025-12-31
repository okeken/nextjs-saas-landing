"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@metallicjs/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@metallicjs/ui/components/dropdown-menu";

interface IProps {
  onModeChange?: () => void;
}
export function ThemeSwitcher({ onModeChange }: IProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) onModeChange?.();
    return setMounted(true);
  }, [theme]);

  // Avoid SSR mismatch: render a neutral icon until mounted
  const Icon = useMemo(() => {
    if (!mounted) return Monitor; // neutral while hydrating
    if (theme === "system") return Monitor;
    return (resolvedTheme ?? theme) === "dark" ? Moon : Sun;
  }, [mounted, theme, resolvedTheme]);

  const label = !mounted
    ? "Theme"
    : theme === "system"
    ? "System"
    : (resolvedTheme ?? theme) === "dark"
    ? "Dark"
    : "Light";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label={`Current theme: ${label}`}
        >
          <Icon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={6}>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
