import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../utils/color";
import Button from "../components/button";
import { Link, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgCt}>
        <Image source={require("@/assets/images/bg.jpg")} style={styles.img} />
      </View>
      <Text style={styles.text}>Welcome to Vida</Text>
      <Link href="/(auth)/login" style={styles.btnContainer}>
        <Button>Continue</Button>
      </Link>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    width: "100%",
    height: 80,
  },

  img: {
    height: 200,
    width: 280,
    borderRadius: "28px",
  },
  imgCt: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
});
