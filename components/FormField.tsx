import { colors } from "@/utils/color";
import { icons } from "@/utils/icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "react-native";

type FormFieldsProps = {
  title: string;
  value: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  keyboardType?: string;
  placeholder?: string;
};

function FormField({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeholder,
}: FormFieldsProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`${otherStyles}`} style={styles.container}>
      <Text
        className="text-base text-gray-100 font-pmedium"
        style={styles.label}
      >
        {title}
      </Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={colors.secondary}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              style={styles.img}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default FormField;

const styles = StyleSheet.create({
  container: {
    // padding: 2,
    width: "100%",
  },

  label: {
    fontSize: 18,
    marginBottom: 4,
    fontWeight: "bold",
  },

  inputBox: {
    borderWidth: 2,
    borderColor: colors.secondary,
    paddingHorizontal: 12,
    // paddingVertical: 18,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 10,
    color: colors.text,
    width: "100%",
    flexDirection: "row",
    height: 48,
    alignItems: "center",
  },

  input: {
    width: "100%",
    flex: 1,
    outline: "none",
    height: "100%",
  },

  img: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
});
