import { StyleSheet } from "react-native";
import { Colors } from "../Constants/Colors";

//estilos globales de toda la App

export const globalStyles = StyleSheet.create({
  screenContainer: {
    height: 300,
    alignItems: "center",
    borderBottomRightRadius: 800,
    borderBottomLeftRadius: 800,
    backgroundColor: Colors.background,
  },
});
