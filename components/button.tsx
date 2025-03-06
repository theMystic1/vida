import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { colors } from "../utils/color";

type ButtonType = {
  onPress?: () => void;
  children: string;
};
const Button = ({ onPress, children }: ButtonType) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.txt}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    width: "100%",
  },

  btn: {
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: colors.primary,
    color: colors.white,
    width: "100%",
    alignItems: "center",
  },

  txt: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Button;
