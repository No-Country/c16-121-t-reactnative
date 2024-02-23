import React from "react";
import { useState } from "react";
import { Colors } from "../Constants/Colors.js";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";

export const ModalComponent = ({ visible, text, onPress }) => {
  const onPressButton = (option) => {
    onPress(option);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onPressButton}
 
    >
      <View style={style.containerModal}>
        <View style={style.modalStyle}>
          <Text style={{ flex: 3 / 5, textAlign: "center", color: "white", fontSize:12 }}>
            {text}
          </Text>
          <View style={style.containerButton}>
            <TouchableOpacity
              style={[style.button,{backgroundColor:'white'}]}
              onPress={() => onPressButton("si")}
            >
              <Text style={{ fontWeight: "bold" }}>Si</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.button}
              onPress={() => onPressButton("no")}
            >
              <Text style={{ fontWeight: "bold" }}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const style = StyleSheet.create({
 
  containerModal: {
    flex:1,
    justifyContent:'center',
    backgroundColor: '#00000050',
  
  },
  modalStyle:{
    flex: 1 / 6,
    padding: "5%",
    borderRadius: 25,
 
    flexDirection: "column",
    backgroundColor: Colors.background,
    justifyContent:'space-between',
    alignItems:'center',
    margin:'15%'
  },

  button: {
    flex: 1 / 2,
    backgroundColor: "red",
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: "white",
    fontWeight: "bold",
    margin: "3%",
  },
  containerButton: {
    flexDirection: "row",
    flex: 2 / 5,

    justifyContent: "space-around",
    paddingLeft: "5%",
    paddingRight: "5%",
  
  },
});
