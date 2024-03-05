import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../Constants/Colors";
import { DarckContext } from "../Context/DarckContext";
import { useContext } from "react";
const BottonRegistro = ({ title, onPress }) => {

  const { theme } = useContext(DarckContext);
  const { background} = theme;

  
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: background}]} onPress={onPress}>
      <Text style={styles.buttonText}> {title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 45,
    backgroundColor: Colors.background,
    borderColor:Colors.bottonTab,
    padding: 10,
    margin: 10,
    borderRadius: 10,
   borderWidth:1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default BottonRegistro ;

