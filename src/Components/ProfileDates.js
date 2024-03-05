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

const ProfileDates = () => {
  const { sub,authState,userSub } = React.useContext(AuthContext);
  const userName = authState && authState.attributes && authState.attributes.name;
 const idUser = authState && authState.attributes && authState.attributes.sub;
  const { donorData } = React.useContext(DonorContext);

  const donorInfo = donorData || { donaciones: [] };
  const handleDialog = async() => {
    try{
    console.log("essssss"+userSub)
   // await createUser()
   // await getAllUsers()
   // await updateUserDate("51cbf5e0-8031-7089-8eee-d1463ad65583","german")

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

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}> DATOS DEL USUARIO: </Text>
        <InfoDate label={"Nombre"} value={"userName"} />
        <InfoDate label={"Edad   "} canEdit value={"28"} />
        <InfoDate label={"Nacimiento"} canEdit value={"17/07/95"} />
        <InfoDate label={"Ciudad"} canEdit value={"CORDOBA"} />
        <MyBottom title="Guardar" onPress={handleDialog} />
      </View>
      {donorData && donorInfo.donaciones && <DonationsList />}
    </SafeAreaView>
  );
};
//en db ciudad es LOCALIDAD

function InfoDate({ label, value, canEdit, handleUpDate, handleContext }) {
  const [localValue, setLocalValue] = React.useState(value);
  return (
    <View style={styles.fielContainer}>
      <Text style={styles.label}> {label}</Text>
      <TextInput
        placeholder={label}
        keyboardType={canEdit ? "web-search" : "default"}
        onChangeText={canEdit && setLocalValue}
        value={localValue}
        onSubmitEditing={() => alert("hello")}
        style={{
          fontWeight: "500",
          flexShrink: 1,
          marginHorizontal: 50,
          flex: 1,
          width:"40%",
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
    color: "grey",
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
    color: "grey",
    width: "50%",
    fontSize: 16,
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
