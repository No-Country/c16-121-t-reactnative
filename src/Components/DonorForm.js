import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../Constants/Colors";
import { Picker } from "@react-native-picker/picker";
import MyBottom from "./MyBottom";

const DonorForm = () => {
  //Tipo  de Sangre SE TIENE QUE SACAR DE LA BASE DE DATOS
  const tipoSangre = ["+ A", "- A", "+ B", "- B", "+ AB", "- AB", "+ O", "- O" ];

  const [selectSangre, setSelectSangre] = useState(tipoSangre[0]);

  const handleOptionChange = (itemValue) => {
    setSelectSangre(itemValue);
  };

  //PREGUNTAS . RELACIONAR CON DB
  const questions = [
    {   
        id: 1,
        question: "¿Has tenido alguna cirugía en los últimos seis meses?",
    },
    {
        id: 2,
        question: "¿Te has realizado algún tatuaje o perforación en los últimos 12 meses?",
    },
    {   
        id: 3,
        question: "¿Tienes antecedentes de enfermedades transmitidas por la sangre, como hepatitis B, hepatitis C o VIH/SIDA?",
    },
    {
        id: 4,
        question: "¿Has recibido alguna vacuna en los últimos 48 horas?",
    }
  ]

    const [answer,setAnswer] = useState({});

    const handleAnswer = (questionId, answer) => {
        setAnswer(prevAnswers => ({
            ...prevAnswers,
            [questionId]: answer
        }));
    }

    const isOptionSelected = (questionId, option) => {
      return answer[questionId] === option;
    };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.text}>Tipo de sangre</Text>
        <View style={styles.pickerContainer}>
            <Picker style={styles.picker}  dropdownIconColor={ Colors.input} dropdownIconRippleColor="#FCC5D2"
                selectedValue={selectSangre}
                onValueChange={handleOptionChange}
                >
                {tipoSangre.map((tipo, index) => (
                    <Picker.Item key={index} label={tipo} value={tipo} />
                ))}
            </Picker>
        </View>
        {questions.map((item,index) => (
          <View key={index}>
            <Text style={styles.text}>{item.question}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.buttom, isOptionSelected(item.id,true) && {
                backgroundColor: "#FCC5D2"
              }]} onPress={() => handleAnswer(item.id, true)}>
                <Text>Sí</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.buttom, isOptionSelected(item.id,false) && {
                backgroundColor: "#FCC5D2"}]} onPress={() => handleAnswer(item.id, false)}>
                <Text>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.formButton} >
          <Text style={styles.saveFormButton}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%"
  },
  scrollViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.input,
    marginBottom: 8,
  },
  formContainer: {
    width: "90%",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.input,
    alignItems: "center",
    paddingTop: 16,
    // padding: 10,
    // paddingLeft: 10,
  },
  pickerContainer: {
    width: "42%",
    height: 44,
    borderWidth: 2,
    borderColor: Colors.input,
    borderRadius: 22,
    marginBottom: 16,
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
  },
  buttonContainer:{
    flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent: "center",
    gap: 10,
    width: "60%",
    marginBottom: 18
  },
  buttom:{
    width: 80,
    height: 40,
    borderWidth: 2,
    borderColor: Colors.input,
    borderRadius: 22,
    textAlign: 'center',
    justifyContent: "center",
    alignItems: "center"
  },
  formButton: {
    backgroundColor: Colors.input,
    borderBottomEndRadius: 16,
    borderBottomLeftRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: 44
  },
  saveFormButton:{
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default DonorForm;
