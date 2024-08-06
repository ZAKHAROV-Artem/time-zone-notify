import * as React from "react";
import { Pressable } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";
import { TextClassContext } from "~/components/ui/text";

const buttonVariants = cva(
  "group flex items-center justify-center rounded-full shadow-md shadow-slate-grey",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "px-7 py-5",
        large: "w-full py-6",
      },
      variant: {
        default: "bg-pale-sky",
        selected: "bg-white",
        violet: "bg-royal-violet",
      },
    },
  },
);

const buttonTextVariants = cva("text-base", {
  defaultVariants: {
    size: "default",
    variant: "default",
  },
  variants: {
    size: {
      default: "",
      large: "text-xl font-bold",
    },
    variant: {
      default: "text-twilight-shadow",
      selected: "font-bold text-twilight-shadow",
      violet: "font-bold text-white",
    },
  },
});

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  ButtonProps
>(({ className, size, variant, ...props }, ref) => {
  return (
    <TextClassContext.Provider
      value={cn(buttonTextVariants({ size, variant }))}
    >
      <Pressable
        className={cn(
          props.disabled && "opacity-50",
          buttonVariants({ className, size, variant }),
        )}
        ref={ref}
        role="button"
        {...props}
      />
    </TextClassContext.Provider>
  );
});
Button.displayName = "Button";

export { Button, buttonVariants, buttonTextVariants };
export type { ButtonProps };
