import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Screens/Profile";
import Home from "../Screens/Home";
import MyTabs from "./Tabs";

const UserStack = createStackNavigator();

export default function MyStack (){
    return(
        <UserStack.Navigator 
            initialRouteName="Tabs" 
            screenOptions={{
                headerShown:false
            }}
        >
            <UserStack.Screen name='Tabs' component={MyTabs} />
            <UserStack.Screen name="Root" component={Home}/>
            <UserStack.Screen name="Profile" component={Profile}/>
        </UserStack.Navigator>
    )
}
