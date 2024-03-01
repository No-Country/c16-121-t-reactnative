import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../Constants/Colors";
import DateInput from "./DateInput";
import MyInput from "./MyInput";
import MyBottom from "./MyBottom";
import { useDonorContext } from "../Context/DonorContext";

const DonorInfo = ({ canDonate }) => {
  const { donorData, setDonorData } = useDonorContext();

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
        console.log(date, typeof date);
        alert("Donación guardada con éxito");
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

  console.log("donRec ", donacionReciente);

  let periodoReposo;
  if (Object.keys(donacionReciente).length == 0) {
    periodoReposo = new Date(fechaActual);
  } else {
    const donacionRecienteDate = new Date(donacionReciente.date);
    periodoReposo = new Date(donacionRecienteDate);
    periodoReposo.setMonth(periodoReposo.getMonth() + 2);
  }
  console.log("perRepo ", periodoReposo);

  //Calcular la cantidad de días que faltan
  const diferencia = periodoReposo - fechaActual;
  
  //Diferencia en milisegundos
  const diasFaltantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

  console.log("diasfaltantes ", diasFaltantes);

  return (
    <View style={styles.container}>
      {!canDonate ? (
        <Text style={styles.textInfo}>Por el momento no puedes donar</Text>
      ) : (
        <>
          {diasFaltantes <= 0 ? (
            <Text style={styles.textInfo }>List@ para donar</Text>
          ) : (
            <>
              {/* <Text style={styles.text}>Cuánto falta para volver a donar</Text> */}
              <Text style={styles.textInfo}>  Aún te faltan {diasFaltantes} días para volver a donar</Text>
            </>
          )}

          <View style={styles.formContainer}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={styles.text}>Fecha</Text>
                <DateInput value={date} onChange={setDate}
                />
              </View>
              <View>
                <Text style={styles.text}>Centro de donación</Text>
                <MyInput label={"Hospital del niño"} value={location} onChangeText={setLocation}/>
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
        gap: 20
    },
  textInfo: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.input,
    marginBottom: 8,
    paddingRight: 20,
    paddingLeft: 20,
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
  textContainer: {
    width: "100%",
    backgroundColor: "transparent",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.input,
    height: 44,
      textAlign: "center"
  },
});

export default DonorInfo;
