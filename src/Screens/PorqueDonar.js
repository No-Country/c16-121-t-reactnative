import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

const PorqueDonar = () => {
  return (
   <View style={{backgroundColor:'#FFEBF0', flex:1}}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>¿POR QUÉ DONAR?</Text>
        <View style={styles.backgroundItem}>
          <Image
            source={require("../Assets/manosgota.png")}
            style={styles.image}
          />
          <Text style={styles.text}>
            Porque donar sangre es un acto de solidaridad que puede hacer un
            impacto duradero en la comunidad
          </Text>
        </View>
        
        <View style={styles.backgroundItem}>
          <Image
            source={require("../Assets/salud.png")}
            style={styles.image}
          />
          <Text style={styles.text}>
            Con tu apoyo, puedes ser la razón por la cual alguien recupera su
            salud y su felicidad
          </Text>
        </View>
        <View style={styles.backgroundItem}>
          <Image
            source={require("../Assets/manosgota.png")}
            style={styles.image}
          />
          <Text style={styles.text}>
            Dar sangre es un acto de generosidad que puede hacer una diferencia
            real en la vida de alguien más
          </Text>
        </View>
        <View style={styles.backgroundItem}>
          <Image
            source={require("../Assets/vida.png")}
            style={styles.image}
          />
          <Text style={styles.text}>
            Tu donación puede ser la clave para salvar vidas y brindar esperanza
            a quienes más lo necesitan.
          </Text>
        </View>
      </View>
      </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5, 
    margin: 10,
    padding: 10,
    alignItems:'center',
    justifyContent:'center',
    height:'60%',
    marginTop:'30%'
  },
  backgroundItem: {
    backgroundColor: "#FC688B",
    padding: 10,
    borderRadius: 5,
    width: 350,
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
    marginLeft: 10,
    flex: 1, 
  },
  textTitle: {
    fontSize: 30,
    color: "grey",
    fontWeight: "bold",
  },
  image: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
});

export default PorqueDonar;
