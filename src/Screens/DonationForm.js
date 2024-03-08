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
import { useContext } from "react";
import { DarckContext } from "../Context/DarckContext";
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
    marginTop: 10,
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
  const{theme} = useContext(DarckContext);
  const{background, backgroundGrey, colorText} = theme

  return (
    <View style={{ backgroundColor: background, flex: 1 }}>
      <Pressable style={{marginTop:30, marginHorizontal:20, marginBottom:-30}} onPress={navigation.goBack}>
      <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
      
      <View style={[styles.container, {backgroundColor:backgroundGrey}]}>
        <Text style={[styles.textStyle, {color:colorText}]}>¡Conviértete en donador!</Text>

        <DonorForm />
      </View>
    </View>
  );
}
