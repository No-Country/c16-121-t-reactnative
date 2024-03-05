// Importa View de react-native
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("DonationForm")}
      >
        <View style={styles.imageContainer}>
          <ImageBackground
            source={require("../Assets/formulario.jpg")}
            style={styles.imageBackground}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
      <View style={{ width: 10 }} />

      <View style={styles.rightButtonsContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate("ProcesoDeDonacion")}
        >
          <View style={styles.imageContainer}>
            <ImageBackground
              source={require("../Assets/proceso.jpg")}
              style={styles.imageBackground}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("PorQueDonar")}
        >
          <View style={styles.imageContainer}>
            <ImageBackground
              source={require("../Assets/porque.jpg")}
              style={styles.imageBackground}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "35%",
    flexDirection: "row",
    paddingHorizontal: "10%",
    alignItems: "center",
    justifyContent:'center',
    borderRadius: 15,
    marginBottom:'10%',
  },
  button: {
    backgroundColor: "#FFB6C1",
    borderRadius: 15,
    width: 130,
    height: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  button1: {
    backgroundColor: "#FFDEAD",
    borderRadius: 20,
    marginBottom: 10,
    width: 190,
    height: 90,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  button2: {
    backgroundColor: "#CD5C5C",
    borderRadius: 15,
    marginBottom: 10,
    width: 190,
    height: 90,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  rightButtonsContainer: {},
  topButton: {
    marginBottom: 0,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 1,
    borderRadius: 15,
    overflow: "hidden", 
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CardHome;
