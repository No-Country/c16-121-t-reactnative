import * as React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import { Hub } from "aws-amplify";
import SingUp from "../Components/SingUp";
import { AuthContext, AuthProvider } from "../Context/AuthContext";
import Background from "../Components/Background";
import { useContext } from "react";
import { DarckContext } from "../Context/DarckContext";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 180,
    marginButtom: 200,
    justifyContent: "center",
    alignItems: "center",
    // alignSelf:'center',
    // maxWidth: "80%"
    width: "100%",
  },
});

export default function Register({ navigation }) {
  const [user, setUser] = React.useState(null);
  const { width, height } = Dimensions.get("window");
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
    // <KeyboardAvoidingView
    // style={{ flex: 1 }}
    // behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <AuthProvider navigation={navigation}>
      <SafeAreaView>
        <Background />

        {/* <ScrollView contentContainerStyle={styles.scrollViewContainer}  keyboardShouldPersistTaps="handled"> */}
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <SingUp />
          </ScrollView>
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </AuthProvider>

    // </KeyboardAvoidingView>
  );
}
