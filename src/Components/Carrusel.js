import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import Swiper from "react-native-swiper";
import PorqueDonar from "../Screens/PorqueDonar";
import ProcesoDeDonacion from "../Screens/ProcesoDeDonacion";

const Carrusel = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        // Cambia a la siguiente página después de 5 segundos
        const timer = setTimeout(() => {
            if (swiperRef.current) {
                swiperRef.current.scrollBy(2);
            }
        }, 1000);

        // Limpia el temporizador cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, []);

    return (
        <Swiper
            ref={swiperRef}
            loop={false}
            showsPagination={true}
            style={styles.wrapper}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
        >
            <View style={styles.slide}>
                <PorqueDonar />
            </View>
            <View style={styles.slide}>
                <ProcesoDeDonacion />
            </View>
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    dot: {
        backgroundColor: "rgba(0,0,0,.2)",
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    activeDot: {
        backgroundColor: "#007aff",
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
});

export default Carrusel;
