import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity,TextInput } from "react-native";
import MyBottom from "./MyBottom";
import MyInput from "./MyInput";
import { AuthContext } from "../Context/AuthContext";
import { Colors } from "../Constants/Colors";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
    const navigation = useNavigation();
    const {
        handleForgotPassword,
    } = React.useContext(AuthContext);

    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState("");

    
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setEmailError("Ingresa un correo electrónico válido");
        } else {
            console.log("correo valido - ingreso a validate")
            setEmailError("");
        }
    };
    
    const validateData = () => {
        if (emailError !== "" ) {
            return false;
        }
        return true;
    };

    return (
        <React.Fragment>
            
                <Text style={styles.text}>Correo Electrónico</Text>
                <TextInput
        placeholder="example@gmail.com"
        onChangeText={(text) => setEmail(text.trim())}
        onBlur={validateEmail}
        style={styles.input}
      />
                <Text style={styles.error}>{emailError}</Text>

                <MyBottom
                    title="Recuperar Contraseña"
                    // onPress={() => handleForgotPassword(email)}
                    onPress={() => {
                        if (validateData()) {
                            handleForgotPassword(email);
                            navigation.navigate("VerificationPasswordChange", {email:email});
                        }
                    }}
                />
           
           </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
       backgroundColor:'red'
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#F3305F",
        marginLeft: "3%",
    },
    error: {
        fontSize: 10,
        color: "#F3305F",
        marginLeft: "3%",
        marginBottom: 6,
        marginTop: -8,
    },
    input: {
        paddingHorizontal: 10,
        width: "90%",
        height: 45,
        justifyContent: "center",
        margin: 10,
        backgroundColor: "transparent",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.input,
      },
});

export default ForgotPassword;


