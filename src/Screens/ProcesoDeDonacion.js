import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

const ProcesoDeDonacion = () => {
  return (
    <ScrollView>
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
              <Image source={require("../Assets/5.png")} style={styles.image} />
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50,
  },

  backgroundItem: {
    backgroundColor: "#FC688B",
    padding: 10,
    borderRadius: 5,
    width: 300,
    flexDirection: "row",
    marginTop: 10,
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
