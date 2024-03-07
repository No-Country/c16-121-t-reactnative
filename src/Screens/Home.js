import React, { useState } from "react";
import { View, Text, SafeAreaView, FlatList, ScrollView, StyleSheet, TouchableOpacity, Image, Pressable } from "react-native";
import { HeaderMovil } from "../Components/headerComponent/HeaderMovil";
import { PostCard } from "../Components/postCard/PostCard";
import CardHome from "../Components/CardHome";
import { DarckContext } from "../Context/DarckContext";
import { useContext } from "react";
import Background from "../Components/Background";
import { AntDesign } from '@expo/vector-icons';


import {
  cantidadPublicacionesPorUsuario,
  cantidadReaccionesPorPublicacion,
  datosReaccion,
  fetchUserByEmail,
  getAllPublications,
  getAllPublicationsToday,
  getPost,
  getPublications,
  getUser,
  publicacionesPorUsuario,
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

  // getPublications().then((publicaciones) => {
  //   // console.log("publicaciones:", publicaciones);
  // });

  cantidadReaccionesPorPublicacion("34aed3f7-4a96-41c3-8a21-d8bd94cb3c64").then((reaccion) => {
      console.log("CANTIDAD REACCIONES:", reaccion);
    });

  cantidadPublicacionesPorUsuario("617b9174-2dc1-4dc7-9d2a-8b6489943b6b").then((publicacion) => {
    console.log("CANTIDAD PUBLICACIONES:", publicacion);
  });

  datosReaccion("633a17fb-0067-4e72-9720-d3dbf2504fbb").then((reaccion) => {
    console.log("DATOS REACCION:", reaccion);
  });

  publicacionesPorUsuario("617b9174-2dc1-4dc7-9d2a-8b6489943b6b").then((pub) => {
    console.log("PUBLICACION POR USUARIO:", pub);
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
        <Text style={styles.usuario}>Nombre: {item.usuario ? item.usuario.nombre : 'Usuario desconocido'}</Text>
        <Text style={styles.contacto}>Contacto: {item.usuario ? item.usuario.telefono : 'Telefono desconocido'}</Text>
        <Text style={styles.localidad}>Localidad: {item.usuario ? item.usuario.localidad : 'Localidad desconocida'}</Text>
        <Text style={styles.tipoSangre}>
          Tipo de sangre requerido: {item.tipoSangre}
        </Text>
        <View style={styles.publicacionContainer}>
          <Text style={styles.publicacion}>{item.publicacion}</Text>
        </View>
        <Text style={styles.fecha}>Fecha de publicación: {item.fecha}</Text>
      </View>
      <View style={{ marginTop: "40%", elevation: 3 }}>
        <IconToDonate style={styles.icono} itemId={item.id}/>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: "white" }]}>
      <View>
    <Background/>
        {/* <HeaderMovil condition={true}></HeaderMovil> */}
      </View>
      <View style={{ marginTop: "55%" }}>
        <TouchableOpacity onPress={handleSearchDonor}>
          <View style={styles.searchContainer}>
          <Text style={styles.buscar}>¿Buscas donador?{""}  </Text>
          {/* <Image   
          source={require("../Assets/lupa.png")}
          style={styles.lupa}></Image> */}
       <AntDesign name="search1" size={20} color="#808080" />
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
    padding:'3%',
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
    marginBottom: 8,
    borderRadius: 10,
    elevation: 3,
    
  },
  buscar: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color:'#404040'
    
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
    fontWeight: "bold",
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
    color:'black'
  },
  fecha: {
    fontSize: 14,
    color: "#999",
    marginTop: 10,
    color:'black'
  },
  lupa: {
    width: "10%",
    height: "100%",
    margin: 5,
  },
  contacto: {
    fontSize: 18,
    color: "black",
    marginBottom: 5,
    fontWeight: "bold",
  },
  localidad: {
    fontSize: 18,
    color: "black",
    marginBottom: 5,
    fontWeight: "bold",
  },
});
export default Home;
