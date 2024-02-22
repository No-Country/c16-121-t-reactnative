import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Colors } from "../Constants/Colors";
const Background = () => {
  return <View style={styles.background}>

<Image
        source={require("../img/Sin título-1-02.png")} 
        style={styles.backgroundImage}
      />
  </View>;
  
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 210,
    borderBottomRightRadius: 900,
    borderBottomLeftRadius: 900,
    backgroundColor: Colors.background,
    justifyContent: "center", 
    alignItems: "center", 
    zIndex: -1,
  },
  backgroundImage: {
    flex: 1,
    width: 100, 
    resizeMode: "contain", 
  },
});
export default Background;
