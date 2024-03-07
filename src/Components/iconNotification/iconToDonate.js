import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import iconToDonate1 from "../../../assets/iconToDonate1.png";
import iconToDonate2 from "../../../assets/iconToDonate2.png";
import MyBottom from "../MyBottom";
import { ModalComponent } from "../modal";
import { useContext } from "react";
import {AuthContext} from '../../Context/AuthContext'
import { createReacion } from "../../Utils/userReacciones";


export const IconToDonate = ({itemId}) => {
  const [iconState1, setIconState1] = useState(true);
  const [iconState2, setIconState2] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const {dbUserInfo}=React.useContext(AuthContext)


  const infoReaccion = {
    publicacionID: itemId,
    usuariosID: dbUserInfo.id,
  };
  const toggleIcon = () => {
    setVisibleModal(true);
    // createReacion(infoReaccion)
  };
  // Función para hacer contacto y enviar notidicación
  const sendNotification = () => {
    createReacion(infoReaccion)
    console.log("se envió solicitud");
  };




  // Función para hacer solicitud de eliminar contactar
  const deleteNotification = () =>{
    console.log('eliminando notificación')
  }

  const messege = {
    messege1:
      "Se enviará una reacción a esta publicación y una notificación para ponerte en contacto con el propietario, ¿Estás seguro de contactar?",
    messege2: "¿Está segur@ de que ya no desea ponerse en contacto con el solicitante?",
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={toggleIcon}>
        {iconState1 && <Image style={style.image} source={iconToDonate1}></Image>}
        {iconState2 && <Image style={style.image} source={iconToDonate2}></Image>}
      </TouchableOpacity>

        <ModalComponent
          visible={visibleModal}
          text={iconState1 ? messege.messege1 : messege.messege2}
         
          onPress={(option) => {
            if (option === "si") {
              if (iconState1) {
                sendNotification();
                setIconState1(false);
                setIconState2(true);
              } else {
                deleteNotification();
                setIconState1(true);
                setIconState2(false);
              }
            }
            setVisibleModal(false);
          }}
        ></ModalComponent>
  
    </View>
  );
};

const style = StyleSheet.create({
  container:{
 
  }, 
  image:{
    width:40,
    height:40,
    objectFit: 'contain'
  }
 
});
