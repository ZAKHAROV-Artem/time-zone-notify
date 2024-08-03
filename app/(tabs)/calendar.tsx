import { CalendarList, DateData } from "react-native-calendars";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useState } from "react";

import { SafeArea } from "~/components/layout";

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString(),
  );

  const onDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);
  };

  return (
    <SafeArea className="">
      <StatusBar backgroundColor="#ffffff" />
      <View className="flex h-20 items-center justify-center rounded-b-3xl bg-white">
        <Text className="p-3 font-poppins text-2xl font-bold">
          Select day from calendar
        </Text>
      </View>

      <CalendarList
        theme={{
          backgroundColor: "#f2f5ff",
          calendarBackground: "#f2f5ff",
          dayTextColor: "#2e3a59",
          dotColor: "#5e3ef7",
          indicatorColor: "#653cf6",
          monthTextColor: "#2e3a59",
          selectedDayBackgroundColor: "#5e3ef7",
          selectedDayTextColor: "#ffffff",
          selectedDotColor: "#ffffff",
          textDayFontFamily: "monospace",
          textDayFontSize: 16,
          textDayFontWeight: "300",
          textDayHeaderFontFamily: "monospace",
          textDayHeaderFontSize: 16,
          textDayHeaderFontWeight: "300",
          textDisabledColor: "#a1a1a6",
          textMonthFontFamily: "monospace",
          textMonthFontSize: 16,
          textMonthFontWeight: "bold",
          textSectionTitleColor: "#653cf6",
          todayTextColor: "#5e3ef7",
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "#5e3ef7",
            selectedTextColor: "#ffffff",
          },
        }}
        minDate={new Date().toISOString()}
        monthFormat={"yyyy MMMM"}
        onDayPress={onDayPress}
        scrollEnabled={true}
        pastScrollRange={0}
        hideArrows={true}
      />
    </SafeArea>
  );
}
