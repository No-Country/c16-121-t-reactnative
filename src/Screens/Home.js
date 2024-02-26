import React from 'react'
import { View, Text } from 'react-native'
import Background from '../Components/Background'
const Home = () => {
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <Background/>
      <Text>Home</Text>
    </View>
  )
}

export default Home
