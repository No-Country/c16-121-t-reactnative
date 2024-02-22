import * as React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import DonorForm from "../Components/DonorForm";
import { Colors } from "../Constants/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default function DonationForm() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <Text style={styles.textStyle}>¡Conviértete en donador!</Text>
                <DonorForm />
            </ScrollView>
        </View>
    );
}
