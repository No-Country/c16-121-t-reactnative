import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Screens/Login";
import Profile from "../Screens/Profile";
import Register from "../Screens/Register";
const AuthStack = createStackNavigator();


export default function MyStack (){
    return(

        <AuthStack.Navigator screenOptions={{
            cardStyle: { backgroundColor: 'white' }
          }}>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register}/>
        </AuthStack.Navigator>
    )
}
