import React, { useContext } from "react";
import DonorContext from "../Context/DonorContext";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../Constants/Colors";

const DonationsList = () => {
  const { donorData } = useContext(DonorContext);
  const donaciones = donorData?.donaciones || [];

    const formatDate = (itemDate) => {
        const date = new Date (itemDate)
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        
        return `${day}/${month}/${year}`
    }

  return (
    <View style={styles.container}>
      <Text>Donaciones realizadas</Text>
      <View style={styles.donationsContainer}>
        <FlatList style={{width: "90%"}}
          data={donaciones}
          renderItem={({ item }) => (
            <View style={styles.donationItem}>
                <Text style={styles.date}>{formatDate(item.date)}</Text>
                <Text style={styles.location}>{item.location}</Text>
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
        width: '100%',
        alignItems: "center"
      },
      donationsContainer:{
        width: "90%",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.input,
        alignItems: "center",
        paddingTop: 8,
        margin: 12
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      donationItem: {
        marginBottom: 6,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center'
      },
      date : {
        width: "30%",
        justifyContent: "center",
        backgroundColor: "transparent",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.input,
        alignItems: "center",
        paddingTop: 16,
        textAlign: 'center',
      },
      location : {
        height: 50,
        width: "60%",
        justifyContent: "center",
        backgroundColor: "#FCC5D2",
        borderRadius: 10,
        alignItems: "center",
        paddingTop: 16,
        textAlign: 'center',
      }

    });