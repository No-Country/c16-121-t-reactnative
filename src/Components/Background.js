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
    height: 210,
    borderBottomRightRadius: 900,
    borderBottomLeftRadius: 900,
    backgroundColor: Colors.background,
    zIndex: -1,
  },
});
export default Background;
