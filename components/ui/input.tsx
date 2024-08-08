import * as React from "react";
import { TextInput } from "react-native";

import { cn } from "~/lib/utils";

const Input = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  React.ComponentPropsWithoutRef<typeof TextInput>
>(({ className, placeholderClassName, ...props }, ref) => {
  return (
    <TextInput
      ref={ref}
      className={cn(
        "rounded-md border-b border-white bg-transparent px-1 py-2 font-poppins-semibold text-2xl text-white file:border-0 file:bg-transparent file:font-medium",
        props.editable === false && "opacity-50",
        className,
      )}
      placeholderClassName={cn("text-lavender-whisper", placeholderClassName)}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
