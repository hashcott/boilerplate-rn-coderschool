import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({ style, ...props }) => {
  return (
    <TextInput
      {...props}
      style={[style, styles.input]}
      placeholderTextColor={"darkgray"}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    padding: 20,
    borderRadius: 8,
    color: "black",
  },
});
