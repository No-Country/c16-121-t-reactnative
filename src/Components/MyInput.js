import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Colors } from "../Constants/Colors";

const MyInput = ({ label, value, onChangeText, secureTextEntry }) => {
  return (
    
      <TextInput
        placeholder={label}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
   
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: 45,
    justifyContent: "center",
    margin: 10,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.input,
  },
});
export default MyInput;
