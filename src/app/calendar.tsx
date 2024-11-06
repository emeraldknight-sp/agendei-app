import { CardAppointment } from "../components/card-appointment";
import { FlatList, View } from "react-native";
import { appointments } from "../utils/data/appointments";

export default function Calendar() {
  return (
    <View className="bg-white justify-between flex-1 space-y-4">
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id_appointment.toString()}
        renderItem={({ item }) => <CardAppointment data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
