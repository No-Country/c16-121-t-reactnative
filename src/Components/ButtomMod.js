import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";

const ModoDarck = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode); // 
  };

  return (
    <TouchableOpacity
      onPress={toggleMode}
      style={(darkMode ? styles.buttomDarck : styles.button)}
    >
      <Image
        source={
          darkMode
            ? require("../Assets/luna.png")
            : require("../Assets/sol.png")
        }
        style={styles.image}
      />
    </TouchableOpacity>
  );
};




const styles = StyleSheet.create({
  button: {
   
    padding: 10,
    borderRadius: 100,
    width: "10%",
    height: "5%",
    position: "relative",
    top:-700,
    left:40,
  
  },
  buttomDarck: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 50,
    width: "10%",
    height: "5%",
    position: "relative",
    top:-700,
    left:40,
    
  
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
 export default ModoDarck;