import colors from "tailwindcss/colors";
import { Feather } from "@expo/vector-icons";
import { Header } from "../components/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <SafeAreaView className="flex-1">
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.blue[500],
          tabBarInactiveTintColor: colors.zinc[300],
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            header: () => <Header />,
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            header: () => <Header text="Minhas reservas" />,
            tabBarIcon: ({ color }) => (
              <Feather name="calendar" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            header: () => <Header text="Meu perfil" />,
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen name="auth" options={{ href: null }} />
        <Tabs.Screen name="aux" options={{ href: null }} />
      </Tabs>
    </SafeAreaView>
  );
}
