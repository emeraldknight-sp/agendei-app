import { Pressable, Text, View } from "react-native";
import colors from "tailwindcss/colors";
import { Button } from "./button";
import { router } from "expo-router";

interface ServiceProps {
  data: {
    id_service: number;
    description: string;
    price: number;
  };
}

export default function Service({ data }: ServiceProps) {
  return (
    <View className="flex-row px-4 py-4 border-b-[1px] border-zinc-400">
      <View className="flex-1">
        <Text className="text-zinc-400 text-lg">{data.description}</Text>
        <Text className="text-blue-500">
          {data.price.toLocaleString("pt-BR", {
            currency: "BRL",
            style: "currency",
          })}
        </Text>
      </View>
      <Button
        text="Agendar"
        color="primary"
        size="md"
        onPress={() => router.push("/")}
      />
    </View>
  );
}
