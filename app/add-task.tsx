import dayjs from "dayjs";
import { View, Pressable } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import Animated, { FadeIn } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { SafeArea } from "~/components/layout";
import { Button } from "~/components/ui/button";
import { ArrowLeft } from "~/components/data-display/icons";
import {
  AddTaskSchema,
  AddTaskFields,
} from "~/types/validation/add-task-validation-schema";

export default function AddTaskScreen() {
  const { selectedDate }: { selectedDate: string } = useLocalSearchParams();
  const { control, handleSubmit } = useForm<AddTaskFields>({
    defaultValues: {
      description: "",
      dueDate: new Date(selectedDate),
      name: "",
    },
    resolver: zodResolver(AddTaskSchema),
  });
  const onSubmit: SubmitHandler<AddTaskFields> = (data) => {
    console.log(data);
    router.back();
  };

  return (
    <SafeArea paddings={{ top: 0 }}>
      <View className="flex-1">
        <View className="relative h-[40%] overflow-hidden">
          <Animated.View
            entering={FadeIn.duration(1000)}
            className="absolute -left-10 -top-20 h-44 w-44 rounded-full bg-black/60"
          />
          <Animated.View
            entering={FadeIn.delay(500).duration(2000)}
            className="absolute -bottom-16 -right-24 h-60 w-60 rounded-full bg-black/50"
          />
          <LinearGradient
            style={{ paddingTop: useSafeAreaInsets().top }}
            colors={["#9C2CF3", "#3A49F9"]}
            className="h-full gap-10 px-4 opacity-90"
          >
            <View className="relative">
              <Text className="text-center font-poppins-semibold text-xl text-white">
                Create a task
              </Text>
              <Pressable
                onPress={() => router.back()}
                className="absolute left-0"
              >
                <ArrowLeft className="text-white" />
              </Pressable>
            </View>
            <View className="gap-7">
              <View>
                <Text className="ml-1 text-white">Name *</Text>
                <Controller
                  control={control}
                  name="name"
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Input
                      placeholder="Do homework"
                      value={value}
                      onChangeText={onChange}
                    />
                  )}
                />
              </View>
              <View>
                <Text className="ml-1 text-white">Due date *</Text>
                <Controller
                  control={control}
                  name="dueDate"
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <View className="mx-1 border-b border-white">
                      <Text className="py-2 font-poppins-semibold text-2xl text-white">
                        {dayjs(value).format("ddd DD, YYYY")}
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </LinearGradient>
        </View>
        <View className="absolute bottom-0 h-[65%] w-full rounded-t-3xl bg-white px-4 pt-10">
          <Button
            variant={"violet"}
            size={"large"}
            onPress={handleSubmit(onSubmit)}
          >
            <Text>Create task</Text>
          </Button>
        </View>
      </View>
    </SafeArea>
  );
}
