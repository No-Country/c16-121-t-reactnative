import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import MyBottom from "./MyBottom";
import MyInput from "./MyInput";
import { AuthContext } from "../Context/AuthContext";
import { Colors } from "../Constants/Colors";
import { Feather } from "@expo/vector-icons";

const ForgotPassword = () => {
    const {
        setPassword,
        handleForgotPassword,
        navigation
    } = React.useContext(AuthContext);

    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState("");

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setEmailError("Ingresa un correo electrónico válido");
        } else {
            setEmailError("");
        }
    };

    return (
        <SafeAreaView>
            <View>
                <Text style={styles.text}>Correo Electrónico</Text>
                <MyInput
                    label={"example@gmail.com"}
                    onChangeText={(text) => setEmail(text.trim())}
                    onBlur={validateEmail}
                />
                <Text style={styles.error}>{emailError}</Text>

                <MyBottom
                    title="Recuperar Contraseña"
                    onPress={handleForgotPassword}
                />
            </View>
        </SafeAreaView>
    );
};


// const ChangePassword = () => {
//     const {
//         setPassword,
//         handleChangePassword,
//         navigation
//     } = React.useContext(AuthContext);

//     // Definir estados para la nueva contraseña, confirmación y errores
//     const [email, setEmail] = React.useState("");
//     const [newPassword, setNewPassword] = React.useState("");
//     const [confirmNewPassword, setConfirmNewPassword] = React.useState("");
//     const [emailError, setEmailError] = React.useState("");
//     const [newPasswordError, setNewPasswordError] = React.useState("");
//     const [confirmNewPasswordError, setConfirmNewPasswordError] = React.useState("");

//     // Función para validar el formato del correo electrónico
//     const validateEmail = () => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email.trim())) {
//             setEmailError("Ingresa un correo electrónico válido");
//         } else {
//             setEmailError("");
//         }
//     };
    
//     // Validar que la nueva contraseña cumpla con los requisitos
//     const validateNewPassword = () => {
//         if (newPassword.length < 6 || !/[A-Z]/.test(newPassword)) {
//             setNewPasswordError("Debe tener al menos 6 caracteres y una mayúscula");
//         } else {
//             setNewPasswordError("");
//         }
//     };

//     // Validar que la confirmación de la contraseña sea igual a la nueva contraseña
//     const validateConfirmNewPassword = () => {
//         if (newPassword !== confirmNewPassword) {
//             setConfirmNewPasswordError("Las contraseñas no son iguales");
//         } else {
//             setConfirmNewPasswordError("");
//         }
//     };

//     // Mostrar u ocultar las contraseñas
//     const [showNewPassword, setShowNewPassword] = React.useState(false);
//     const [showConfirmNewPassword, setShowConfirmNewPassword] = React.useState(false);
//     const toggleShowNewPassword = () => {
//         setShowNewPassword(!showNewPassword);
//     };
//     const toggleShowConfirmNewPassword = () => {
//         setShowConfirmNewPassword(!showConfirmNewPassword);
//     };

//     // Función para validar todos los campos antes de enviar la solicitud de cambio de contraseña
//     const validateData = () => {
//         if (emailError !== "" || newPasswordError !== "" || confirmNewPasswordError !== "") {
//             return false;
//         }
//         return true;
//     };

//     return (
//         <SafeAreaView>
//             <View>
//                 <Text style={styles.text}>Correo Electrónico</Text>
//                 <MyInput
//                     label={"example@gmail.com"}
//                     onChangeText={(text) => {
//                         setEmail(text.trim());
//                     }}
//                     onBlur={validateEmail}
//                 />
//                 <Text style={styles.error}>{emailError}</Text>
//                 <Text style={styles.text}>Nueva contraseña</Text>
//                 <View style={styles.viewPassword}>
//                     <MyInput
//                         label={"Contraseña"}
//                         onChangeText={(text) => {
//                             setNewPassword(text);
//                             {
//                                 setPassword(text);
//                             }
//                         }}
//                         onBlur={validateNewPassword}
//                         secureTextEntry={!showNewPassword}
//                     />
//                     <TouchableOpacity
//                         onPress={toggleShowNewPassword}
//                         style={styles.eyeIcon}
//                         activeOpacity={0.8}
//                     >
//                         <Feather
//                             name={showNewPassword ? "eye" : "eye-off"}
//                             size={24}
//                             color="#323646"
//                         />
//                     </TouchableOpacity>
//                 </View>
//                 <Text style={styles.error}>{newPasswordError}</Text>

//                 <Text style={styles.text}>Confirmar contraseña</Text>
//                 <View style={styles.viewPassword}>
//                     <MyInput
//                         label={"Contraseña"}
//                         onChangeText={(text) => {
//                             setConfirmNewPassword(text);
//                         }}
//                         onBlur={validateConfirmNewPassword}
//                         secureTextEntry={!showConfirmNewPassword}
//                     />
//                     <TouchableOpacity
//                         onPress={toggleShowConfirmNewPassword}
//                         style={styles.eyeIcon}
//                         activeOpacity={0.8}
//                     >
//                         <Feather
//                             name={showConfirmNewPassword ? "eye" : "eye-off"}
//                             size={24}
//                             color="#323646"
//                         />
//                     </TouchableOpacity>
//                 </View>
//                 <Text style={styles.error}>{confirmNewPasswordError}</Text>

//                 <MyBottom
//                     title="Cambiar contraseña"
//                     onPress={() => {
//                         if (validateData()) {
//                             handleChangePassword(newPassword, confirmNewPassword);
//                         }
//                     }}
//                 />
//             </View>
//         </SafeAreaView>
//     );
// };

const styles = StyleSheet.create({
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
    viewPassword: {
        flexDirection: "row",
        alignItems: "center",
    },
    eyeIcon: {
        marginLeft: -40,
    }
});

export default ForgotPassword;


