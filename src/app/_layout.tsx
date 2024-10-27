import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <SafeAreaView className="flex-1">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
