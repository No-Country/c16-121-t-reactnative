import React from "react";
import { View, Text, SafeAreaView, FlatList,ScrollView } from "react-native";
import { HeaderMovil } from "../Components/headerComponent/HeaderMovil";
import { PostCard } from "../Components/postCard/PostCard";
import CardHome from "../Components/CardHome";

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
    image:
      "https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp",
  },
  // {
  //   name: "maria lopez",
  //   city: "Buenos Aires",
  //   country: "",
  //   location: "Hospital General del Niño",
  //   contact: "4645564156",
  //   coment:
  //     "With React Native, you style your application using JavaScript. All of the core components accept a prop named style. The style names and values usually match how CSS works on the ith React Native, you style your application usin .",
  //   type: "+A",
  //   image:'https://st4.depositphotos.com/1325564/19966/i/450/depositphotos_199669506-stock-photo-beautiful-kitten-scottish-fold-play.jpg'
  // },
  // {
  //   name: "sofia lopez",
  //   city: "Buenos Aires",
  //   country: "",
  //   location: "Hospital General del Niño",
  //   contact: "4645564156",
  //   coment:
  //     "With React Native, you style your application using JavaScript. All of the core componentsyou style your application using JavaScript. All of the core components  accept a prop named style. The style names and values usually match how CSS works on the ith React Native, you style your application usin .",
  //   type: "+A",
  //   image:'https://planetamascotaperu.com/wp-content/uploads/2021/04/Llamame-Gatito.jpg'
  // },
  // {
  //   name: "pedro lopez",
  //   city: "Buenos Aires",
  //   country: "",
  //   location: "Hospital Hipólito Unanue",
  //   contact: "4645564156",
  //   coment:
  //     "With React Native, you style your application using JavaScript. All of the core components accept a prop named style. The style names andyou style your application using JavaScript. All of the core components  values usually match how CSS works on the ith React Native, you style your application usin . The style names andyou style your application using JavaScript. All of the core components  values usually match how CSS works on the ith React Native, you style your application usi .",
  //   type: "+A",
  //   image:"https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp"

  // },
  // {
  //   name: "clara lopez",
  //   city: "Buenos Aires",
  //   country: "",
  //   location: "Hospital General del Niño",
  //   contact: "4645564156",
  //   coment:
  //     "With React Native, you style your application using JavaScript. All of the core components accept a prop named style. The style names and values usually match how CSS works on the ith React Native, you style your application usin .",
  //   type: "+A",
  //   image:"https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp"

  // },
];

const Home = () => {
  return (

    <ScrollView>
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 3 / 5 }}>
        <HeaderMovil condition={true}></HeaderMovil>
      </View>
      <View style={{ marginTop: 30 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <PostCard itemProfile={item}></PostCard>}
          keyExtractor={(item) => item.name}
        ></FlatList>
        <View style={{ marginTop: -70 }}>
          <CardHome />
        </View>
      </View>

      {/* <View style={{ flex: 5/7}}>

          <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => <PostCard itemProfile={item}></PostCard>}
          keyExtractor={(item) => item.name}
        ></FlatList>
     
      </View>  */}
    </SafeAreaView>
    </ScrollView>
  );
};

export default Home;