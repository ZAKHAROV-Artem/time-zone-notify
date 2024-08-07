import { useState } from "react";
import { View } from "react-native";
import dayjs, { Dayjs } from "dayjs";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Text } from "~/components/ui/text";
import { useSelector } from "~/store/hooks";
import { SafeArea } from "~/components/layout";
import { Button } from "~/components/ui/button";
import { Plus } from "~/components/data-display/icons";
import { SwiperCalendar } from "~/components/inputs/swiper-calendar";

export default function RemaindersScreen() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  return (
    <SafeArea paddings={{ top: 0 }}>
      <View className="flex-1 gap-8">
        <View
          style={{ paddingTop: useSafeAreaInsets().top }}
          className="flex h-[25%] gap-7 rounded-b-3xl bg-white shadow-2xl"
        >
          <View className="mt-5 flex flex-row items-center justify-between px-3">
            <Text className="text-4xl font-bold text-midnight-blue">
              {selectedDate?.format("DD MMM, YYYY")}
            </Text>
            <Button
              variant={"violet"}
              onPress={() =>
                router.push({
                  params: { selectedDate: selectedDate.toString() },
                  pathname: "/add-task",
                })
              }
            >
              <View className="flex flex-row items-center justify-center gap-2">
                <Plus className="text-white" size={20} />
                <Text>Add task</Text>
              </View>
            </Button>
          </View>
          <SwiperCalendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </View>
        <View className="flex-1 px-2">
          <Text className="text-2xl font-bold text-midnight-blue">Tasks</Text>
          {tasks?.map((task) => (
            <Text
              key={task.id}
              className="flex flex-row items-center justify-between gap-4"
            >
              {task.name}
            </Text>
          ))}
        </View>
      </View>
    </SafeArea>
  );
}
