import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Fedd from "./pages/Feed";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Fedd"
        component={Fedd}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
