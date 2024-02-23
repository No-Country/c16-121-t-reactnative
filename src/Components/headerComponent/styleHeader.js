import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

export const headerStyle = StyleSheet.create({
  container: {
    flex:1/3,
    padding: "6%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.background,
  },
  text: {
    color: "white",
    margin: "10",
    textAlign: "left",
  },
  button: {
    backgroundColor: Colors.background,
    borderColor: "white",
    borderWidth: 1,
    width:'100%',
    padding:'3%',
    justifyContent: "center",
    alignItems: "center",
 
    borderRadius: 25,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
    marginTop: 10
  },

  logo: {
    width: 90,
    height: 50,
  },

  profileScreen: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 50,
  },
  
  logoProfile: {
    width: "100%",
    height: "30%",
 
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom:20
  },
});
