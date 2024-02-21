// Navigation.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons"; // Importar iconos de MaterialIcons
import { Colors } from "../Constants/Colors";
import Background from "../Components/Background";

import Profile from "../Screens/Profile";
import Home from "../Screens/Home";
const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
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
