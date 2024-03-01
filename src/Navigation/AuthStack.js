import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Screens/Login";
import Profile from "../Screens/Profile";
import Register from "../Screens/Register";
import Verification from "../Screens/Verification";
import RecoverPassword from "../Screens/RecoverPassword";
import { NavigationContainer } from "@react-navigation/native";
import VerificationPasswordChange from "../Screens/VerificationPasswordChange";
import NewPassword from "../Screens/NewPassword";
const AuthStack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: "white" },
          headerShown:false
        }}
      >
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
        <AuthStack.Screen name="Verification" component={Verification} />
        <AuthStack.Screen name="RecoverPassword" component={RecoverPassword} />
        <AuthStack.Screen name="VerificationPasswordChange" component={VerificationPasswordChange} />
        <AuthStack.Screen name="NewPassword" component={NewPassword} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
