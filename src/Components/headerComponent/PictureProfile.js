import * as React from "react";
import { View, Text, StyleSheet, Button, Platform, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { CLOUD_NAME, UPLOAD_PRESET } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { TouchableOpacity } from "react-native";
import { Colors } from "../../Constants/Colors";
import { IconToNotification } from "../iconNotification/iconToNotification";
import { useContext } from "react";
import { DarckContext} from "../../Context/DarckContext";
import { AuthContext } from "../../Context/AuthContext";
import { getUser } from "../../Utils/userPublication";


export const PictureProfile = ({showButton}) => {


 const {dbUserInfo } = React.useContext(AuthContext);
 console.log('data1', dbUserInfo)



  const [picture, setPicture] = React.useState("");
  const { theme } = useContext(DarckContext);
  const { borderDarck } = theme;

  React.useEffect(() => {

    const getPhoto = ()=>{
      const photo = dbUserInfo.imagen;

      console.log('imagen' ,dbUserInfo.imagen);

      if (photo !== null) setPicture(dbUserInfo.imagen);
    }
    // const getPhoto = async () => {
    //   const photo = await AsyncStorage.getItem("@pic");
    //   if (photo !== null) setPicture(photo);
    // };
    getPhoto();

  });



  const pickImage = async () => {
  
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need access");
      }
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      allowsEditing: true,
      quality: 0.1,
      base64: true,
    });

    let base64Img = `data:image/jpg;base64,${result.assets[0].base64}`;
    let apiUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const data = new FormData();
    data.append("file", base64Img);
    data.append("upload_preset", UPLOAD_PRESET);
    // let data={
    //   "file":base64Img,
    //   "upload_preset": UPLOAD_PRESET,

    // }

    if (!result.canceled) {
      setPicture(result.assets[0].uri);

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          body: data,
        });

        const json = await response.json();
        console.log("Response claudinary", json);
        console.log("PROBANDING", UPLOAD_PRESET);
        console.log("PROBANDING", CLOUD_NAME);

        // Lógica para guardarlo en la base de datos
        // Guardar en localStorage

        await AsyncStorage.setItem("@pic", json.url);
        console.log("url", json.url);


      } catch (e) {
        console.log(e);
      }
    }
    
  };

  return (
    <View style={style.container}>
      <View style={[style.profile, {borderColor: borderDarck }]}>
        {showButton && (
          <TouchableOpacity onPress={pickImage} style={style.button}>
            <Text style={{ fontSize: 18, color: "white", fontWeight: "800" }}>
              +
            </Text>
          </TouchableOpacity>
        )}

        {picture !== "" && (
          <Image source={{ uri: picture }} style={style.image}></Image>
        )}
      </View>
      {!showButton && (
      <View style= {style.iconNotification}>
        <IconToNotification></IconToNotification>
      </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    
  },
  profile: {
    aspectRatio: 1,
    borderWidth: 3,
    borderRadius: 200,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflow: "hidden",
    borderColor:'black',
    
  },
  iconNotification: {
    position: "absolute",
    right: -8.5,
  },

  button: {
    width: "35%",
    height: "35%",
    borderRadius: 200,
    backgroundColor: Colors.bottonLogin,
    color: "black",
    position: "absolute",
    zIndex: 25,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderWidth:1
  },

  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    aspectRatio: 1,
    borderRadius: 200,
   
  },
});
