import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const ModalList = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("DonationForm")}>
        <AntDesign name="form" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("PorQueDonar")}>
        <AntDesign name="hearto" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProcesoDeDonacion")}
      >
        <AntDesign
          name="infocirlceo"
          size={24}
          color="black"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    marginHorizontal: 30,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    bottom:1,
    left:5,
  },
  icon: {
   
    marginVertical: 10,
    backgroundColor: "grey",
    borderRadius: 50,
    padding: 10,
    color: "white",
  },
});

export default ModalList;
