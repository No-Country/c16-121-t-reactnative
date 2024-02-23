import * as React from "react";
import { View } from "react-native";

import { Hub } from "aws-amplify";
import Background from "./src/Components/Background";
import SignIn from "./src/Components/SignIn";
import {
  PictureProfile,
  ProfileScreen,
} from "./src/Components/headerComponent/PictureProfile";
import { HeaderMovil } from "./src/Components/headerComponent/HeaderMovil";
import { PostCard } from "./src/Components/postCard/PostCard";
import { FlatList, Text, StyleSheet } from "react-native";
import { IconToDonate } from "./src/Components/iconNotification/iconToDonate";
import { SafeAreaView } from "react-native-safe-area-context";


export default function FileCaro() {
  // const [user, setUser] = React.useState(null);
  // const listener = (data) => {
  //   switch (data.payload.event) {
  //     case "signIn":
  //       const { attributes } = data.payload.data;
  //       setUser(attributes);
  //       break;
  //     default:
  //       break;
  //   }
  // };
  // Hub.listen("auth", listener);

  const data = [
    {
      name: "laura lopez",
      city: "Buenos Aires",
      country: "",
      location: "Hospital General del Niño",
      contact: "4645564156",
      coment:
        "Ccation using JavaScript. All of the core components accept a prop named style. The style names and values usually match how CSS works on the ith React Native, you style your application usin .",
      type: "+A",
    },
    {
      name: "maria lopez",
      city: "Buenos Aires",
      country: "",
      location: "Hospital General del Niño",
      contact: "4645564156",
      coment:
        "With React Native, you style your application using JavaScript. All of the core components accept a prop named style. The style names and values usually match how CSS works on the ith React Native, you style your application usin .",
      type: "+A",
    },
    {
      name: "sofia lopez",
      city: "Buenos Aires",
      country: "",
      location: "Hospital General del Niño",
      contact: "4645564156",
      coment:
        "With React Native, you style your application using JavaScript. All of the core componentsyou style your application using JavaScript. All of the core components  accept a prop named style. The style names and values usually match how CSS works on the ith React Native, you style your application usin .",
      type: "+A",
    },
    {
      name: "pedro lopez",
      city: "Buenos Aires",
      country: "",
      location: "Hospital Hipólito Unanue",
      contact: "4645564156",
      coment:
        "With React Native, you style your application using JavaScript. All of the core components accept a prop named style. The style names andyou style your application using JavaScript. All of the core components  values usually match how CSS works on the ith React Native, you style your application usin . The style names andyou style your application using JavaScript. All of the core components  values usually match how CSS works on the ith React Native, you style your application usi .",
      type: "+A",
    },
    {
      name: "clara lopez",
      city: "Buenos Aires",
      country: "",
      location: "Hospital General del Niño",
      contact: "4645564156",
      coment:
        "With React Native, you style your application using JavaScript. All of the core components accept a prop named style. The style names and values usually match how CSS works on the ith React Native, you style your application usin .",
      type: "+A",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <HeaderMovil></HeaderMovil>

     <View style={{ flex: 1, padding: "6%" }}>
          <FlatList
          data={data}
          renderItem={({ item }) => <PostCard itemProfile={item}></PostCard>}
    
          keyExtractor={(item) => item.name}
        ></FlatList>
     
      </View>  

    
    </SafeAreaView>
  );
}
