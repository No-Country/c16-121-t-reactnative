import React from "react";
import { View, ActivityIndicator, StyleSheet, Image } from "react-native";
// import Background from "../Components/Background";
import Loading from "../Components/Loading";
import logoImage from "../Assets/Logo.png"

const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            {/* <Background /> */}
            <Loading />
            <Image source={logoImage} style={styles.logo} />
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 300,
        height: 150,
        marginBottom: 120,
        marginTop: -100
    },
});

export default LoadingScreen;
