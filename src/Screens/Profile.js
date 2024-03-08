import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, ScrollView } from "react-native";
import ProfileDates from "../Components/ProfileDates";
import { HeaderMovil } from "../Components/headerComponent/HeaderMovil";
import Background from '../Components/Background';
import { DarckContext } from "../Context/DarckContext";
import { PictureProfile } from "../Components/headerComponent/PictureProfile";

const Profile = () => {
  const { theme } = useContext(DarckContext);
  const { background, colorText, backgroundGrey } = theme;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: backgroundGrey }]}>
      <View style={styles.perfil}>
       <PictureProfile showButton={true}/>
      </View>
    
      <ScrollView style={styles.scrollView}>
        <ProfileDates />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  perfil:{
    width:100, 
    height:100,
    alignSelf:'center',
    margin:70
  
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
