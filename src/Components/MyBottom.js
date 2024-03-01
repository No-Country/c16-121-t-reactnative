import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../Constants/Colors";

const MyBottom = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}> {title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 45,
    backgroundColor: Colors.bottonLogin,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default MyBottom;
