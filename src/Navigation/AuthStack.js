import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Screens/Login";
import Profile from "../Screens/Profile";
import Register from "../Screens/Register";
import Verification from "../Screens/Verification";
import { NavigationContainer } from "@react-navigation/native";
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
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
