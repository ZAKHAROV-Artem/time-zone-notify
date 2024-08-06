import * as React from "react";
import * as Slot from "@rn-primitives/slot";
import { Text as RNText } from "react-native";
import { TextRef, SlottableTextProps } from "@rn-primitives/types";

import { cn } from "~/lib/utils";

const TextClassContext = React.createContext<string | undefined>(undefined);

const Text = React.forwardRef<TextRef, SlottableTextProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const textClass = React.useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn(
          "font-poppins text-base text-black",
          textClass,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Text.displayName = "Text";

export { Text, TextClassContext };
