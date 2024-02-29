import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ForgotPassword from "../Components/ChangePassword";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 300,
        alignItems: "center", // Centra el contenido horizontalmente
    },
});

export default function NewPassword() {
    return (
        /**Para evitar que el teclado del dispositivo abra y mueva el formulario hacia arriba
         * uso de la propiedad keyboardShouldPersistTaps en el componente ScrollView.
         * Esto evita que el teclado cause un desplazamiento de la vista cuando se toque un campo */
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} keyboardShouldPersistTaps="handled" >
                <ForgotPassword />
            </ScrollView>
        </View>
    );
}