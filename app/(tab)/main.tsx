import { colors } from "@/utils/color";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ComponentName = () => {
  const color = [colors.primary, colors.secondary, colors.blue, colors.white];

  const colorPallete = [
    {
      name: "Primary",
      color: colors.primary,
    },
    {
      name: "Secondary",
      color: colors.secondary,
    },
    {
      name: "Green",
      color: colors.green,
    },
    {
      name: "Blue",
      color: colors.blue,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Welcome to Vida color board</Text>
      <ScrollView>
        {colorPallete.map((color, index) => (
          <View
            key={index}
            style={{
              backgroundColor: color.color,
              marginBottom: 16,
              width: "100%",
              height: 200,
              borderRadius: 20,
              padding: 16,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  marginRight: 12,
                  color: colors.white,
                }}
              >
                {index + 1}
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: colors.white,
                }}
              >
                {color.name}
              </Text>
            </View>
          </View>
        ))}
        <StatusBar style="dark" />
      </ScrollView>
      <Link href="/">
        <Text style={styles.answer}>Logout</Text>
      </Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    padding: 16,
  },

  card: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    backgroundColor: colors.blue,
    padding: 16,
    justifyContent: "center",
    // alignItems: "center",
  },

  answer: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 16,
  },
  welcome: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: "bold",
    color: colors.text,
  },
});

export default ComponentName;
