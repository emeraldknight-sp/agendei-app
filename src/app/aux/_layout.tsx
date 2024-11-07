import { Stack } from "expo-router";

export default function AuxLayout() {
  return (
    <Stack>
      <Stack.Screen name="schedule" />
      <Stack.Screen name="services" />
    </Stack>
  )
}