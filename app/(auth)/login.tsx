import Button from "@/components/button";
import FormField from "@/components/FormField";
import { LoginScreenNavigationProp } from "@/types/types";
import { colors } from "@/utils/color";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handlePress = () => {
    if (!inputValue.email || !inputValue.password)
      Alert.alert("Empty fields", "Kindly fill in all required fields");
    else navigation.navigate("(tab)");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.vida}>ViDA</Text>
        <Text style={styles.welcome}>Welcome to Vida, Kindly Sign In</Text>
      </View>
      <FormField
        title="Email"
        value={inputValue.email}
        handleChangeText={(e) => setInputValue({ ...inputValue, email: e })}
        placeholder="Enter your email address"
      />
      <FormField
        title="Password"
        value={inputValue.password}
        handleChangeText={(e) => setInputValue({ ...inputValue, password: e })}
        placeholder="Enter your password"
      />
      <Button onPress={handlePress}>Login</Button>
      <View style={styles.qanswer}>
        <Text style={styles.question}>Don't have an account? </Text>
        <Link href="/signup">
          <Text style={styles.answer}>Sign Up</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },

  textContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },

  vida: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    color: colors.primary,
  },
  welcome: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: "bold",
    color: colors.secondary,
  },

  qanswer: {
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  question: {
    fontSize: 18,
  },
  answer: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
  },
});

export default Login;
