import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//import { useFonts, Inter_900Black } from '@ fontsource / dm-serif-display';

import Routes from "./src/router";

export default function App() {
  /*if (!fontsLoaded) {
    return <AppLoading />;
  }*/
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
