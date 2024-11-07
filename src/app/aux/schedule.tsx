import colors from "tailwindcss/colors";
import { Button } from "@/src/components/button";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { View } from "react-native";
import { ptBR } from "@/src/utils/translations/calendar";
import { useState } from "react";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState("");

  const confirmSchedule = () => console.log("AGENDANDO!!!!");

  return (
    <View className="flex-1 bg-white px-4">
      <Calendar
        theme={{
          todayTextColor: colors.blue[500],
          selectedDayBackgroundColor: colors.blue[500],
          selectedDayTextColor: colors.white,
          arrowColor: colors.blue[500],
          
        }}
        onDayPress={(day: DateData) => {
          setSelectedDay(day.dateString);
        }}
        markedDates={{ [selectedDay]: { selected: true } }}
        minDate={new Date().toDateString()}
        hideExtraDays
      />
      <Button text="Confirmar reserva" onPress={confirmSchedule} />
    </View>
  );
}
