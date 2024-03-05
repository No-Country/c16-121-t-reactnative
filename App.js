import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Amplify, Hub, AuthModeStrategyType } from "aws-amplify";


import config from "./src/aws-exports";
import { AuthProvider } from "./src/Context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-gesture-handler";
import AuthStack from "./src/Navigation/AuthStack";
import MyStack from "./src/Navigation/UserStack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ModoDarck from "./src/Components/ButtomMod";
// import { Darck } from "./src/Constants/Colors";
// import { DonorProvider } from "./src/Context/DonorContext";
import {AlertNotificationRoot } from 'react-native-alert-notification';
import { DonorProvider } from "./src/Context/DonorContext";
import { DarckProvider } from "./src/Context/DarckContext";


Amplify.configure({
  ...config,
  Analytics: { disabled: true },
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  
});


export default function App() {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [authState, setAuthState] = React.useState("signIn");


  
 



  
  const [signedIn, setSignedIn] = React.useState(false);

  const listener = (data) => {
    // console.log('Evento recibido:', data.payload);
    switch (data.payload.event) {
      case "signIn":
        const { attributes } = data.payload.data;
        setUser(attributes);
        setSignedIn(true); 
        break;
      case "signOut":
        setUser(null);

        setSignedIn(false); 

        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    Hub.listen("auth", listener);
    return () => Hub.remove("auth", listener);
  }, [user]);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <AlertNotificationRoot>
          <DonorProvider>
            <DarckProvider>
              <View style={styles.container}>
                {/* <MapScreen/>*/}
                {user ? <MyStack /> : <AuthStack />}
                <ModoDarck/>
              </View>
            </DarckProvider>
          </DonorProvider>
        </AlertNotificationRoot>
      </AuthProvider>

    </GestureHandlerRootView>
  );
}
