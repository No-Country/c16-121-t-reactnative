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
      <View
        style={
          condition? headerStyle.headerToHome : headerStyle.headerToProfile
        }
      >
        <View style={headerStyle.containerLogo} >
          <Image
          style={[headerStyle.logo, condition? headerStyle.logoHome : headerStyle.logoProfile]}
          source={require("../../../assets/logo.png")}
        ></Image>
        </View>
        
        <View style={condition? headerStyle.pictureProfileHome: headerStyle.pictureProfileProfile}>
   
          <PictureProfile showButton={condition ? false : true}></PictureProfile>
        </View>
      </View>

      <Text style={headerStyle.textContainer}>¿Buscas donador?</Text>

      <TouchableOpacity
        style={headerStyle.buttonContainer}
        onPress={toggleForm}
      >
        <Text style={{ color: "white", fontSize:15, fontWeight:'500'}}>Publica</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const headerStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: Colors.background,
    padding:'7%'
  },
  // containerLogoProfile:{

  //   flex:3/6,
  //   flexDirection:'row',
  //   backgroundColor:'green',
  //   justifyContent:'space-around'

  // },

  // Estilos para header Home
  headerToHome: {
    flex: 4/7,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  pictureProfileHome:{
    padding:'7%'
  },
  // Estilos para  header de perfil
  headerToProfile: {
    flex: 4/7,
    position:'relative',
  },

  logoProfile:{
    position:'absolute',
    top:0,
    left:0,
    flex:0
  },

  pictureProfileProfile:{
    alignSelf:'center',
    position:'absolute',
    width:'80%',
    height:'80%',
    bottom:0

  },
  containerLogo:{
    width:80,
    height:80,
 
  },

  logo: {
    width:'100%',
    height:'100%',
    resizeMode: "contain",
 
  },

  textContainer: {
    flex:1/6,
    fontWeight:'600',
    color:'white'
 
  },

  buttonContainer: {
    backgroundColor:Colors.background,
    flex: 2 / 7,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    borderColor:'white',
    borderWidth:2,
    borderRadius: 25,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity:2,
    shadowRadius:0,
    elevation: 5,
 
    
  },

  
});
