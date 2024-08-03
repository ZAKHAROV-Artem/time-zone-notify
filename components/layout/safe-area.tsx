import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { ReactNode } from "react";

import { cn } from "~/lib/utils";

type SafeAreaProps = {
  children: ReactNode;
  className?: string;
};
export default function SafeArea({ className, children }: SafeAreaProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className={cn("flex-1 bg-crystal-sky", className)}>{children}</View>
    </SafeAreaView>
  );
}
