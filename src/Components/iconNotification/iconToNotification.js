import * as React from "react";
import { View, Text, Image, style, StyleSheet,TouchableOpacity } from "react-native";
import iconNotification from '../../../assets/iconNotification.png'
import { createReaction } from "../../Utils/userReacciones";

export const IconToNotification = ()=>{
   
    
   
    return(
        <TouchableOpacity > 
      <View style={styles.container}>
        <Image style={styles.icon} source={iconNotification} />
      
      </View>
    </TouchableOpacity>
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