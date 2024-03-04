import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Keyboard, View, StyleSheet } from "react-native";
import Profile from "../Screens/Profile";
import Home from "../Screens/Home";
import Exit from "../Screens/Exit";
import MapScreen from "../Components/Map";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        setKeyboardHeight(event.endCoordinates.height);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              position: "absolute",
              // bottom: keyboardHeight > 0 ? keyboardHeight : 0,
              left: 0,
              right: 0,
              backgroundColor: "#FCC5D2",
              borderTopColor: "white",
              borderTopWidth: 2,
              paddingTop: 8,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
               height: keyboardHeight > 0 ? 0 : 50, // Ajusta la altura del tabBar según la altura del teclado
            },
            // tabBarIconStyle: {
            //   marginBottom: -1,
            // },
            // tabBarLabelStyle: {
            //   color: "black",
            //   fontSize: 12,
            //   marginBottom: 3,
            // },
            tabBarInactiveTintColor: "#666666",
            tabBarActiveTintColor: "#F3305F",
            tabBarPressColor: "rgba(243, 48, 95, 0.7)",
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="person" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Location"
            component={MapScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="location-on" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Exit"
            component={Exit}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="exit-to-app" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "#FCC5D2",
    borderTopColor: "white",
    borderTopWidth: 2,
    paddingTop: 8,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  tabBarIcon: {
    marginBottom: -1,
  },
  tabBarLabel: {
    color: "black",
    fontSize: 12,
    marginBottom: 3,
  },
});

// export default function Navigation() {
//     return (
//         /** El Background debe ir segundo sino desaparece de nuevo */
//         <NavigationContainer>
//             <MyTabs />
//             <Background />
//         </NavigationContainer>
//     );
// }
