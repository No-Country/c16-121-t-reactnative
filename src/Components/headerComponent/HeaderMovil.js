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
// import { headerStyle } from "./styleHeader";
import { Colors } from "../../Constants/Colors";
import { PictureProfile } from "./PictureProfile";

export const HeaderMovil = ({ condition }) => {
  const toggleForm = () => {
    console.log("abriendo formulario");
  };

  return (
    <SafeAreaView style={headerStyle.container}>
      <View style={headerStyle.background}></View>
      <View
        style={
          condition ? headerStyle.headerToHome : headerStyle.headerToProfile
        }
      >
        <View style={headerStyle.containerLogo}>
          <Image
            style={[
              headerStyle.logo,
              condition ? headerStyle.logoHome : headerStyle.logoProfile,
            ]}
            source={require("../../../assets/logo.png")}
          ></Image>
        </View>

        <View
          style={
            condition
              ? headerStyle.pictureProfileHome
              : headerStyle.pictureProfileProfile
          }
        >
          <PictureProfile
            showButton={condition ? false : true}
          ></PictureProfile>
        </View>
      </View>
      <View style={headerStyle.buttonTextContainer} >
        <Text style={headerStyle.textContainer}>¿Buscas donador?</Text>
        <TouchableOpacity
          style={headerStyle.buttonContainer}
          onPress={toggleForm}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
            Publica
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const headerStyle = StyleSheet.create({
  background: {
    position: "absolute",
    width: "250%",
    height: "250%",
    backgroundColor: "green",
    bottom:0,
    borderBottomRightRadius: 500,
    borderBottomLeftRadius: 500,
    backgroundColor: Colors.background,
    alignSelf:'center'
 
    // flex:1
  },

  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "9%",
    paddingTop:'5%',
    position: "relative",
    
    paddingBottom:'12%',
 
  
    
  },
 

  // Estilos para header Home
  headerToHome: {
    flex:5/8,
    justifyContent: "space-between",
    flexDirection: "row",
 
    alignItems: "center",
 
   },
  buttonTextContainer:{
    flex: 3/8,
 
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    paddingLeft:'5%',
    paddingRight:'5%',
   },
  pictureProfileHome: {
    width: 70,
    height: 70,
  },
  // Estilos para  header de perfil
  headerToProfile: {
    flex: 4 / 7,
    position: "relative",
  },

  logoProfile: {
    position: "absolute",
    top: 0,
    left: 0,
    flex: 0,
  },

  pictureProfileProfile: {
    alignSelf: "center",
    position: "absolute",
    width: "80%",
    height: "80%",
    bottom: 0,
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

  textContainer: {
    flex: 1 / 3,
    fontWeight: "600",
    color: "white",
    alignSelf: 'flex-start',
  },

  buttonContainer: {
    backgroundColor: Colors.background,
    flex: 2 / 3,
    width: "100%",
    alignSelf: "center",
    alignContent: "center",
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
  },
});
