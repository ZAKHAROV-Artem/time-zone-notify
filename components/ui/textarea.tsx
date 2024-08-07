import * as React from "react";
import { TextInput } from "react-native";

import { cn } from "~/lib/utils";

const Textarea = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  React.ComponentPropsWithoutRef<typeof TextInput>
>(
  (
    {
      className,
      multiline = true,
      numberOfLines = 4,
      placeholderClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <TextInput
        ref={ref}
        className={cn(
          "max-h-40 w-full rounded-md border-b border-slate-grey bg-transparent text-xl text-midnight-blue",
          props.editable === false && "opacity-50",
          className,
        )}
        placeholderClassName={cn("text-muted-foreground", placeholderClassName)}
        multiline={multiline}
        numberOfLines={numberOfLines}
        textAlignVertical="top"
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
