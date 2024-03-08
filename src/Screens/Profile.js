import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  TextInput,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import ProfileDates from "../Components/ProfileDates";
import { HeaderMovil } from "../Components/headerComponent/HeaderMovil";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DarckContext } from "../Context/DarckContext";
import { PictureProfile } from "../Components/headerComponent/PictureProfile";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../Context/AuthContext";

const Profile = () => {
  const { theme } = useContext(DarckContext);
  const { background, colorText, backgroundGrey } = theme;
  const { setAuthState } = React.useContext(AuthContext);
  const navigation = useNavigation();

  const handleExit = () => {
    BackHandler.exitApp(); // Cierra la aplicación
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundGrey }]}
    >
      <View
        style={{ marginLeft: "68%", marginTop: "6%", marginBottom: "-10%" }}
      >
        <Pressable title="Cerrar sesión" onPress={handleExit}>
          <MaterialCommunityIcons name="location-exit" size={38} color="red" />
        </Pressable>
      </View>
      <View style={styles.perfil}>
        <PictureProfile showButton={true} />
      </View>

      <ScrollView style={styles.scrollView}>
        <ProfileDates />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  perfil: {
    width: 100,
    height: 100,
    alignSelf: "center",
    margin: 70,
  },

  container: {
    flex: 1,
  },
  scrollView: {
    // marginTop: ,
    marginBottom: 40,
  },
});

export default Profile;
