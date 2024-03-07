import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, ScrollView } from "react-native";
import ProfileDates from "../Components/ProfileDates";
import { HeaderMovil } from "../Components/headerComponent/HeaderMovil";
import Background from '../Components/Background';

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* <View style={{ flex: 2 / 6 }}> */}
      <View style={{ flex: 2 / 6 }}>
        {/* <Background/> */}
        {/* <HeaderMovil condition={false}></HeaderMovil> */}
      </View>
      {/* <View style={{ flex: 4 / 6 }}> */}
      <ScrollView style={{ marginTop: 250, marginBottom: 40 }}>
        <ProfileDates />
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
};
export default Profile;
