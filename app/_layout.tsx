import { Stack } from "expo-router";
import React from "react";
import Login from "./(auth)/login";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
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
