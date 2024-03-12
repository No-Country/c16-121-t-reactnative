import react from "react";
import { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Colors } from "../../Constants/Colors";
import { PictureProfile } from "./PictureProfile";
import { DarckContext } from "../../Context/DarckContext";
import { useContext } from "react";
import Background from "../Background";
export const HeaderMovil = ({ condition }) => {

  const toggleForm = () => {
    console.log("abriendo formulario");
  };

  const { theme } = useContext(DarckContext);
  const { background } = theme;

  return (
    <View style={[headerStyle.background,{backgroundColor:background}]}>
     
      <View style={headerStyle.logoProfileContainer}>
        <View style={headerStyle.containerLogo}>
         
          <Image style={headerStyle.logo} source={require("../../../assets/logo.png")}></Image>
        </View>
        {condition ? (
          <View style={headerStyle.pictureProfileHome}>
            <PictureProfile showButton={false}></PictureProfile>
          </View>
        ) : (
          <View style={[headerStyle.pictureProfileProfile, {alignSelf: "center"}]}>
            <PictureProfile showButton={true}></PictureProfile>
          </View>
        )}
        
      </View>
      {condition && 
        <View style={headerStyle.buttonContainer} >
          <Text style={headerStyle.textContainer}>¿Buscas donador?</Text>
          <TouchableOpacity style={headerStyle.button} onPress={toggleForm} >
            <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
              Publica
            </Text>
          </TouchableOpacity>
        </View> 
      }
    </View>
  );
};

const headerStyle = StyleSheet.create({
  background: {
    position: "absolute",
    top: -100,
    left: -180,
    right: -180,
    bottom: 0,
    height: 350,
    backgroundColor: Colors.background,
    alignSelf: "center",
    overflow: "hidden",
    borderBottomRightRadius: 350,
    borderBottomLeftRadius: 350,
    justifyContent: "center",
    alignItems: "center"
  },
  logoProfileContainer: {
    flexDirection: "row", 
    alignItems: "center", 
    width: "45%", 
    justifyContent: "space-between",
  },
  pictureProfileHome: {
    width: 75,
    height: 75,
  },
  logoProfile: {
    position: "absolute",
    top: 0,
    left: 0,
    flex: 0,
  },
  pictureProfileProfile: {
    position: "absolute",
    width: "100%",
    height: "170%",
    top: 55,
  },
  containerLogo: {
    width: 80,
    height: 80,

  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 35,
    width: "60%",
    alignItems: "center",
  },
  textContainer: {
    fontWeight: "600",
    color: "white",
    width: "60%",
    marginBottom: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: Colors.background,
    width: "60%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 25,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 2,
    shadowRadius: 0,
    elevation: 5,
  }
});
