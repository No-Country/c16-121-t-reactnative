import * as React from "react";
import {ActivityIndicator, View, TouchableOpacity, Text, StyleSheet, Pressable,Dimensions } from "react-native";
import MyBottom from "./MyBottom";
import { Feather } from "@expo/vector-icons";
import MyInput from "./MyInput";
import { AuthContext } from "../Context/AuthContext";
import MyBottonGoogle from "./MyBottonGoogle";
import BottonRegistro from "./BottonRegistro";
import { Colors } from "../Constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { signInWithFacebook } from "../Utils/authSocial";
import { useContext } from "react";
const { width, height } = Dimensions.get("window");
import { DarckContext } from "../Context/DarckContext";

const SignIn = () => {
const [loading, setLoading] = React.useState(false);
 const [showPassword, setShowPassword] = React.useState(false);
  const { authState, setAuthState, setEmail, setPassword, handleSignIn } = React.useContext(AuthContext);
  const navigation = useNavigation();
  
  
  const onHandleSign = async () => {

   
    try {
      setLoading(true);
      await handleSignIn();
    } catch (err) {
      console.log("Error", err);
    } finally {
      setLoading(false); 
    }
  };
  const handleSignInWithFacebook = async () => {
    setLoading(true); 
    try {
      await signInWithFacebook();
    } finally {
      setLoading(false); 
    }
  };


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPasswordClick = () => {
    navigation.navigate('RecoverPassword')
  }
  const { theme } = useContext(DarckContext);
  const { colorText} = theme;
  return (
    
    <React.Fragment>
      <ScrollView>
        <View style={styles.cont}>
      <Text style={styles.text}> Correo Electrónico </Text>
      <MyInput label={"Email"} onChangeText={setEmail} style={styles.input}/>
      <Text style={styles.textPassword}> Contraseña </Text>
      <View style={styles.viewPassword}>
        <MyInput
          label={"Contraseña"}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          // style={styles.input}
        />
        <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon} activeOpacity={0.8}>
          <Feather name={showPassword ? "eye" : "eye-off"} size={24} color="#323646" />
        </TouchableOpacity>
      </View>
      {loading ? ( 
        <ActivityIndicator size="large" color="#F3305F" />
      ) : (
      <MyBottom title="Ingresar" onPress={onHandleSign} />
      )}
     




      <Pressable onPress={handleForgotPasswordClick}>

        <Text style={[styles.textForgotPassword, {color: colorText }]}>
          {" "}
          ¿Olvidaste tu contraseña?{" "}
        </Text>
      </Pressable>


      <View style={styles.line}></View>
      <MyBottonGoogle title="Facebook"onPress={handleSignInWithFacebook}  />




      <Pressable>
        <Text style={[styles.textPass, {color: colorText }]}> ¿No tienes una cuenta? </Text>
      </Pressable>

      <BottonRegistro
        title="Registrate"
        onPress={() => navigation.navigate("Register")}
      />
      </View>
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  cont:{
    flex:1,
    alignItems:'center',
   
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F3305F",
    marginRight: "55%",
    marginTop:80,
  
  },
  textPassword: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F3305F",
    marginRight: "65%",
  },
  textForgotPassword: {
    position: "absolute",
    alignSelf:'center',
    
  },
  line: {
    width: "90%",
    height: 2,
    backgroundColor: Colors.bottonLogin,
    marginTop: "6%",
    marginBottom: "2%",
  },
  textPass:{
    alignSelf:'center',
  },
  viewPassword:{
    flexDirection: 'row',
    alignItems: 'center',
  },

  eyeIcon: {
    position: "absolute",
    right: 25,
  },
});
export default SignIn;