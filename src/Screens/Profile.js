import React from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import ProfileDates from '../Components/ProfileDates';
import Background from '../Components/Background';

const Profile = () => {
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <Background/>
    <ProfileDates/>
    </View>
  )}
export default Profile;

