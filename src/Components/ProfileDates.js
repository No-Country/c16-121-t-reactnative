import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";
import { Colors } from "../Constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
// import { updateUserAge, updateUserDate, updateUserLocation } from "../Utils/UserDate";
import { AuthContext } from "../Context/AuthContext";
import DonationsList from "./DonationsList";
import DonorContext from "../Context/DonorContext";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import DialogAlert from "./DialogAlert";
import MyBottom from "./MyBottom";
import { createUser, getAllUsers, updateUserProfile } from "../Utils/UserDate";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { DarckContext } from "../Context/DarckContext";

const ProfileDates = () => {
  const { userSub,dbUserInfo,setHome } = React.useContext(AuthContext);
  const { donorData } = React.useContext(DonorContext);
  const { theme } = useContext(DarckContext);
  const { colorText } = theme;

  const [info, setInfo] = React.useState(dbUserInfo);
  const {id,nombre,apellido,edad,email,telefono,tipoSangre,dni,localidad,provincia,pais}=info
  useEffect(()=>{
   console.log(dbUserInfo)
  },[dbUserInfo])
  

  const donorInfo = donorData || { donaciones: [] };
  const handleDialog = async() => {
    try{
 
   await updateUserProfile(info)
   setHome(prevState => prevState + 1)
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: "Éxito",
      textBody: "Se guardaron los cambios",
      button: "close",
    });
  }catch(error){
    console.log(error.menssage)
  }
  };

  

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={[styles.sectionTitle, { color: colorText }]}> DATOS DEL USUARIO: </Text>
        <InfoDate label={"Nombre"} canEdit setInfo={setInfo} info={info} type="string"/>
        <InfoDate label={"Apellido"} canEdit setInfo={setInfo} info={info} type="string"/>
        <InfoDate label={"Edad"} canEdit setInfo={setInfo} info={info} type="default"/>
        <InfoDate label={"Email"} canEdit setInfo={setInfo} info={info} type="string"/>
        <InfoDate label={"Telefono"} canEdit setInfo={setInfo} info={info} type="default"/>
        <InfoDate label={"TipoSangre"} canEdit setInfo={setInfo} info={info} type="string"/>
        <InfoDate label={"Dni"} canEdit setInfo={setInfo} info={info} type="default"/>
        <InfoDate label={"Localidad"} canEdit setInfo={setInfo} info={info} type="string"/>
        <InfoDate label={"Provincia"} canEdit setInfo={setInfo} info={info} type="string"/>
        <InfoDate label={"Pais"} canEdit setInfo={setInfo} info={info} type="string"/>
        <MyBottom title="Guardar" onPress={handleDialog} />
        <DonationsList />
      </View>
      {/* {donorData && donorInfo.donaciones && <DonationsList />} */}
     
    </SafeAreaView>
  );
};
//en db ciudad es LOCALIDAD

function InfoDate({ label, type, canEdit, setInfo, info}) {

  const handleInfoChange = (newValue) => {
    setInfo(prevState => {
      const news = { ...prevState, [label.toLowerCase()]: newValue };
      return news;
    });
  }

  const valueUser=info[label==="TipoSangre"?"tipoSangre":label.toLowerCase()]
  const firstLetterUp= typeof valueUser ==="string"?valueUser.charAt(0).toUpperCase() + valueUser.slice(1):valueUser
 console.log(typeof firstLetterUp+label)

  return (
    <View style={styles.fielContainer}>
      <Text style={styles.label}> {label}</Text>
      <TextInput
        placeholder={label}
        keyboardType={type === "string" ? "string" : "default"}
        onChangeText={canEdit && handleInfoChange}
        value={toString(valueUser)}
        onSubmitEditing={() => alert("hello")}
        style={{
          fontWeight: "500",
          flexShrink: 1,
          marginHorizontal: 10,
          flex: 1,
          width:"auto",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: "black",
    marginBottom: 1,
  },
  fielContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.background,
    paddingVertical: 11,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontWeight: "500",
    color: "black",
    width: "50%",
    fontSize: 16,
    marginLeft:10,
  },
  card: {
    flex: 1,
    height: 100,
    backgroundColor: Colors.profileCard,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 3,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  infoUser: {
   width: "40%",
  },

  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
});

export default ProfileDates;
