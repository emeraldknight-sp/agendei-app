import { Image, Pressable, Text, View } from "react-native";
import { female, male } from "../utils/data/icons";

interface CardDoctorProps {
  data: {
    id_doctor: number;
    name: string;
    specialty: string;
    icon: string;
  };
}

export const CardDoctor = ({ data }: CardDoctorProps) => {
  const image = data.icon === "M" ? male : female;
  return (
    <Pressable className="bg-white flex-row flex-1 space-x-3 rounded-md border-2 border-zinc-200 px-2 py-2">
      <Image source={image} className="w-12 h-12" />
      <View>
        <Text className="text-base text-zinc-700 font-medium">{data.name}</Text>
        <Text className="text-base text-zinc-500">{data.specialty}</Text>
      </View>
    </Pressable>
  );
};
