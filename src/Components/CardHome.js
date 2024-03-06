// Importa View de react-native
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
     
     {/* card formulario */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("DonationForm")}
      >
        <View style={styles.imageContainer}>
          <ImageBackground
            source={require("../Assets/formulario.png")}
            style={styles.imageBackground}
            resizeMode="cover"
          />
          
        </View>
      </TouchableOpacity>
      {/* card proceso de donacion */}
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate("ProcesoDeDonacion")}
        >
          <View style={styles.imageContainer}>
            <ImageBackground
              source={require("../Assets/proceso.png")}
              style={styles.imageBackground}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>
        {/* card porque donar */}
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("PorQueDonar")}
        >
          <View style={styles.imageContainer}>
            <ImageBackground
              source={require("../Assets/porque.png")}
              style={styles.imageBackground}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:50,
    flexDirection: "row",
    paddingHorizontal: "15%",
    alignItems: "center",
    justifyContent:'space-between',
    borderRadius: 15,
   
 
  },
  button: { 
    borderRadius: 100,
    marginBottom: 10,
    width: 50,
    height: 50,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  button1: {
   
    borderRadius: 100,
    marginBottom: 10,
    width: 50,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },


  },
  button2: {
  
    borderRadius: 100,
    marginBottom: 10,
    width: 50,
    height:50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  
   
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
