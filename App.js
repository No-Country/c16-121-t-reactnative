import * as React from "react";
import {  View} from "react-native";
import Background from "./src/components/Background"

import {Amplify, Hub, AuthModeStrategyType } from "aws-amplify";
import config from './src/aws-exports'; 
import { AuthProvider } from './src/Context/AuthContext';
import  SignIn  from "./src/components/SignIn";

Amplify.configure({
  ...config,
  Analytics: { disabled: true },
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});


export default function App() {


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
  Hub.listen("auth", listener);
  return(

 <AuthProvider>
   <View >
   

  
  </View>

  </AuthProvider>
  
  );
}
