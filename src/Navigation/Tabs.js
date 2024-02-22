import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../Constants/Colors";

import Profile from "../Screens/Profile";
import Home from "../Screens/Home";
import DonationForm from "../Screens/DonationForm";

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
            <Tab.Screen
                name="DonationForm"
                component={DonationForm}
                options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="circle" color={color} size={size} />
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
