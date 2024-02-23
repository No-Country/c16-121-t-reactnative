import react from "react";
import { useState, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Animated, SafeAreaView } from "react-native";
import { headerStyle } from "./styleHeader"; 
import { Colors } from "react-native/Libraries/NewAppScreen";
import { PictureProfile } from "./PictureProfile";

export const HeaderMovil = () => {
  const [animatedValue] = useState(new Animated.Value(0));
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    Animated.timing(animatedValue, {
      toValue: isFormVisible ? 0 : -100,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={headerStyle.container}>
      <View style={headerStyle.logoProfile}>
        <Image style={headerStyle.logo} source={require("../../../assets/logo.png")}></Image>
        <View style={headerStyle.profileScreen}>
          <PictureProfile showButton={false}></PictureProfile>
        </View>
      </View>
      <Text style={[headerStyle.text, {alignSelf:'flex-start'}]}> ¿Buscas donador?</Text>
      <TouchableOpacity  style={headerStyle.button} onPress={toggleForm}>
        <Text style= {{color:'white'}} >Publica</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
