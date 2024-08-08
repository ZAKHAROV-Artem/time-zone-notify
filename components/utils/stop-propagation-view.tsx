import { ReactNode } from "react";
import { View, ViewProps } from "react-native";

type StopPropagationViewProps = {
  children: ReactNode;
} & ViewProps;
export default function StopPropagationView({
  children,
  ...props
}: StopPropagationViewProps) {
  return (
    <View
      onStartShouldSetResponder={(event) => true}
      onTouchEnd={(e) => {
        e.stopPropagation();
      }}
      {...props}
    >
      {children}
    </View>
  );
}
