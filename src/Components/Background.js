import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../Constants/Colors";
const Background = () => {
  return <View style={styles.background}></View>;
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 260,
    borderBottomRightRadius: 800,
    borderBottomLeftRadius: 800,
    backgroundColor: Colors.background,
    zIndex: -1,
  },
});
export default Background;
