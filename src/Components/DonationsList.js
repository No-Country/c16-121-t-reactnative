import React, { useContext, useEffect, useState } from "react";
import DonorContext from "../Context/DonorContext";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../Constants/Colors";
import { getRecibosPorUsuario } from "../Utils/userDonor";
import { AuthContext } from "../Context/AuthContext";

const DonationsList = () => {
  const { donorData } = useContext(DonorContext);
  const { dbUserInfo } = React.useContext(AuthContext);
  // const donaciones = donorData?.donaciones || [];

  const [donaciones, setDonaciones] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try{
        const reciboDonaciones = await getRecibosPorUsuario(dbUserInfo.id);
        setDonaciones(reciboDonaciones)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [donaciones])

  // const donaciones = getRecibosPorUsuario(dbUserInfo.id).then((recibos) => {
  //     console.log("recibos:", recibos);
  //   });

  const formatDate = (itemDate) => {
    const date = new Date(itemDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Donaciones realizadas</Text>
      <View style={styles.donationsContainer}>
        <FlatList
          style={{ width: "90%" }}
          data={donaciones}
          renderItem={({ item }) => (
            <View style={styles.donationItem}>
              <Text style={styles.date}>{formatDate(item.fecha)}</Text>
              <Text style={styles.location}>{item.centroDonacion}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        ></FlatList>
      </View>
    </View>
  );
};

export default DonationsList;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  text:{
    fontSize: 17,
    fontWeight:'bold',
    width: "90%",
    textDecorationLine: "underline",
  },
  donationsContainer: {
    width: "90%",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.input,
    alignItems: "center",
    paddingVertical: 10,
    margin: 12,
  },
  donationItem: {
    marginVertical: 4,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  date: {
    width: "34%",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.input,
    alignItems: "center",
    paddingVertical: 10,
    textAlign: "center",
  },
  location: {
    height: "auto",
    width: "60%",
    justifyContent: "center",
    backgroundColor: "#FCC5D2",
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    textAlign: "center",
  },
});
