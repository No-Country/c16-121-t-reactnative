import React, { useState, useRef } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const VerificationScreen = () => {
    const [verificationCode, setVerificationCode] = useState('');
    const verificationInputs = useRef([]);

    const handleVerification = () => {
        const code = verificationInputs.current
        .map(input => input ? input.props.value : '')
        .join('');

        if (code === '123456') { 
            Alert.alert('Éxito', 'Código de verificación correcto');
        } else {
            Alert.alert('Error', 'Código de verificación incorrecto');
        }
    };

    const handleChangeText = (index, value) => {
        const newVerificationCode = verificationCode.split('');
        newVerificationCode[index] = value;
        setVerificationCode(newVerificationCode.join(''));

        // Auto focus next input
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

