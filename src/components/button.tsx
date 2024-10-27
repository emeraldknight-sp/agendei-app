import { Pressable, PressableProps, Text } from "react-native";
import clsx from "clsx";

interface ButtonProps extends PressableProps {
  color?: "primary" | "secondary";
  size?: "sm" | "md";
  text: string;
  onPress: () => void;
}

export const Button = ({
  text = "Button",
  color = "primary",
  size = "md",
  onPress,
  ...rest
}: ButtonProps) => {
  return (
    <Pressable
      className={clsx(
        "bg-blue-500 rounded-md px-3 py-3",
        color === "primary" ? "bg-blue-500" : "bg-red-500",
        size === "md" ? "w-full px-3 py-3" : "px-2 py-2"
      )}
      onPress={onPress}
      {...rest}
    >
      <Text
        className={clsx(
          "text-white text-center font-medium",
          size === "md" ? "text-base" : "text-sm"
        )}
      >
        {text}
      </Text>
    </Pressable>
  );
};
