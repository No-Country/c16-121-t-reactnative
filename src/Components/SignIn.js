import * as React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import MyBottom from "./MyBottom";
import MyInput from "./MyInput";
import { AuthContext } from "../Context/AuthContext";

const SignIn = () => {


  const {authState, setAuthState, setEmail, setPassword, handleSignIn } =
    React.useContext(AuthContext);

const onHandleSign = async()=>{

try{

await handleSignIn();
if(authState === "signedIn"){
alert("inicio de sesion exitoso ")
}

}catch(err){

  console.log("Error" ,err)
}



}


  return (
    <React.Fragment>
      <Text style={styles.text}>Correro Electrónico </Text>
      <MyInput label={"Email"} onChangeText={setEmail} />
      <Text style={styles.textPassword}>Contraseña </Text>
      <MyInput
        label={"Contraseña"}
        onChangeText={setPassword}
        secureTextEntry
      />
      <MyBottom title="Ingresar" onPress={onHandleSign} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F3305F",
    marginRight: "55%",
  },
  textPassword: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F3305F",
    marginRight: "65%",
  },
});
export default SignIn;
