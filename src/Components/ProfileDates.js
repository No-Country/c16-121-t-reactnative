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
import { createUser, getAllUsers, updateUserDate } from "../Utils/UserDate";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { DarckContext } from "../Context/DarckContext";

const ProfileDates = () => {
  const { userSub,dbUserInfo } = React.useContext(AuthContext);
  const { donorData } = React.useContext(DonorContext);
  const { theme } = useContext(DarckContext);
  const { colorText } = theme;

  useEffect(()=>{
   
  },[])
  

  const donorInfo = donorData || { donaciones: [] };
  const handleDialog = async() => {
    try{
    
    //console.log("essssss"+userSub)
    //await createUser("cesarrhalier@gmail.com","cesar","haa","e15ba570-00a1-700c-92e2-cfff1d3c6d45")
   // await getAllUsers()
   //await updateUserDate(userSub,"german")
   console.log(dbUserInfo)
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: "Success",
      textBody: "Se guardaron los cambios",
      button: "close",
    });
  }catch(error){
    console.log(error.menssage)
  }
  };

  const {id,nombre,apellido,edad,email,telefono,tipoSangre,dni,localidad,provincia,pais}=dbUserInfo

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={[styles.sectionTitle, { color: colorText }]}> DATOS DEL USUARIO: </Text>
        <InfoDate label={"Nombre"} value={nombre} />
        <InfoDate label={"Apellido"} value={apellido} />
        <InfoDate  label={"Edad"} canEdit value={edad}  />
        <InfoDate label={"Email"} canEdit value={email} />
        <InfoDate label={"Telefono"} canEdit value={telefono} />
        <InfoDate label={"TipoSangre"} canEdit value={tipoSangre} />
        <InfoDate label={"Dni"} canEdit value={dni} />
        <InfoDate label={"Ciudad"} canEdit value={localidad} />
        <InfoDate label={"Provincia"} canEdit value={provincia} />
        <InfoDate label={"Pais"} canEdit value={pais} />
        <MyBottom title="Guardar" onPress={handleDialog} />
        <DonationsList />
      </View>
      {/* {donorData && donorInfo.donaciones && <DonationsList />} */}
     
    </SafeAreaView>
  );
};
//en db ciudad es LOCALIDAD

function InfoDate({ label, value, canEdit }) {
  const [localValue, setLocalValue] = React.useState(value);
  const [info, setInfo] = React.useState({});
  console.log(info)

  const handleInfoChange = (newValue) => {
    setLocalValue(newValue);
    setInfo(prevState => ({
      ...prevState,
      [label]: newValue
    }));
  };

  return (
    <View style={styles.fielContainer}>
      <Text style={styles.label}> {label}</Text>
      <TextInput
        placeholder={label}
        keyboardType={canEdit ? "web-search" : "default"}
        onChangeText={canEdit && handleInfoChange}
        value={localValue}
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
