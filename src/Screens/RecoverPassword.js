import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ForgotPassword from "../Components/ForgotPassword";
import Background from "../Components/Background";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 290,
    alignItems: "center", // Centra el contenido horizontalmente
  },
  scrollViewContainer: {
    // flex: 1,
    marginTop: 290,
    alignItems: "center",
  },
});

export default function RecoverPassword() {
  return (
    /**Para evitar que el teclado del dispositivo abra y mueva el formulario hacia arriba
     * uso de la propiedad keyboardShouldPersistTaps en el componente ScrollView.
     * Esto evita que el teclado cause un desplazamiento de la vista cuando se toque un campo */
    <View>
      <Background />
      <View style={styles.container}>
        <ForgotPassword />
      </View>
    </View>
  );
}
