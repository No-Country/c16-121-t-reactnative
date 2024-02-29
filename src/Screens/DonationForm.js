import * as React from "react";
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import DonorForm from "../Components/DonorForm";
import { Colors } from "../Constants/Colors";
import { useDonorContext } from "../Context/DonorContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textStyle: {
    marginTop: 150,
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.input,
    marginBottom: -20,
  },
  scrollViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", // Centra el contenido horizontalmente
  },
});

export default function DonationForm() {
  const { donorData } = useDonorContext();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.textStyle}>¡Conviértete en donador!</Text>
        <DonorForm />
      </ScrollView>
    </View>
  );
}
