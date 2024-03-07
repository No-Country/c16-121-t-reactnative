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
} from "react-native";
import { HeaderMovil } from "../Components/headerComponent/HeaderMovil";
import { PostCard } from "../Components/postCard/PostCard";
import CardHome from "../Components/CardHome";
import { DarckContext } from "../Context/DarckContext";
import { useContext } from "react";



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
        <IconToDonate style={styles.icono} itemId={item.id}/>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: "white" }]}>
      <View>

        <HeaderMovil condition={true}></HeaderMovil>
      </View>
      <View style={{ marginTop: "65%", height: "50%" }}>
        <TouchableOpacity onPress={handleSearchDonor}>
          <Text>¿Buscas donador?{">"}</Text>
        </TouchableOpacity>
        <FlatList
          data={publications}
          renderItem={renderPublicationItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        ></FlatList>

        <View style={{ marginLeft: "21%" }}>
          <CardHome style={{ marginTop: 15}}/>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F8F9F9",
    padding: 15,
    marginBottom: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    elevation: 3,
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
    fontSize: 15,
    color: "black",
    marginBottom: 5,
    textDecorationLine: "underline",
  },
  publicacionContainer: {
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    width: "110%",
  },
  tipoSangre: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,

    fontWeight: "bold",
  },
  fecha: {
    fontSize: 14,
    color: "#999",
    marginTop: 10,
  },
});
export default Home;
