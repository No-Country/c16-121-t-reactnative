import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { Colors } from "../Constants/Colors";
import MyBottom from "./MyBottom";
import MyInput from "./MyInput";
import { Picker } from "@react-native-picker/picker";
import { ScrollView } from "react-native-gesture-handler";
import { createPublication, getUser } from "../Utils/userPublication";
import { AuthContext } from "../Context/AuthContext";

const Publication = () => {
  const { dbUserInfo } = React.useContext(AuthContext);

  // getUser(userSub).then((userInfo) => {
  //   console.log("Datos del usuario:", userInfo);
  //   userId = userInfo;
  // });

  //DE BASE DE DATOS
  const tipoSangre = ["+ A", "- A", "+ B", "- B", "+ AB", "- AB", "+ O", "- O"];

  const [selectSangre, setSelectSangre] = useState("+ A");
  const [centro, setCentro] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [telefono, setTelefono] = useState("");
  const [publicacion, setPublicacion] = useState("");
  const [cant, setCant] = useState("");
  const [formData, setFormData] = useState({});

  const handleFormData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleOptionChange = (itemValue) => {
    setSelectSangre(itemValue);
    handleFormData("selectSangre", itemValue);
  };

  function validation() {
    if (
      !selectSangre ||
      !centro ||
      !ciudad ||
      !telefono ||
      !publicacion ||
      !cant
    ) {
      alert("Faltan campos por completar");
    } else {
      // // handleSubmit()
      // createPublication()
      const fechaActual = new Date();
      const fechaFormateada = fechaActual.toISOString().split("T")[0];

      const publicationDetails = {
        publicacion: publicacion,
        fecha: fechaFormateada,
        habilitada: true,
        cantidadRequeridos: cant,
        usuariosID: dbUserInfo.id,
        tipoSangre: selectSangre,
      };
      console.log("handlesubmit ", publicationDetails);
      createPublication(publicationDetails);
    }
  }

  const handleSubmit = () => {
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toISOString().split("T")[0];

    const publicationDetails = {
      publicacion: publicacion,
      fecha: fechaFormateada,
      habilitada: true,
      // cantidadRequeridos: 10,
      usuariosID: userId,
      tipoSangre: selectSangre,
    };
    console.log("handlesubmit ", publicationDetails);
    createPublication(publicationDetails);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ width: 300, marginTop: 30 }}>
        <Text style={styles.text}>Tipo de sangre</Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selectSangre}
            onValueChange={handleOptionChange}
          >
            {tipoSangre.map((tipo, index) => (
              <Picker.Item key={index} label={tipo} value={tipo} />
            ))}
          </Picker>
        </View>
        <Text style={styles.text}>Centro de donación</Text>
        <TextInput
          style={styles.input}
          value={centro}
          onChangeText={(text) => {
            setCentro(text), handleFormData("centro", text);
          }}
        />
        <Text style={styles.text}>Cantidad de donantes</Text>
        <TextInput
          style={styles.input}
          value={cant}
          onChangeText={(text) => {
            setCant(text), handleFormData("cant", text);
          }}
        />
        <Text style={styles.text}>Ciudad</Text>
        <TextInput
          style={styles.input}
          value={ciudad}
          onChangeText={(text) => {
            setCiudad(text), handleFormData("ciudad", text);
          }}
        />
        <Text style={styles.text}>Contacto</Text>
        <TextInput
          style={styles.input}
          value={telefono}
          onChangeText={(text) => {
            setTelefono(text), handleFormData("telefono", text);
          }}
        />
        <View>
          <Text style={styles.text}>Deja tu mensaje aquí</Text>
          <TextInput
            style={styles.textInput}
            multiline={true}
            value={publicacion}
            onChangeText={(text) => {
              setPublicacion(text), handleFormData("publicacion", text);
            }}
          ></TextInput>
        </View>

        <MyBottom title="Publicar" onPress={() => validation()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  columnContainer: {
    flexDirection: "row",
    width: "90%",
    gap: 14,
    padding: 80,
  },
  text: {
    fontWeight: "bold",
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 10,
    width: "100%",
    height: 45,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.input,
    marginBottom: 4,
  },
  pickerContainer: {
    // paddingHorizontal: 10,
    width: "100%",
    height: 45,
    justifyContent: "center",
    // margin: 10,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.input,
    marginBottom: 4,
  },
  picker: {
    width: "100%",
  },
  textInputContainer: {
    height: 100,
    width: "90%",
  },
  textInput: {
    height: 100,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: Colors.input,
    borderRadius: 10,
  },
});

export default Publication;
