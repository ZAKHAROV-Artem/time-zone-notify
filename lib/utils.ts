import type { LucideIcon } from "lucide-react-native";

import { cssInterop } from "nativewind";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function iconWithClassName(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
      target: "style",
    },
  });
}
