import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { publicacionesPorUsuario } from "../Utils/userPublication";
import { AuthContext } from "../Context/AuthContext";
import { Colors } from "../Constants/Colors";
import Background from "../Components/Background";
import { useContext } from "../Context/DarckContext";
import { DarckContext } from "../Context/DarckContext";

const MisPublicaciones = () => {
  const { dbUserInfo } = React.useContext(AuthContext);
  const [publicaciones, setPublicaciones] = React.useState([]);
  const { theme } = React.useContext(DarckContext);
  const { background, colorText } = theme;

  const formatDate = (itemDate) => {
    const date = new Date(itemDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const UserId = dbUserInfo.id;

  const obtenerPublicaciones = () => {
    publicacionesPorUsuario(UserId)
      .then((data) => {
        setPublicaciones(data);
      })
      .catch((error) => {
        console.error("Error al obtener las publicaciones:", error);
      });
  };

  React.useEffect(() => {
    obtenerPublicaciones();
  }, []);

  const renderPublicationItem = ({ item }) => (
    <View style={[styles.card, { backgroundColor: background }]}>
      <View style={styles.cardContent}>
        <Text style={styles.fecha}>
          Fecha de publicación: {formatDate(item.fecha)}
        </Text>
        <Text style={styles.tipoSangre}>
          Tipo de sangre requerido: {item.tipoSangre}
        </Text>
        <View style={styles.publicacionContainer}>
          <Text style={styles.publicacion}> {item.publicacion}</Text>
        </View>
        <Text style={styles.requerido}>
          Cantidad requerida:{item.cantidadRequeridos}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <Background />
      <Text style={[styles.title, { color: colorText }]}>
        {" "}
        Publicaciones realizadas:
      </Text>
      <FlatList
        data={publicaciones}
        renderItem={renderPublicationItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    marginTop: 220,
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.input,
    textAlign: "center",
  },
  publicacion: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contenido: {
    fontSize: 16,
    marginBottom: 5,
  },
  autor: {
    fontSize: 14,
    color: "#666666",
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
  cardContent: {
    flex: 1,
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
    width: "98%",
  },
  tipoSangre: {
    fontSize: 17,
    color: "#595959",
    marginBottom: 5,
    color: Colors.input,
  },
  fecha: {
    fontSize: 14,
    color: "#999",
    marginTop: 10,
    color: "black",
    fontWeight: "bold",
  },
  requerido: {
    fontSize: 17,
    color: "#999",
    marginTop: 10,
    color: "black",
  },
});

export default MisPublicaciones;
