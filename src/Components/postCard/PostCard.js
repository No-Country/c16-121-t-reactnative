import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";
import { PictureProfile } from "../headerComponent/PictureProfile";
import { IconToDonate } from "../iconNotification/iconToDonate";

const infoProfile = {
  name: "laura lopez",
  city: "Buenos Aires",
  country: "",
  location: "Hospital General del Niño",
  contact: "4645564156",
  coment:
    "With React Native, you style your application using JavaScript. All of the core components accept a prop named style. The style names and values usually match how CSS works on the ith React Native, you style your application usin .",
  type: "+A",
};

const InfoDetail = ({ value, option }) => {
  return (
    <View style={style.list}>
      <Text style={[{ fontWeight: "bold" }, style.textList]}>{option}</Text>
      <Text style={style.textList}>{value}</Text>
    </View>
  );
};

export const PostCard = ({ itemProfile }) => {
  return (
    <View style={[style.container]}>
      <View style={style.containerInfo}>
        <View style={style.itemProfile}>

        <PictureProfile showButton={false}></PictureProfile>
        <View style={style.containerIcon} >
          <IconToDonate ></IconToDonate>
        </View>
        

        </View>

        <View style={style.itemInfo}>
          <View style={[style.titleName, {borderBottomWidth: 0.5, borderColor:Colors.background}]}>
            <Text>{itemProfile.name}</Text>
          </View>

          <View style={style.infoRequired}>
            <View style={style.infoDetail}>
              <InfoDetail
                value={itemProfile.city}
                option="Ciudad :"
              ></InfoDetail>
              <InfoDetail
                value={itemProfile.country}
                option="País :"
              ></InfoDetail>
              <InfoDetail
                value={itemProfile.location}
                option="Localización :"
              ></InfoDetail>
              <InfoDetail
                value={itemProfile.contact}
                option="Contacto :"
              ></InfoDetail>
            </View>

            <View
              style={[
                style.type,
                { justifyContent: "space-around", alignItems: "center",  },
              ]}
            >
              <Text
                style={{
                  flex: 1 / 5,
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                Tipo requerido
              </Text>

              <View
                style={{
                  flex: 3 / 5,
                  borderColor: Colors.background,
                  borderWidth: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  borderStyle: "dashed",
                  borderRadius: 14,
                  borderDashOffset: 12,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {itemProfile.type}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={style.coment}>
        <Text>{itemProfile.coment}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  // Contenedor general
  container: {
    flex: 1,
    flexDirection: "column",
    // padding: "8%",

    paddingLeft:'9%',
    paddingRight:'9%',
    marginTop: "4%",
  },
  containerInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 2 / 4,
  },
  // componente de foto de perfil
  itemProfile: {
    flex: 1 / 4,
    padding:'3%',
    position:'relative',
 
    // borderColor: "red",
    // borderWidth: 4,
  },
  containerIcon:{
   position:'absolute',
   top:0,
   bottom:0,
   right:0,
   justifyContent:'flex-end',
    
  },

  itemInfo: {
    flex: 3 / 4,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: "2%",
  },

  infoRequired: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  

  titleName: {
    flex: 1 / 5,
  },

  type: {
    flex: 1 / 4,
    flexDirection: "column",
  },

  infoDetail: {
    // width: "65%",
    flex: 3 / 4,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingRight:'2%'
  },

  list: {
    flexDirection: "row",
    justifyContent: 'flex-end',
 
  },
  textList: {
    flex:1,
    fontSize: 11,

  },
  flexColumn: {},
  flexRow: {
    flexDirection: "row",
  },
  titleName: {},
  coment: {
    flex: 2 / 4,
    backgroundColor: "white",
    borderColor: Colors.background,
    borderWidth: 2,
    padding: "2.5%",
    borderRadius: 15,
    width: "100%",
    marginTop: "2%",
  },
});
