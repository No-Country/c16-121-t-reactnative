import React, { useContext } from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { DarckContext, Darck, Ligth } from "../Context/DarckContext";

const ModoDarck = () => {
  const { theme, toggleTheme } = useContext(DarckContext);

  console.log(theme);

  const toggleMode = () => {
    toggleTheme();
  };

  return (
    <TouchableOpacity
      onPress={toggleMode}
      style={[styles.button, { backgroundColor: theme.background }]}
    >
      <Image
        source={
          theme === Ligth
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
    width: 50,
    height: 50,
    position: "absolute",
    top: 20,
    right: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ModoDarck;

// import React, { useState, useContext } from "react";
// import { TouchableOpacity, StyleSheet, Image } from "react-native";
// import { DarckContext, Darck,Ligth, toggleTheme } from "../Context/DarckContext";

// const ModoDarck = () => {

//   const theme = useContext(DarckContext)
//   const [darkMode, setDarkMode] = useState(false);

//   console.log (theme);

//   const toggleMode = () => {

//     setDarkMode( theme === Ligth ? Darck : Ligth);
//     console.log(darkMode)

//   };

//   return (
//     <TouchableOpacity
//       onPress={toggleMode}
//       style={(darkMode ? styles.buttomDarck : styles.button)}
//     >
//       <Image
//         source={
//           darkMode
//             ? require("../Assets/luna.png")
//             : require("../Assets/sol.png")
//         }
//         style={styles.image}
//       />
//       <Image/>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {

//     padding: 10,
//     borderRadius: 100,
//     width: "10%",
//     height: "5%",
//     position: "relative",
//     top:-700,
//     left:40,

//   },
//   buttomDarck: {
//     backgroundColor: "black",
//     padding: 10,
//     borderRadius: 50,
//     width: "10%",
//     height: "5%",
//     position: "relative",
//     top:-600,
//     left:10,

//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
// });

//  export default ModoDarck;
