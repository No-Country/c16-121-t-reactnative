import * as React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import DonorForm from "../Components/DonorForm";
import { Colors } from "../Constants/Colors";
import { useDonorContext } from "../Context/DonorContext";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5, // Para crear el efecto de elevación
    margin: 15,
    marginTop: "13%",
    height: "85%",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    marginTop: 50,
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.input,
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
    <View style={{ backgroundColor: "#FFEBF0", flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>¡Conviértete en donador!</Text>

        <DonorForm />
      </View>
    </View>
  );
}
