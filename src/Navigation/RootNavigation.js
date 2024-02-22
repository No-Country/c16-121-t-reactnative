import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./UserStack";

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
