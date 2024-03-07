import React from "react";
import { StyleSheet, View, Text, ScrollView, Image,Pressable  } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const ProcesoDeDonacion = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor:'#FFEBF0'}}>
      <Pressable style={{marginTop:30, marginHorizontal:20, marginBottom:-40}} onPress={navigation.goBack}>
      <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
      <View style={styles.container2}>
        <Text style={styles.textTitle}>PROCESO DE DONACIÓN</Text>
        <View style={styles.backgroundItem}>
          <Image source={require("../Assets/1_12269574.png")} style={styles.image} />
          <Text style={styles.text}>
            Ve al centro de donación, reserva una cita previa o simplemente
            acude a cualquier centro dedonación de sangre.
          </Text>
        </View>
        <View style={styles.backgroundItem}>
        <Image source={require("../Assets/2.png")} style={styles.image} />
          <Text style={styles.text}>
            Todos losdonantes deben registrarse y responder todas las preguntas
            de preselección.
          </Text>
        </View>
        <View style={styles.backgroundItem}>
        <Image source={require("../Assets/3.png")} style={styles.image} />
          <Text style={styles.text}>
            El médico preguntará sobre parte de tu historial médico y algunas
            preguntas personales. Asegúrate de que toda la información
            proporcionada sea verdadera y correcta.
          </Text>
        </View>
        <View style={styles.backgroundItem}>
        <Image source={require("../Assets/4.png")} style={styles.image} />
          <Text style={styles.text}>
            Se medirá tu temperatura corporal, presión arterial, frecuencia
            cardíaca y nivel de hemoglobina en la sangre.
          </Text>
        </View>
        <View style={styles.backgroundItem}>
        <Image source={require("../Assets/5.png")} style={styles.image} />
          <Text style={styles.text}>
            Relájate y siéntete cómodo en la silla designada. El médico limpiará
            un área en tu brazo e insertará una aguja estéril nueva para
            extraerla sangre.
          </Text>
        </View>
        <View style={styles.backgroundItem}>
              <Image source={require("../Assets/6.png")} style={styles.image} />
          <Text style={styles.text}>
            Se medirá tu temperatura corporal, presión arterial, frecuencia
            cardíaca y nivel de hemoglobina en la sangre.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container2: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5, 
    margin: 10,
    padding: 10,
    alignItems:'center',
    justifyContent:'center',
    height:'95%',
    marginTop:'10%'
  },

  backgroundItem: {
    backgroundColor: "#FC688B",
    padding: 10,
    borderRadius: 5,
    width: 300,
    flexDirection: "row",
    marginTop: 10,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    flex: 1, 
  },
  textTitle: {
    fontSize: 30,
    color: "grey",
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default ProcesoDeDonacion;
