import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

const PorqueDonar = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
       
        <Text style={styles.textTitle}>¿POR QUE DONAR?</Text>
        <View style={styles.backgroundItem}>
        
          <Text style={styles.text}>
            Porque donar sangre es un acto de solidaridad que puede hacer un
            impacto duradero en la comunidad
          </Text>
        </View>
        <View style={styles.backgroundItem}>
          <Text style={styles.text}>
            Con tu apoyo, puedes ser la razón por la cual alguien recupera su
            salud y su felicidad
          </Text>
        </View>
        <View style={styles.backgroundItem}>
          <Text style={styles.text}>
            Dar sangre es un acto de generosidad que puede hacer una diferencia
            real en la vida de alguien más
          </Text>
        </View>
        <View style={styles.backgroundItem}>
          <Text style={styles.text}>
            Tu donación puede ser la clave para salvar vidas y brindar esperanza
            a quienes más lo necesitan.
          </Text>
        </View>
      </View>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 230,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom:30,
  },
  backgroundItem: {
    backgroundColor: "#FC688B",
    padding: 10,
    borderRadius: 5,
    flexWrap: "wrap",
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
  },
  textTitle: {
    fontSize: 30,
    color: "grey",
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
     },
});

export default PorqueDonar;
