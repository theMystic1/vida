import Button from "@/components/button";
import FormField from "@/components/FormField";
import { colors } from "@/utils/color";
import { Link } from "expo-router";
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, ScrollView } from "react-native";

const SignIn = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlePress = () => {
    alert(`You entered: inputValue`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.vida}>ViDA</Text>
        <Text style={styles.welcome}>Welcome to Vida, Kindly Sign Up</Text>
      </View>
      <FormField
        title="Name"
        value={inputValue.name}
        handleChangeText={(input) =>
          setInputValue({ ...inputValue, name: input })
        }
        placeholder="Enter your preferred name"
      />
      <FormField
        title="Email"
        value={inputValue.email}
        handleChangeText={(input) =>
          setInputValue({ ...inputValue, email: input })
        }
        placeholder="Enter your email address"
      />
      <FormField
        title="Password"
        value={inputValue.password}
        handleChangeText={(input) =>
          setInputValue({ ...inputValue, password: input })
        }
        placeholder="Enter your password"
      />
      <Button>Create Account</Button>
      <View style={styles.qanswer}>
        <Text style={styles.question}>Already have an account? </Text>
        <Link href="/login">
          <Text style={styles.answer}>Login</Text>
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

export default SignIn;
