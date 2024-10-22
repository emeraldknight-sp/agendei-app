import { Pressable, PressableProps, Text } from "react-native";

interface ButtonProps extends PressableProps {
  text: string;
  onPress: () => void;
}

export const Button = ({ text, onPress, ...rest }: ButtonProps) => {
  return (
    <Pressable
      className="w-full bg-blue-500 rounded-md px-3 py-3"
      onPress={onPress}
      {...rest}
    >
      <Text className="text-white text-base text-center">{text}</Text>
    </Pressable>
  );
};
