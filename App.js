import * as React from "react";
import {  View} from "react-native";

import { Hub } from "aws-amplify";
import Background from "./src/Components/Background";
import SignIn from "./src/Components/SignIn";



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
  return (
    <View >
      <Background/>
   
    </View>
  )
}
