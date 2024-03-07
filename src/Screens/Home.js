import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { HeaderMovil } from "../Components/headerComponent/HeaderMovil";
import { PostCard } from "../Components/postCard/PostCard";
import CardHome from "../Components/CardHome";
import { DarckContext } from "../Context/DarckContext";
import { useContext } from "react";
import Background from "../Components/Background";
import { AntDesign } from "@expo/vector-icons";
import ModalList from "../Components/ModalList";

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
import { AuthContext } from "../Context/AuthContext";

const Home = () => {
  const { setHome } = React.useContext(AuthContext);
  const [publications, setPublications] = useState([]);
  const { theme } = useContext(DarckContext);
  const { background, colorText } = theme;

  const navigation = useNavigation();
  const handleSearchDonor = () => {
    navigation.navigate("DonorSearchForm");
  };

  const formatDate = (itemDate) => {
    const date = new Date(itemDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  React.useEffect(() => {
    setHome((prevState) => prevState + 1);
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    try {
      const fetchedPublications = await getPublications();
      const reaccionesDePublicacion = await Promise.all(
        fetchedPublications.map(async (publicacion) => {
          const reacciones = await cantidadReaccionesPorPublicacion(
            publicacion.id
          );
          return { ...publicacion, cantidadReacciones: reacciones };
        })
      );
      setPublications(reaccionesDePublicacion);
    } catch (error) {
      console.error("Error al traer las publicaciones", error);
    }
  };
  const renderPublicationItem = ({ item }) => (
    <View style={[styles.card, { backgroundColor: background }]}>
      <View style={styles.cardContent}>
        <Text style={[styles.usuario, { color: colorText }]}>
          Nombre:{" "}
          {item.usuario
            ? item.usuario.nombre + " " + item.usuario.apellido
            : "Usuario desconocido"}
        </Text>
        <Text style={[styles.usuario, { color: colorText }]}>
          Contacto:{" "}
          {item.usuario ? item.usuario.telefono : "Telefono desconocido"}
        </Text>
        <Text style={[styles.usuario, { color: colorText }]}>
          Localidad:{" "}
          {item.usuario ? item.usuario.localidad : "Localidad desconocida"}
        </Text>
        <Text style={[styles.usuario, { color: colorText }]}>
          Tipo de sangre requerido: {item.tipoSangre}
        </Text>
        <View style={styles.publicacionContainer}>
          <Text style={styles.publicacion}>{item.publicacion}</Text>
        </View>
        <Text style={[styles.usuario, { color: colorText }]}>
          Fecha de publicación: {formatDate(item.fecha)}
        </Text>
      </View>
      <View style={{ marginTop: "40%", elevation: 3, flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold" }}>{item.cantidadReacciones}</Text>
        <IconToDonate style={styles.icono} itemId={item.id} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: background }]}>
      <View>
        <Background />
      </View>
      <View style={{ marginTop: "55%" }}>
        <TouchableOpacity onPress={handleSearchDonor}>
          <View style={styles.searchContainer}>
            <ModalList style={styles.ModalList} />
            <Text style={styles.buscar}>¿Buscas donador?{""} </Text>
            <AntDesign name="search1" size={20} color="#808080" />
          </View>
        </TouchableOpacity>
        <FlatList
          data={publications}
          renderItem={renderPublicationItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "3%",
    backgroundColor: "#FFB6C1",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderColor: "#999999",
    borderWidth: 1,
    padding: 20,
    marginTop: 10,
    marginBottom: 8,
    borderRadius: 10,
    elevation: 3,
  },
  ModalList: {

    position: "absolute",
    bottom:50,
  },

  buscar: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#404040",
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
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    width: "115%",
  },
  tipoSangre: {
    fontSize: 16,
    color: "#595959",
    marginBottom: 5,
    color: "black",
  },
  fecha: {
    fontSize: 14,
    color: "#999",
    marginTop: 10,
    color: "black",
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
