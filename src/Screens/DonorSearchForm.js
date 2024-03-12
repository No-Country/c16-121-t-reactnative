import * as React from "react";
import { View, ScrollView, StyleSheet, Pressable, Text,KeyboardAvoidingView  } from "react-native";
import ChangePassword from "../Components/ChangePassword";
import Publication from "../Components/Publication";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../Constants/Colors";
import { SafeAreaView } from "react-native-web";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 5, // Para crear el efecto de elevación
        margin: 15,
        marginTop: "13%",
        height: "90%",
        alignItems: "center",
        justifyContent: "center",
      },
      textStyle: {
       marginTop:30,
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

export default function DonorSearchForm() {
  const navigation = useNavigation();
  return (
   
    <View style={{ backgroundColor: "#FFEBF0" }}>
      <Pressable style={{marginTop:30, marginHorizontal:20, marginBottom:-40}} onPress={navigation.goBack}>
      <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
      
      <View style={styles.container}>
        <Text style={styles.textStyle}>¿Buscas donador?</Text>
        <Publication/>
        
      </View>
    </View>
    

  );
}
