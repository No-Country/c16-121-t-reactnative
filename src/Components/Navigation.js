// Navigation.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons"; // Importar iconos de MaterialIcons
import { Colors } from "../Constants/Colors";
import Background from "../Components/Background";

import Login from "../Screens/Login";
// import Profile from "../Screens/Profile";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="home" color={color} size={size} />
                ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Login}
                options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="person" color={color} size={size} />
                ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        /** El Background debe ir segundo sino desaparece de nuevo */
        <NavigationContainer>
            <MyTabs />
            <Background />
        </NavigationContainer>
    );
}
