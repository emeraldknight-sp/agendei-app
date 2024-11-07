import Service from "@/src/components/service";
import { FlatList, Image, Text, View } from "react-native";
import { doctors_services } from "@/src/utils/data/doctors_services";
import { male } from "@/src/utils/data/icons";

export default function Services() {
  return (
    <View className="bg-white justify-between flex-1">
      <View className="bg-blue-500 justify-center items-center p-8">
        <Image source={male} className="w-20 h-20" />
        <Text className="text-white text-base font-bold">David</Text>
        <Text className="text-white text-sm">Clínico Geral</Text>
      </View>
      <FlatList
        data={doctors_services}
        keyExtractor={(item) => item.id_service.toString()}
        renderItem={({ item }) => <Service key={item.id_service} data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
