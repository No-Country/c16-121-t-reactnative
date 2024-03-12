import React from "react";
import { useContext } from "react";
import { TextInput, View, StyleSheet } from "react-native";



import { Colors } from "../Constants/Colors";
import { DarckContext } from "../Context/DarckContext";

const MyInput = ({ label, value, onChangeText, secureTextEntry, onBlur }) => {
  const { theme } = useContext(DarckContext);
  const { inputDarck } = theme;

  
  return (
    
      <TextInput
        placeholder={label}
        style={[styles.input,{ backgroundColor: inputDarck}]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
      />
   
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    width: "90%",
    height: 45,
    justifyContent: "center",
    margin: 10,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.input,
  },
});
export default MyInput;





