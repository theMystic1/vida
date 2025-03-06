import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
        }}
      />

      <StatusBar style="dark" />
    </Stack>
  );
}
