import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("DonationForm")}
      >
        <ImageBackground
          source={require("../Assets/formulario.jpg")}
          style={styles.imageBackground}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View style={{ width: 10 }} />

      <View style={styles.rightButtonsContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate("ProcesoDeDonacion")}
        >
          <ImageBackground
            source={require("../Assets/fondo3.jpg")}
            style={styles.imageBackground}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("PorQueDonar")}
        >
          <ImageBackground
            source={require("../Assets/fondo2.jpg")}
            style={styles.imageBackground}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "15%",
    flexDirection: "row",
    paddingHorizontal: "10%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFB6C1",
    borderRadius: 15,
    width: 130,
    height: 210,
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
    borderRadius: 15,
    marginBottom: 10,
    width: 190,
    height: 95,
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
    height: 100,
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
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CardHome;
