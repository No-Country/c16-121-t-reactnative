import * as React from "react";
import { View, ScrollView, StyleSheet, KeyboardAvoidingView, Platform, Dimensions } from "react-native";

import { Hub } from "aws-amplify";
import  SingUp  from "../Components/SingUp";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContainer: {
        flex: 1,
        // marginTop: 150,
        justifyContent: "center",
        alignItems: "center", 
    },
});

export default function Login() {
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
        <View style={styles.container} >
            <ScrollView contentContainerStyle={styles.scrollViewContainer}  keyboardShouldPersistTaps="handled">
                <SingUp />
            </ScrollView>
        </View>
        // </KeyboardAvoidingView>
    );
}