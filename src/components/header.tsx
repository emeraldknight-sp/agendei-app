import { Image, Text, View } from "react-native";
import { logo } from "../constants/icons";

interface HeaderProps {
  text?: string;
}

export const Header = ({ text }: HeaderProps) => {
  return (
    <View className="bg-white items-center px-4 py-2">
      {text ? (
        <Text className="text-blue-500 text-xl font-bold">{text}</Text>
      ) : (
        <Image source={logo} className="w-28 h-6" alt="logotipo" />
      )}
    </View>
  );
};
