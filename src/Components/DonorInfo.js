import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../Constants/Colors";
import DateInput from "./DateInput";
import MyInput from "./MyInput";
import MyBottom from "./MyBottom";
import { useDonorContext } from "../Context/DonorContext";
import { AuthContext } from "../Context/AuthContext";
import { createRecibo } from "../Utils/userDonor";

const DonorInfo = ({ canDonate }) => {
  const { donorData, setDonorData } = useDonorContext();
  const { dbUserInfo } = React.useContext(AuthContext);

  //Guardar las donaciones en el context
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const donaciones = donorData?.donaciones || [];

  const handleSave = () => {
    if (date && location) {
      const newDonation = { date, location };
      setDonorData((prevDonorData) => {
        const updateData = {
          ...donorData,
          donaciones: [...(prevDonorData.donaciones || []), newDonation],
        };
        alert("Donación guardada con éxito");
        const fechaFormateada = date.toISOString().split("T")[0];

        const reciboDetalles = {
          usuariosID: dbUserInfo.id,
          fecha: fechaFormateada,
          centroDonacion: location,
        };

        createRecibo(reciboDetalles);
        return updateData;
      });
    } else {
      alert("Faltan ingresar datos");
    }
  };

  //Calcular cuanto falta para poder donar
  const fechaActual = new Date();

  const donacionReciente = donaciones.reduce((prev, current) => {
    const prevDate = new Date(prev.date);
    const currentDate = new Date(current.date);
    return prevDate > currentDate ? prev : current;
  }, {});

  let periodoReposo;
  if (Object.keys(donacionReciente).length == 0) {
    periodoReposo = new Date(fechaActual);
  } else {
    const donacionRecienteDate = new Date(donacionReciente.date);
    periodoReposo = new Date(donacionRecienteDate);
    periodoReposo.setMonth(periodoReposo.getMonth() + 2);
  }

  //Calcular la cantidad de días que faltan
  const diferencia = periodoReposo - fechaActual;

  //Diferencia en milisegundos
  const diasFaltantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

  return (
    <View style={styles.container}>
      {!canDonate ? (
        <Text style={styles.textInfo}>Por el momento no puedes donar</Text>
      ) : (
        <>
          {diasFaltantes <= 0 ? (
            <Text style={styles.textInfo}>List@ para donar</Text>
          ) : (
            <>
              {/* <Text style={styles.text}>Cuánto falta para volver a donar</Text> */}
              <Text style={styles.textInfo}>
                {" "}
                Aún te faltan {diasFaltantes} días para volver a donar
              </Text>
            </>
          )}

          <View style={styles.formContainer}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.inputContainer1}>
                <Text style={styles.text}>Fecha</Text>
                <DateInput value={date} onChange={setDate} />
              </View>
              <View style={styles.inputContainer2}>
                <Text style={styles.text}>Centro de donación</Text>
                {/* <MyInput style={styles.locationInput} label={"Hospital del niño"} value={location} onChangeText={setLocation} multiline={true}/> */}
                <ScrollView style={styles.locationInputContainer}>
                  <MyInput
                    style={styles.locationInput}
                    label={"Hospital del niño"}
                    multiline={true}
                    value={location}
                    onChangeText={setLocation}
                  />
                </ScrollView>
              </View>
            </View>

            <MyBottom title="Guardar" onPress={handleSave} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 20,
    alignItems: "center",
  },
  textInfo: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  formContainer: {
    width: "90%",
    backgroundColor: "transparent",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.input,
    alignItems: "center",
    paddingTop: 16,
  },
  inputContainer1: {
    width: "38%",
  },
  inputContainer2: {
    width: "52%",
    marginLeft: 12,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.input,
    paddingLeft: 10,
  },
  locationInputContainer: {
    maxHeight: 100,
    maxWidth: "100%",
  },
  locationInput: {
    height: "100%",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: Colors.input,
    borderRadius: 10,
  },
});

export default DonorInfo;
