import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import PasswordChangeCode from "../Components/PasswordChangeCode";
import { AuthProvider } from "../Context/AuthContext";
import Background from "../Components/Background";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 300,
        alignItems: "center",
    },
    scrollViewContainer: {
        // flex: 1,
        marginTop: 290,
        alignItems: "center",
    },
});

export default function VerificationPasswordChange({navigation}) {
    return (
        <AuthProvider navigation={navigation}>
            <View style={styles.container}>
                <Background />
                <ScrollView contentContainerStyle={styles.scrollViewContainer} keyboardShouldPersistTaps="handled" >
                    <PasswordChangeCode />
                </ScrollView>
            </View>            
        </AuthProvider>
    );
}
