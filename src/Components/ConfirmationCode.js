import React, { useState, useRef, useContext, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../Context/AuthContext';
import { useRoute } from '@react-navigation/native';

const VerificationScreen = () => {
    const { handleConfirmSignUp, email, verificationCode } = useContext(AuthContext);
    const [enteredCode, setEnteredCode] = useState('');
    const verificationInputs = useRef([]);
    const {correo}=useRoute().params

    useEffect(() => {
        if (verificationCode && enteredCode.length === 6) {
            handleVerification();
        }
    }, [verificationCode]);

    const handleVerification = async () => {
        console.log("Valor de verificationCode:", enteredCode);
        try {
            await handleConfirmSignUp(enteredCode, correo);
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

    return (
        <View style={styles.container}>
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
                                handleVerification();
                            }
                        }}
                    />
                ))}
            </View>
            <Button title="Verificar" onPress={handleVerification} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        width: 40,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        marginRight: 10,
    },
});

export default VerificationScreen;
