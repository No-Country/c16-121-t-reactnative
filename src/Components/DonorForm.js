import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../Constants/Colors";
import { Picker } from "@react-native-picker/picker";
import DonorContext, { useDonorContext } from "../Context/DonorContext";
import DonorInfo from "./DonorInfo";

const DonorForm = () => {
  const { donorData, setDonorData } = useDonorContext();
  const [isEditing, setIsEditing] = useState(true);
  const [canDonate, setCanDonate] = useState(true);

  useEffect(() => {
    if(donorData){
      setIsEditing(false)
    }
  }, [donorData])

  //Tipo  de Sangre SE TIENE QUE SACAR DE LA BASE DE DATOS
  const tipoSangre = ["+ A", "- A", "+ B", "- B", "+ AB", "- AB", "+ O", "- O"];

  const [selectSangre, setSelectSangre] = useState(
    donorData?.tipoSangre || "+ A"
  );

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
      question:
        "¿Te has realizado algún tatuaje o perforación en los últimos 12 meses?",
    },
    {
      id: 3,
      question:
        "¿Tienes antecedentes de enfermedades transmitidas por la sangre, como hepatitis B, hepatitis C o VIH/SIDA?",
    },
    {
      id: 4,
      question: "¿Has recibido alguna vacuna en los últimos 48 horas?",
    },
  ];

  const [answers, setAnswers] = useState(donorData?.respuestas || {});

  //Verificar si todo ha sido respondido
  const [allAnswer, setAllAnswer] = useState(false);
  useEffect(() => {
    setAllAnswer(Object.keys(answers).length === questions.length);
  }, [answers]);

  const handleAnswer = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const isOptionSelected = (questionId, option) => {
    return answers[questionId] === option;
  };

  // const Donor = useContext(DonorContext);

  const saveForm = () => {
    if (allAnswer) {
      setDonorData((prevDonorData) => ({
        ...prevDonorData,
        tipoSangre: selectSangre,
        respuestas: answers,
        donaciones: prevDonorData && prevDonorData.donaciones
      }));
      setIsEditing(false);

      //verificar si puede donar
      const yesAnswer = Object.values(answers).some((answer) => answer === true);
      setCanDonate(!yesAnswer);
    } else {
      alert("Por favor, responde todas las preguntas");
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      {!isEditing ?
        <>
          <View style={styles.donorContainer}>
          
            <DonorInfo canDonate={canDonate}/>
            <TouchableOpacity  onPress={toggleEdit}>
            <Text style={styles.textUpdate}>{"<"}Actualizar los datos </Text>
          </TouchableOpacity>
          </View>
        </>
      :
        <>
          <View style={styles.formContainer}>
            <Text style={styles.text}>Tipo de sangre</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                dropdownIconColor={Colors.input}
                dropdownIconRippleColor="#FCC5D2"
                selectedValue={selectSangre}
                onValueChange={handleOptionChange}
              >
                {tipoSangre.map((tipo, index) => (
                  <Picker.Item key={index} label={tipo} value={tipo} />
                ))}
              </Picker>
            </View>
            {questions.map((item, index) => (
              <View key={index} style={{ width: "100%" }}>
                <Text style={styles.text}>{item.question}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[
                      styles.buttom,
                      isOptionSelected(item.id, true) && {
                        backgroundColor: "#FCC5D2",
                      },
                    ]}
                    onPress={() => handleAnswer(item.id, true)}
                  >
                    <Text>Sí</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.buttom,
                      isOptionSelected(item.id, false) && {
                        backgroundColor: "#FCC5D2",
                      },
                    ]}
                    onPress={() => handleAnswer(item.id, false)}
                  >
                    <Text>No</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <TouchableOpacity style={styles.formButton} onPress={saveForm}>
              <Text style={styles.saveFormButton}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    marginTop:'-4%'
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.input,
    marginBottom: 8,
    paddingRight: 20,
    paddingLeft: 20,
  },
  textUpdate: {
    fontSize: 14,
    marginBottom: 8,
    paddingRight: 20,
    paddingLeft: 20,
    width: "100%",
    textDecorationLine: "underline", 
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
  },
  donorContainer: {
    width: "98%",
    height: "100%",
    justifyContent: "flex-start",
    gap: 20,
    alignItems: "center",
    paddingTop: 16,
  },
  pickerContainer: {
    width: "42%",
    height: 44,
    borderWidth: 2,
    borderColor: Colors.input,
    borderRadius: 22,
    marginBottom: 16,
    justifyContent: "center",
  },
  picker: {
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    gap: 20,
    width: "100%",
    marginBottom: 18,
  },
  buttom: {
    width: 80,
    height: 40,
    borderWidth: 2,
    borderColor: Colors.input,
    borderRadius: 22,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  formButton: {
    backgroundColor: Colors.input,
    borderBottomEndRadius: 16,
    borderBottomLeftRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 44,
  },
  saveFormButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DonorForm;
