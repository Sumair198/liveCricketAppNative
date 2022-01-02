import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Header from "../screens/Header";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Header" component={Header} />
      <Stack.Screen />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
