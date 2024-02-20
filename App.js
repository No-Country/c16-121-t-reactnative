import * as React from "react";
import { View, StyleSheet } from "react-native";
import Navigation from "./src/Components/Navigation";
import { Hub } from "aws-amplify";
import Background from "./src/Components/Background";
import Login from "./src/Screens/Login";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  React.useEffect(() => {
    Hub.listen("auth", listener);
    return () => Hub.remove("auth", listener);
  }, []);

  return (
    <View style={styles.container}>
      <Background />
      {/* <Login /> */}
      <Navigation />
    </View>
  );
}
