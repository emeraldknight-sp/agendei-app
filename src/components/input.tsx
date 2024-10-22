import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, TextInput, TextInputProps, View } from "react-native";
import colors from "tailwindcss/colors";

interface InputProps extends TextInputProps {
  placeholder: string;
  isPasswordInput?: boolean;
}

export const Input = ({
  placeholder,
  isPasswordInput,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className="flex-row justify-between items-center bg-gray-100 rounded-md px-4 py-2">
      <TextInput
        placeholder={placeholder}
        className="text-base"
        cursorColor={colors.blue[500]}
        selectionColor={colors.blue[300]}
        secureTextEntry={showPassword}
        {...rest}
      />
      {isPasswordInput && (
        <Pressable onPress={handleShowPassword}>
          {showPassword ? (
            <Ionicons name="eye" size={20} color={colors.gray[500]} />
          ) : (
            <Ionicons name="eye-off" size={20} color={colors.gray[500]} />
          )}
        </Pressable>
      )}
    </View>
  );
};
