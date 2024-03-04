import * as React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import DonorForm from "../Components/DonorForm";
import { Colors } from "../Constants/Colors";
import { useDonorContext } from "../Context/DonorContext";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "#FFEBF0", flex: 1 }}>
      <Pressable style={{marginTop:30, marginHorizontal:20, marginBottom:-40}} onPress={navigation.goBack}>
      <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
      
      <View style={styles.container}>
        <Text style={styles.textStyle}>¡Conviértete en donador!</Text>

        <DonorForm />
      </View>
    </View>
  );
}
