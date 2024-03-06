import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image
} from "react-native";
import { HeaderMovil } from "../Components/headerComponent/HeaderMovil";
import { PostCard } from "../Components/postCard/PostCard";
import CardHome from "../Components/CardHome";
import { DarckContext } from "../Context/DarckContext";
import { useContext } from "react";
import Background from "../Components/Background";

import {
  fetchUserByEmail,
  getAllPublications,
  getAllPublicationsToday,
  getPost,
  getPublications,
  getUser,
} from "../Utils/userPublication";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../Constants/Colors";
import { IconToDonate } from "../Components/iconNotification/iconToDonate";

const Home = () => {
  const [publications, setPublications] = useState([]);
  const { theme } = useContext(DarckContext);
  const {
    background,
    margin,
    height,
    borderBottomLeftRadius,
    borderBottomRightRadius,
  } = theme;

  const navigation = useNavigation();
  const handleSearchDonor = () => {
    navigation.navigate("DonorSearchForm");
  };

  getPublications().then((publicaciones) => {
    console.log("publicaciones:", publicaciones);
  });

  React.useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    try {
      const fetchedPublications = await getPublications();
      setPublications(fetchedPublications);
    } catch (error) {
      console.error("Error al traer las publicaciones", error);
    }
  };
  const renderPublicationItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.usuario}>Nombre: {item.usuarioID}</Text>
        <Text style={styles.tipoSangre}>
          Tipo de sangre requerido: {item.tipoSangre}
        </Text>
        <View style={styles.publicacionContainer}>
          <Text style={styles.publicacion}>{item.publicacion}</Text>
        </View>
        <Text style={styles.fecha}>Fecha de publicación: {item.fecha}</Text>
      </View>
      <View style={{ marginTop: "40%", elevation: 3 }}>
        <IconToDonate style={styles.icono} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: "white" }]}>
      <View>
        <Background/>

        {/* <HeaderMovil condition={true}></HeaderMovil> */}
      </View>
      <View style={{ marginTop: "55%" , backgroundColor:'white'}}>
        <TouchableOpacity onPress={handleSearchDonor}>
          <View style={styles.searchContainer}>
          <Text style={styles.buscar}>¿Buscas donador?{""}</Text>
          <Image   
          source={require("../Assets/lupa.png")}
          style={styles.lupa}></Image>
          </View>
        </TouchableOpacity>
        <FlatList
          data={publications}
          renderItem={renderPublicationItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        ></FlatList>

        {/* <CardHome style={{ marginTop: 10}}/> */}
        
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding:'1%',
    backgroundColor: '#FFB6C1',
  },

  
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: 'white',
    borderColor:'#999999',
    borderWidth:1,
    padding: 20,
    marginTop:10,
    borderRadius: 10,
    elevation: 5,
    
  },
  buscar:{
    fontSize:20,
    textAlign:'center',
    fontWeight: "bold",
    color:'#808080'

    
  },
  icono: {
    marginTop: 10,
    alignSelf: "flex-end",
    elevation: 3,
  },
  cardContent: {
    flex: 1,
  },
  publicacion: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
   
  },
  usuario: {
    fontSize: 18,
    color: "black",
    marginBottom: 5,
    fontWeight: "bold"
  },
  publicacionContainer: {
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    padding:15,
    marginTop: 10,
    marginBottom: 10,
    width: "115%",

  },
  tipoSangre: {
    fontSize: 16,
    color: '#595959',
    marginBottom: 5,
    backgroundColor:'red',
    width:'100%',
    padding:5,
    
  },
  fecha: {
    fontSize: 14,
    color: "#999",
    marginTop: 10,
    color:'#595959'

  },
  lupa:{
    width:'10%',
    height:'100%',
    margin:5
  }
});
export default Home;
