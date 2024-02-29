import * as React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../Constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

const ProfileDates = () => {
  // const username = attributes && attributes.name ? attributes.name : '';

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}> INFORMACION DEL USUARIO: </Text>

      <InfoDate label={"Nombre"} canEdit value={"LUCIA"} />
      <InfoDate label={"Edad   "} canEdit value={"LUCIA"} />
      <InfoDate label={"Nacimiento"} canEdit value={"LUCIA"} />
      <InfoDate label={"Residencia"} canEdit value={"LUCIA"} />
    </View>
  );
};
function InfoDate({ label, value, canEdit, handleUpDate, handleContext }) {
  const [localValue, setLocalValue] = React.useState(value);
  return (
    <View style={styles.fielContainer}>
      <Text style={styles.label}> {label}</Text>
      <TextInput
        placeholder={label}
        keyboardType={canEdit ? "web-search" : "default"}
        onChangeText={canEdit && setLocalValue}
        value={localValue}
        onSubmitEditing={() => alert("hello")}
        style={{
          fontWeight: "500",
          flexShrink: 1,
          marginHorizontal: 50,
          flex: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: "grey",
    marginBottom: 1,
  },
  fielContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.background,
    paddingVertical: 11,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontWeight: "500",
    color: "grey",
    width: "60%",
    fontSize: 16,
  },
  card: {
    flex: 1,
    height: 100,
    backgroundColor: Colors.profileCard,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 3,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },

  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
});

export default ProfileDates;
