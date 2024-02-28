import * as React from "react";
import { View, StyleSheet, SplashScreen } from "react-native";
import Navigation from "./src/Navigation/Tabs";
import { Amplify, Hub, AuthModeStrategyType } from "aws-amplify";
import config from './src/aws-exports';
import { AuthProvider } from './src/Context/AuthContext';
import Background from "./src/Components/Background";

import 'react-native-gesture-handler';
import AuthStack from "./src/Navigation/AuthStack";
import MyStack from "./src/Navigation/UserStack";
import UserStack from '../c16-121-t-reactnative/src/Navigation/UserStack'

import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapScreen from "./src/Components/map";
import ModoDarck from './src/Components/ButtomMod';




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

  const listener = (data) => {
    switch (data.payload.event) {
      case "signIn":
        const { attributes } = data.payload.data;
        setUser(attributes);
        break;
      case "signOut":
        setUser(null); // Cuando el usuario se desloguea, establecemos user a null
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

      {/* <UserStack></UserStack> */}
      <View style={styles.container}>
        {/* <MapScreen/>*/}
        
      { user ? <MyStack/>: <AuthStack/>}      

      </View>
    </AuthProvider>
    </GestureHandlerRootView>
  
    
  );
}
