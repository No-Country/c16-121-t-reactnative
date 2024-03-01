import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../Constants/Colors";

import Profile from "../Screens/Profile";
import Home from "../Screens/Home";
// import DonationForm from "../Screens/DonationForm";
import Exit from "../Screens/Exit";
import MapScreen from "../Components/Map";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#FCC5D2",
          borderTopColor: "white",
          borderTopWidth: 2,
          paddingTop: 8,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        tabBarIconStyle: {
          marginBottom: -1,
        },
        tabBarLabelStyle: {
          color: "black",
          fontSize: 12,
          marginBottom: 3,
        },

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
  );
}

// export default function Navigation() {
//     return (
//         /** El Background debe ir segundo sino desaparece de nuevo */
//         <NavigationContainer>
//             <MyTabs />
//             <Background />
//         </NavigationContainer>
//     );
// }
