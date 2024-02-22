import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Colors } from "../Constants/Colors";

const Loading = () => {
    return <View style={styles.loading}></View>;
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    loading: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: windowHeight * 2,
        backgroundColor: Colors.background,
        zIndex: -1,
    },
});

export default Loading;
