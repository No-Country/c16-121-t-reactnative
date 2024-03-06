import React from "react";
import { View, Text, SafeAreaView, FlatList, ScrollView } from "react-native";
import { HeaderMovil } from "../Components/headerComponent/HeaderMovil";
import { PostCard } from "../Components/postCard/PostCard";
import CardHome from "../Components/CardHome";
import { DarckContext } from "../Context/DarckContext";
import { useContext } from "react";

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
];

const Home = () => {
  const { theme } = useContext(DarckContext);
  const { background } = theme;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: background }}>
      <View style={{ flex: 3 / 5 }}>
        <HeaderMovil condition={true}></HeaderMovil>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => <PostCard itemProfile={item}></PostCard>}
        keyExtractor={(item) => item.name}
        style={{ marginTop: 110, marginBottom: -390 }}
      ></FlatList>

      <CardHome />
    </SafeAreaView>
  );
};

export default Home;
