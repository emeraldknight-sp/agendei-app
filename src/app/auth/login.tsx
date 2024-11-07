import { Button } from "@/src/components/button";
import { Image, Text, View } from "react-native";
import { Input } from "@/src/components/input";
import { Link } from "expo-router";
import { logo } from "@/src/utils/data/icons";

export const Login = () => {
  const signIn = () => console.log("ENTRANDO");

  return (
    <View className="flex-1 justify-between bg-white px-4 py-4">
      <View className="items-center">
        <Image source={logo} className="w-24 h-5" alt="logotipo" />
      </View>
      <View style={{ gap: 20 }}>
        <Input placeholder="Email" enterKeyHint="next" inputMode="email" />
        <Input placeholder="Senha" enterKeyHint="next" isPasswordInput />
        <Button text="Entrar" onPress={signIn} />
      </View>
      <View className="items-center">
        <Text className="text-zinc-700">
          Não tenho conta.&nbsp;
          <Link href="/" className="text-blue-500 font-medium underline">
            Criar conta agora
          </Link>
        </Text>
      </View>
    </View>
  );
};
