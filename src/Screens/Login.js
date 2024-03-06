import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useContext } from "react";
import { DarckContext } from "../Context/DarckContext";
import { Hub } from "aws-amplify";
import  SignIn  from "../Components/SignIn";
import Background from "../Components/Background";
import { AuthProvider } from "../Context/AuthContext";

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
      
       
    },
    scrollViewContainer: {
        // flex: 1,
        marginTop: 190,
        alignItems: "center", // Centra el contenido horizontalmente
    },
});

export default function Login({ navigation }) {

    const { theme } = useContext(DarckContext);
    const { background} = theme;
  
    const [user, setUser] = React.useState(null);

    const listener = (data) => {
        switch (data.payload.event) {
        case "signIn":
            const { attributes } = data.payload.data;
            setUser(attributes);
            break;
        default:
            break;
        }
    };

    React.useEffect(() => {
        Hub.listen("auth", listener);
        return () => Hub.remove("auth", listener);
    }, []);

    return (
        /**Para evitar que el teclado del dispositivo abra y mueva el formulario hacia arriba
         * uso de la propiedad keyboardShouldPersistTaps en el componente ScrollView.
         * Esto evita que el teclado cause un desplazamiento de la vista cuando se toque un campo */
        
        <AuthProvider navigation={navigation}>
        <View style={[styles.container, {backgroundColor:background}]}>
            <Background/>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} keyboardShouldPersistTaps="handled" >
            
                <SignIn />
            </ScrollView>
        </View>
        </AuthProvider>
    );
}
