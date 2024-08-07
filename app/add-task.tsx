import dayjs from "dayjs";
import * as Crypto from "expo-crypto";
import { View, Pressable } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { toDateId, fromDateId } from "@marceloterreiro/flash-calendar";

import { Modals } from "~/types/modals";
import { Text } from "~/components/ui/text";
import { useDispatch } from "~/store/hooks";
import { useModal } from "~/hooks/use-modal";
import { Input } from "~/components/ui/input";
import { SafeArea } from "~/components/layout";
import { Button } from "~/components/ui/button";
import { createTask } from "~/store/slices/tasks";
import { Textarea } from "~/components/ui/textarea";
import { ArrowLeft } from "~/components/data-display/icons";
import { SelectDateModal } from "~/components/utils/modals";
import {
  AddTaskSchema,
  AddTaskFields,
} from "~/types/validation/add-task-validation-schema";

export default function AddTaskScreen() {
  const dispatch = useDispatch();
  const { handleOpen } = useModal(Modals.SelectDateModal);
  const { selectedDate }: { selectedDate: string } = useLocalSearchParams();
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm<AddTaskFields>({
    defaultValues: {
      description: "",
      dueDate: new Date(selectedDate),
      name: "",
    },
    resolver: zodResolver(AddTaskSchema),
  });
  const dueDate = watch("dueDate");
  const onSubmit: SubmitHandler<AddTaskFields> = async (data) => {
    dispatch(
      createTask({
        ...data,
        dueDate: data.dueDate.toISOString(),
        id: Crypto.randomUUID(),
      }),
    );
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
                <View className="flex flex-row justify-between">
                  <Text className="ml-1 text-white">Name *</Text>
                  {errors.name?.message && (
                    <Animated.Text
                      entering={FadeIn}
                      exiting={FadeOut}
                      className="text-red-300"
                    >
                      {errors.name.message}
                    </Animated.Text>
                  )}
                </View>
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
                <View className="flex flex-row justify-between">
                  <Text className="ml-1 text-white">Due date *</Text>
                  {errors.dueDate?.message && (
                    <Animated.Text
                      entering={FadeIn}
                      exiting={FadeOut}
                      className="text-red-300"
                    >
                      {errors.dueDate.message}
                    </Animated.Text>
                  )}
                </View>
                <Controller
                  control={control}
                  name="dueDate"
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Pressable
                      onPress={handleOpen}
                      className="mx-1 border-b border-white"
                    >
                      <Text className="py-2 font-poppins-semibold text-2xl text-white">
                        {dayjs(value).format("ddd DD, YYYY")}
                      </Text>
                    </Pressable>
                  )}
                />
              </View>
            </View>
          </LinearGradient>
        </View>
        <View className="absolute bottom-0 flex h-[65%] w-full rounded-t-3xl bg-white px-4 pb-4 pt-10">
          <View className="grow gap-10">
            <View className="gap-3">
              <View className="flex flex-row justify-between">
                <Text className="ml-1 text-xl text-powder-blue">
                  Description
                </Text>
                {errors.description?.message && (
                  <Animated.Text
                    entering={FadeIn}
                    exiting={FadeOut}
                    className="text-red-400"
                  >
                    {errors.description.message}
                  </Animated.Text>
                )}
              </View>
              <Controller
                control={control}
                name="description"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <Textarea
                    placeholder="Lorem ipsum dolor sit amet, er adipiscing elit, sed dianummy nibh euismod  dolor sit amet, er adipiscing elit, sed dianummy nibh euismod.s"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
            </View>
            <View className="gap-3">
              <Text className="ml-1 text-xl text-powder-blue">Remind me</Text>
            </View>
          </View>
          <Button
            variant={"violet"}
            size={"large"}
            onPress={handleSubmit(onSubmit)}
          >
            <Text>Create task</Text>
          </Button>
        </View>
      </View>
      <SelectDateModal
        setValue={(date) => setValue("dueDate", fromDateId(date))}
        value={toDateId(dueDate)}
      />
    </SafeArea>
  );
}
