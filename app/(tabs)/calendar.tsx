import { useState } from "react";
import { Text, View } from "react-native";
import { startOfMonth } from "date-fns/fp";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  toDateId,
  Calendar as FlashCalendar,
} from "@marceloterreiro/flash-calendar";

import { SafeArea } from "~/components/layout";
import { Calendar } from "~/components/inputs/calendar/calendar";
import { linearTheme } from "~/components/inputs/calendar/linear-theme";

const startOfThisMonth = startOfMonth(new Date());
export default function CalendarScreen() {
  const [activeDateId, setActiveDateId] = useState<string | undefined>();
  return (
    <SafeArea paddings={{ top: 0 }}>
      <View
        style={{ paddingTop: useSafeAreaInsets().top }}
        className="flex min-h-20 items-center justify-center rounded-b-3xl bg-white"
      >
        <Text className="p-3 font-poppins text-2xl font-bold">
          Select day from calendar
        </Text>
      </View>
      <View className="mt-5 flex-1 px-4">
        <FlashCalendar.List
          calendarActiveDateRanges={[
            { endId: activeDateId, startId: activeDateId },
          ]}
          calendarDayHeight={48}
          calendarMonthHeaderHeight={30}
          calendarInitialMonthId={toDateId(startOfThisMonth)}
          calendarPastScrollRangeInMonths={0}
          onCalendarDayPress={setActiveDateId}
          theme={linearTheme}
          ItemSeparatorComponent={() => <View className="h-10" />}
          renderItem={({ item }) => (
            <Calendar calendarMonthId={item.id} {...item.calendarProps} />
          )}
        />
      </View>
    </SafeArea>
  );
}
