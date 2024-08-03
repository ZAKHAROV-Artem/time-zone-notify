import type { LucideIcon } from "lucide-react-native";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cssInterop } from "nativewind";

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
