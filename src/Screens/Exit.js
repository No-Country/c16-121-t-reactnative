import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../Constants/Colors";
import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../Context/AuthContext";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    textStyle: {
        marginTop: 150,
        fontSize: 23,
        fontWeight: "bold",
        color: Colors.input,
        marginBottom: 8
    },
    scrollViewContainer: {
        alignItems: "center", // Centra el contenido horizontalmente
    },
});

export default function Exit() {
    const { setAuthState } = React.useContext(AuthContext);
    const navigation = useNavigation();

    React.useEffect(()=> {
        const handleExit= async ()=>{
            try {
                await Auth.signOut();
                setAuthState("signIn")
                navigation.navigate("Login")
              } catch (error) {
                console.log('error signing out: ', error);
              }
        }
        handleExit()
      }, [])
   
    return (
        <View style={styles.container}>
             <Text >Saliendo de la app...</Text>
        </View>
    );
}
