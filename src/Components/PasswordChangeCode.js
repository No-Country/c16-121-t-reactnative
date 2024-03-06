import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { StyleSheet, Text , TextInput, TouchableOpacity, View} from 'react-native';
import { AuthContext } from '../Context/AuthContext';
import MyBottom from './MyBottom';
import MyInput from './MyInput';
import { Feather } from "@expo/vector-icons";

const PasswordChangeCode = () => {
    const { handleForgotPasswordSubmit, verificationCode } = useContext(AuthContext);
    const [enteredCode, setEnteredCode] = useState('');
    const verificationInputs = useRef([]);
    const {email}=useRoute().params

    useEffect(() => {
        if (verificationCode && enteredCode.length === 6) {
            handleVerificationChangePassword();
        }
    }, [verificationCode]);

    const handleVerificationChangePassword = async () => {
        console.log("Valor de verificationCode:", enteredCode);
        try {
            await handleForgotPasswordSubmit( email, enteredCode, newPassword);
            Alert.alert('Éxito', 'Código de verificación correcto');
        } catch (error) {
            Alert.alert('Error', 'Código de verificación incorrecto');
        }
    };

    const handleChangeText = (index, value) => {
        setEnteredCode(prevCode => {
            const newCode = prevCode.split('');
            newCode[index] = value;
            return newCode.join('');
        });

        if (value.length === 1 && index < verificationInputs.current.length - 1) {
            verificationInputs.current[index + 1].focus();
        }
    };

    const {
        setPassword,
        handleChangePassword,
        navigation
    } = React.useContext(AuthContext);

    // Definir estados para la nueva contraseña, confirmación y errores
    const [newPassword, setNewPassword] = React.useState("");
    const [confirmNewPassword, setConfirmNewPassword] = React.useState("");
    const [newPasswordError, setNewPasswordError] = React.useState("");
    const [confirmNewPasswordError, setConfirmNewPasswordError] = React.useState("");

    // Función para validar el formato del correo electrónico
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setEmailError("Ingresa un correo electrónico válido");
        } else {
            setEmailError("");
        }
    };
    
    // Validar que la nueva contraseña cumpla con los requisitos
    const validateNewPassword = () => {
        if (newPassword.length < 6 || !/[A-Z]/.test(newPassword)) {
            setNewPasswordError("Debe tener al menos 6 caracteres y una mayúscula");
        } else {
            setNewPasswordError("");
        }
    };

    // Validar que la confirmación de la contraseña sea igual a la nueva contraseña
    const validateConfirmNewPassword = () => {
        if (newPassword !== confirmNewPassword) {
            setConfirmNewPasswordError("Las contraseñas no son iguales");
        } else {
            setConfirmNewPasswordError("");
        }
    };

    // Mostrar u ocultar las contraseñas
    const [showNewPassword, setShowNewPassword] = React.useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = React.useState(false);
    const toggleShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };
    const toggleShowConfirmNewPassword = () => {
        setShowConfirmNewPassword(!showConfirmNewPassword);
    };

    // Función para validar todos los campos antes de enviar la solicitud de cambio de contraseña
    const validateData = () => {
        if (newPasswordError !== "" || confirmNewPasswordError !== "") {
            return false;
        }
        return true;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ingrese el código de verificación</Text>
            <View style={styles.inputsContainer}>
                {[...Array(6)].map((_, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        maxLength={1}
                        onChangeText={text => handleChangeText(index, text)}
                        ref={ref => (verificationInputs.current[index] = ref)}
                        keyboardType="numeric"
                        returnKeyType="next"
                        blurOnSubmit={false}
                        onSubmitEditing={() => {
                            if (index === 5) {
                                handleVerificationChangePassword();
                            }
                        }}
                    />
                ))}
            </View>
            <Text style={styles.text}>Nueva contraseña</Text>
                <View style={styles.viewPassword}>
                    <MyInput
                        label={"Contraseña"}
                        onChangeText={(text) => {
                            setNewPassword(text);
                            {
                                setPassword(text);
                            }
                        }}
                        onBlur={validateNewPassword}
                        secureTextEntry={!showNewPassword}
                    />
                    <TouchableOpacity
                        onPress={toggleShowNewPassword}
                        style={styles.eyeIcon}
                        activeOpacity={0.8}
                    >
                        <Feather
                            name={showNewPassword ? "eye" : "eye-off"}
                            size={24}
                            color="#323646"
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.error}>{newPasswordError}</Text>

                <Text style={styles.text}>Confirmar contraseña</Text>
                <View style={styles.viewPassword}>
                    <MyInput
                        label={"Contraseña"}
                        onChangeText={(text) => {
                            setConfirmNewPassword(text);
                        }}
                        onBlur={validateConfirmNewPassword}
                        secureTextEntry={!showConfirmNewPassword}
                    />
                    <TouchableOpacity
                        onPress={toggleShowConfirmNewPassword}
                        style={styles.eyeIcon}
                        activeOpacity={0.8}
                    >
                        <Feather
                            name={showConfirmNewPassword ? "eye" : "eye-off"}
                            size={24}
                            color="#323646"
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.error}>{confirmNewPasswordError}</Text>
            {/*<Button title="Verificar" onPress={handleVerificationChangePassword} /> */}
            <MyBottom title="Verificar" onPress={handleVerificationChangePassword}/>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#F3305F",
        alignItems: 'center',
        marginRight: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20
    },
    input: {
        width: 40,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        marginRight: 10,
    },
    viewPassword: {
        flexDirection: "row",
        alignItems: "center",
    },
    eyeIcon: {
        marginLeft: -40,
    }
});

export default PasswordChangeCode