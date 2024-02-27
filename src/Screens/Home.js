import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { HeaderMovil } from "../Components/headerComponent/HeaderMovil";
import { PostCard } from '../Components/postCard/PostCard'


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


const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 3/8}}>
        <HeaderMovil condition={true}></HeaderMovil>
      </View>
   

      <View style={{ flex: 5/7}}>
          <FlatList
          data={data}
          renderItem={({ item }) => <PostCard itemProfile={item}></PostCard>}
          keyExtractor={(item) => item.name}
        ></FlatList>
     
      </View> 


  
    </SafeAreaView>
  );
};

export default Home;
