import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from './src/Styles/Globals';

export default function App() {
  return (
    <View style={globalStyles.screenContainer}>
      
      <StatusBar style="auto" />
    </View>
  );
}

