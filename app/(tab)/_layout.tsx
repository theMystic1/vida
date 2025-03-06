import { Stack } from "expo-router";
import React from "react";
export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="main"
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen name="Detail" component={DetailScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="NotFound" component={NotFoundScreen} / */}
    </Stack>
  );
}
