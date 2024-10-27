import { Image, Pressable, Text, View } from "react-native";
import { calendar, clock } from "../constants/icons";
import { Button } from "./button";

interface CardAppointmentProps {
  data: {
    id_appointment: number;
    service: string;
    doctor: string;
    specialty: string;
    booking_date: string;
    booking_hour: string;
  };
}

export const CardAppointment = ({ data }: CardAppointmentProps) => {
  const details = [
    { icon: calendar, text: data.booking_date },
    { icon: clock, text: data.booking_hour },
  ];

  const handleCancelAppointment = () => console.log("CANCELANDO!!!");

  return (
    <View className="border-t-[1px] border-t-zinc-300 py-4 px-4">
      <Text className="text-lg text-zinc-700 font-medium leading-5">
        {data.service} - {data.doctor}
      </Text>
      <Text className="text-sm text-zinc-500">{data.specialty}</Text>
      <View className="flex-row w-full">
        <View className="flex-1">
          {details.map((el, index) => (
            <View key={index} className="flex-row items-center space-x-1">
              <Image source={el.icon} className="w-8 h-8" />
              <Text className="text-sm text-zinc-500">{el.text}</Text>
            </View>
          ))}
        </View>
        <View className="flex-1 items-end justify-end">
          <Button
            text="Cancelar reserva"
            color="secondary"
            size="sm"
            onPress={handleCancelAppointment}
          />
        </View>
      </View>
    </View>
  );
};
