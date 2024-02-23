import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Colors } from "../Constants/Colors";
import { FontAwesome } from '@expo/vector-icons';

const ProfileDates = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.text}>Nombre</Text>
          <TextInput
            style={styles.input}
            placeholder="Información adicional"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Edad</Text>
          <TextInput
            style={styles.input}
            placeholder="Información adicional"
            placeholderTextColor="white"
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.text}>Fecha de nacimiento</Text>
          <TextInput
            style={styles.input}
            placeholder="Información adicional"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Pais-Ciudad de procedencia  <FontAwesome name="map-marker" size={16} color="white" /></Text>
          <TextInput
            style={styles.input}
            placeholder="Información adicional"
            placeholderTextColor="white"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    flex: 1,
    height: 100,
    backgroundColor:Colors.profileCard,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 3, 
    borderRadius:15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6, 
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: 'transparent',
    color:'white',
    borderRadius: 5,
  },
  text:{
    fontWeight:'bold',
    color:'white',
    fontSize:16
  }
});

export default ProfileDates;
