import { createStackNavigator } from "@react-navigation/stack";


import Profile from "../Screens/Profile";
import Home from "../Screens/Home";
import Tabs from "./Tabs";

const UserStack = createStackNavigator();


export default function MyStack (){
    return(

        <UserStack.Navigator initialRouteName="Home">
        <UserStack.Screen name='Tabs' component={Tabs} />
        <UserStack.Screen name="Home" component={Home}/>
        <UserStack.Screen name="Profile" component={Profile}/>
        
        </UserStack.Navigator>
    )
}

