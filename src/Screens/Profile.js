import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, ScrollView } from "react-native";
import ProfileDates from "../Components/ProfileDates";
import { HeaderMovil } from "../Components/headerComponent/HeaderMovil";
import Background from '../Components/Background';

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
    
    <ScrollView style={{ marginTop: 250, marginBottom: 40 }}> 
        <ProfileDates />
      </ScrollView>
    
    </SafeAreaView>
  );
};
export default Profile;
