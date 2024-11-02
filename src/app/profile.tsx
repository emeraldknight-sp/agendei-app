import { Text, View } from "react-native";

export default function Profile() {
  const infos = [
    { title: "Nome", value: "David Almeida" },
    { title: "Email", value: "davyd.aguiar@hotmail.com" },
  ];

  return (
    <View className="bg-white flex-1">
      {infos.map((info, index) => (
        <View key={index} className="border-y-[1px] border-zinc-300 p-4">
          <Text className="text-sm text-zinc-500 font-semibold">
            {info.title}
          </Text>
          <Text className="text-lg text-zinc-700">{info.value}</Text>
        </View>
      ))}
    </View>
  );
};
