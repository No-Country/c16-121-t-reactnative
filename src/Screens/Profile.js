import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import ProfileDates from "../Components/ProfileDates";
import { HeaderMovil } from "../Components/headerComponent/HeaderMovil";
import Background from '../Components/Background';

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 2 / 6 }}>
        <HeaderMovil condition={false}></HeaderMovil>
      </View>
      <View style={{ flex: 4 / 6 }}>
        <ProfileDates />
      </View>
    </SafeAreaView>
  );
};
export default Profile;
