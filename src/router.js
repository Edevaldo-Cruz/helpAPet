import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Feed from "./pages/Feed";
import Recompensa from "./pages/Recompensa";
import Perfil from "./pages/Perfil";
import Animal from "./pages/Animal";
import Evento from "./pages/Evento";
import Instituicao from "./pages/Instituicao";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
          paddingHorizontal: 35,
          paddingBottom: 20,
        },
        tabBarActiveTintColor: "#F7BF29",
        tabBarInactiveTintColor: "#F7BF29",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name="paw" size={size} color="#F7BF29" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Recompensas"
        component={Recompensa}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name="ticket-alt" size={size} color="#F7BF29" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome name="user" size={size} color="#F7BF29" />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

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
        name="Feed"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Animal"
        component={Animal}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Evento"
        component={Evento}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Instituição"
        component={Instituicao}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
