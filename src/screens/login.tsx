import { Button } from "../components/button";
import { Input } from "../components/input";
import { Link } from "expo-router";
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

export const Login = () => {
  const signIn = () => console.log("ENTRANDO");
  const currentStatusBarHeight = StatusBar.currentHeight;

  return (
    <SafeAreaView
      className="flex-1"
      style={{ marginTop: currentStatusBarHeight }}
    >
      <View className="flex-1 justify-between bg-white px-4 py-4">
        <View className="items-center">
          <Image
            source={require("@/src/assets/logo.png")}
            className="w-24 h-5"
            alt="logotipo"
          />
        </View>
        <View style={{ gap: 20 }}>
          <Input placeholder="Email" enterKeyHint="next" inputMode="email" />
          <Input placeholder="Senha" enterKeyHint="next" isPasswordInput />
          <Button text="Entrar" onPress={signIn} />
        </View>
        <View className="items-center">
          <Text className="text-gray-6">
            Não tenho conta.&nbsp;
            <Link href="/" className="text-blue-500 font-medium underline">
              Criar conta agora
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
