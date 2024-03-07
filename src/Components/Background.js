// import React, { useContext } from "react";
import { StyleSheet, View, Image, scr } from "react-native";
import { Colors } from "../Constants/Colors";
// import { DarckContext } from "../Context/DarckContext";

const Background = () => {
 

  return (
    <View style={styles.background}>
      <Image
        source={require("../Assets/Logo.png")}
        style={styles.backgroundImage}
      />
    </View>
  );
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
    zIndex: -1,
    alignItems: "center",
    backgroundColor: Colors.background
    
  },
  backgroundImage: {
    flex: 1,
    width: 200,
    resizeMode: "contain",
    

    
  },
});

export default Background;

// import React from "react";
// import { StyleSheet, View, Image } from "react-native";
// import { Colors } from "../Constants/Colors";
// import { Darck, DarckContext, Ligth } from "../Context/DarckContext";
// import { useContext } from "react";

// const Background = () => {
//   const { Darck, Ligth } = useContext(DarckContext);
//   return  <View style={styles.background}>
//     <Image
//         source={require("../Assets/Logo.png")}
//         style={{...styles.backgroundImage, backgroundColor:[Darck]}}
//       />
//   </View>;
// };

// const styles = StyleSheet.create({
//   background: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     height: 210,
//     borderBottomRightRadius: 900,
//     borderBottomLeftRadius: 900,
//     backgroundColor: Colors.background,
//     zIndex: -1,
//     alignItems: "center",
//   },
//   backgroundImage: {
//     flex: 1,
//     width: 200,
//     resizeMode: "contain",

//   },
// });
// export default Background;
