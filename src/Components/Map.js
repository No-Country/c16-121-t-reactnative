import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import BottomSheet from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const bottomSheetRef = React.useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permiso de ubicación",
          "La aplicación necesita acceso a la ubicación para funcionar correctamente."
        );
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      fetchHospitals(
        currentLocation.coords.latitude,
        currentLocation.coords.longitude
      );
    })();
  }, []);

  const fetchHospitals = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=hospital&key=AIzaSyARYyXVGUgHnhiZ6poEwf8stsxS6VvHhlQ`
      );
      const data = await response.json();
      setHospitals(data.results);
    } catch (error) {
      console.error("Error buscando Hospitales cercanos:", error);
    }
  };

  const handleMarkerPress = (hospital) => {
    console.log("Hospital seleccionado:", hospital);
    setSelectedPlace(hospital);
    bottomSheetRef.current.expand();
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Mi ubicación"
            pinColor="#FC688B"
          />
          {hospitals.map((hospital, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: hospital.geometry.location.lat,
                longitude: hospital.geometry.location.lng,
              }}
              title={hospital.name}
              onPress={() => handleMarkerPress(hospital)}
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 5,
                  borderRadius: 20,
                }}
              >
                <AntDesign name="heart" size={24} color="#FC688B" />
              </View>
            </Marker>
          ))}
        </MapView>
      )}

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["12%", "95%"]}
        style={{ backgroundColor: "#FC688B" }}
      >
        <View style={{ flex: 1, alignItems: "center", marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              letterSpacing: 0.5,
              paddingBottom: 5,
            }}
          >
            Bienvenido{" "}
          </Text>

          {selectedPlace && (
            <>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  letterSpacing: 0.5,
                  paddingBottom: 5,
                }}
              >
                Información del Hospital
              </Text>
              <Text>{selectedPlace.name}</Text>
              <Text>{selectedPlace.vicinity}</Text>
            </>
          )}
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    flex: 1,
    width: "100%",
  },
});
export default MapScreen;
