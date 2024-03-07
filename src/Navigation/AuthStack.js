import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../Screens/Login";
import Profile from "../Screens/Profile";
import Register from "../Screens/Register";
import Verification from "../Screens/Verification";
import RecoverPassword from "../Screens/RecoverPassword";
import VerificationPasswordChange from "../Screens/VerificationPasswordChange";
import NewPassword from "../Screens/NewPassword";
import { DarckContext } from "../Context/DarckContext";
const AuthStack = createStackNavigator();

export default function MyStack() {
  const { theme } = useContext(DarckContext);
  const { background } = theme;

  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          cardStyle: {
            
            backgroundColor: background,
          },
          headerShown: false,
        }}
      >
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
        <AuthStack.Screen name="Verification" component={Verification} />
        <AuthStack.Screen
          name="RecoverPassword"
          component={RecoverPassword}
        />
        <AuthStack.Screen
          name="VerificationPasswordChange"
          component={VerificationPasswordChange}
        />
        <AuthStack.Screen name="NewPassword" component={NewPassword} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
