import { CalendarTheme } from "@marceloterreiro/flash-calendar";

const linearAccent = "#653cf6";
export const linearTheme: CalendarTheme = {
  itemDay: {
    active: () => ({
      container: {
        backgroundColor: linearAccent,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      content: {
        color: "#ffffff",
      },
    }),
    idle: ({ isPressed, isWeekend }) => ({
      container: {
        backgroundColor: isPressed ? linearAccent : "transparent",
        borderRadius: 10,
      },
      content: {
        color: !isPressed ? "#000" : "#fff",
      },
    }),
    today: ({ isPressed }) => ({
      container: {
        backgroundColor: isPressed ? linearAccent : "transparent",
        borderColor: "rgba(0,0,0, 0.4)",
        borderRadius: 10,
      },
      content: {
        color: isPressed ? "#ffffff" : "rgba(0,0,0, 0.4)",
      },
    }),
  },
  itemDayContainer: {
    activeDayFiller: {
      backgroundColor: linearAccent,
    },
  },
  itemWeekName: { content: { color: "#653cf6" } },
  rowWeek: {
    container: {
      borderBottomColor: "rgba(0,0,0, 0.1)",
      borderBottomWidth: 1,
      borderStyle: "solid",
    },
  },
};
