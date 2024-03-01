import * as React from "react";
import { View, Text, Image, style, StyleSheet } from "react-native";
import iconNotification from '../../../assets/iconNotification.png'

export const IconToNotification = ()=>{

    let number = 1
    return(
        <View style={styles.container}>
            <Image style={styles.icon} source={iconNotification} ></Image>
            <Text style={styles.text}>{number}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
  
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        width:28,
         
       
    },
    icon:{
         width:'100%',
         resizeMode:'contain'
    },
    text:{
        textAlign:'center',
        fontWeight:'bold',
        color:'white',
        position:'absolute',
        bottom:'35%',
        
    }
})