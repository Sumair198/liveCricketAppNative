import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screens/Splash";
import Home from "../screens/Home";
import Header from "../screens/Header";
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Header" component={Header} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
