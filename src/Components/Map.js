import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Alert,
  Text,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import BottomSheet from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import { ALERT_TYPE, Dialog, Toast } from "react-native-alert-notification";

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const bottomSheetRef = React.useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // Alert.alert(
        //   "Permiso de ubicación",
        //   "La aplicación necesita acceso a la ubicación para funcionar correctamente."
        // );
        Dialog.show({
          type: ALERT_TYPE.WARNING,
          title: "Permiso de ubicación",
          textBody:
            "La aplicación necesita acceso a la ubicación para funcionar correctamente.",
          button: "Cerrar",
        });
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

  const getDirections = () => {
    if (!selectedPlace) return;

    // Construir la URL de Google Maps con las coordenadas del lugar seleccionado
    const latitude = selectedPlace.geometry.location.lat;
    const longitude = selectedPlace.geometry.location.lng;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

    // Abrir la URL en la aplicación de mapas del dispositivo o en el navegador
    Linking.openURL(url);
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

              {selectedPlace.photos && selectedPlace.photos.length > 0 ? (
        <Image
          source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${selectedPlace.photos[0].photo_reference}&key=YOUR_API_KEY` }}
          style={{ width: 200, height: 200, marginTop: 10 }}
        />
      ) : (
        <View style={{ width: 200, height: 200, marginTop: 10, backgroundColor:  "#FC688B", justifyContent: 'center', alignItems: 'center' }}>
          <Text>Imagen no disponible</Text>
         
           <Image source={require('../Assets/Logo.png')} style={{ width: 100, height: 100 }} /> 
        </View>
      )}
              <TouchableOpacity onPress={getDirections} style={styles.buttonD}>
                <Text style={{ color: "#FC688B", fontWeight: "bold" }}>
                  Obtener Direcciones
                </Text>
              </TouchableOpacity>
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
  buttonD: {
    backgroundColor: "#FFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#FC688B",
  },
});
export default MapScreen;
