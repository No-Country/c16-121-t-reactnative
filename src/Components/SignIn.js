import * as React from "react";
import { View, Button, Text, StyleSheet, Pressable } from "react-native";
import MyBottom from "./MyBottom";
import MyInput from "./MyInput";
import { AuthContext } from "../Context/AuthContext";
import MyBottonGoogle from "./MyBottonGoogle";
import BottonRegistro from "./BottonRegistro";
import { Colors } from "../Constants/Colors";

const SignIn = () => {
  const { setAuthState, setEmail, setPassword, hadleSignIn } =
    React.useContext(AuthContext);
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
      <MyBottom title="Ingresar" onPress={hadleSignIn} />

      <Pressable>
        <Text style={styles.textForgotPassword}>
          {" "}
          ¿Olvidaste tu contraseña?{" "}
        </Text>
      </Pressable>
      <View style={styles.line}></View>
      <MyBottonGoogle title="Google" />

      <Pressable>
        <Text> ¿No tienes una cuenta? </Text>
      </Pressable>

      <BottonRegistro title="Registrate" />
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
  textForgotPassword: {
    position: "absolute",
    left: 0,
    top: -7,
  },
  line: {
    width: "90%",
    height: 2,
    backgroundColor: Colors.bottonLogin,
    marginTop: "6%",
    marginBottom: "2%",
  },
});
export default SignIn;
