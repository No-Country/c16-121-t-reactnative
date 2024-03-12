import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { AuthContext, AuthProvider } from "../Context/AuthContext";
import { Hub } from "aws-amplify";
import VerificationScreen from "../Components/ConfirmationCode";
import Background from "../Components/Background";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 300,
        alignItems: "center", // Centra el contenido horizontalmente
    },
    scrollViewContainer: {
        // flex: 1,
        marginTop: 290,
        alignItems: "center",
    },
});

export default function Verification({ navigation }) {
    return (
        /**Para evitar que el teclado del dispositivo abra y mueva el formulario hacia arriba
         * uso de la propiedad keyboardShouldPersistTaps en el componente ScrollView.
         * Esto evita que el teclado cause un desplazamiento de la vista cuando se toque un campo */
        <AuthProvider navigation={navigation}>
            <View style={styles.container}>
                <Background />
                <ScrollView contentContainerStyle={styles.scrollViewContainer} keyboardShouldPersistTaps="handled" >
                    <VerificationScreen />
                </ScrollView>
            </View>
        </AuthProvider>
    );
}
