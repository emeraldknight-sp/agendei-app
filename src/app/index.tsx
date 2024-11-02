import { CardDoctor } from "../components/card-doctor";
import { FlatList, Text, View } from "react-native";
import { doctors } from "../constants/data";

export default function App() {
  return (
    <View className="bg-white justify-between flex-1 space-y-1 px-5">
      <Text className="text-base text-zinc-700">
        Agende os seus serviços médicos
      </Text>
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id_doctor.toString()}
        renderItem={({ item }) => <CardDoctor data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingVertical: 8 }}
      />
    </View>
  );
}
