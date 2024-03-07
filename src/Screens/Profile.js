import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, ScrollView } from "react-native";
import ProfileDates from "../Components/ProfileDates";
import { HeaderMovil } from "../Components/headerComponent/HeaderMovil";
import Background from '../Components/Background';
import { DarckContext } from "../Context/DarckContext";

const Profile = () => {
  const { theme } = useContext(DarckContext);
  const { background, colorText, backgroundGrey } = theme;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: backgroundGrey }]}>
      <ScrollView style={styles.scrollView}>
        
        <ProfileDates />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginTop: 250,
    marginBottom: 40,
  },
});

export default Profile;
