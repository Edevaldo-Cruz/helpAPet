import React from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { Ionicons, Entypo, Octicons, Fontisto } from "@expo/vector-icons";

import { styles } from "./styles";

export default function Evento() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.img}
            source={require("../../assets/Rectangle.png")}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Feed")}
            style={styles.icons}
          >
            <Ionicons name="close" size={40} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <Text style={styles.title}>Bob</Text>
          <View style={styles.containerSubTitle}>
            <Entypo name="location-pin" size={24} color="#FE9E0C" />
            <Text style={styles.locationText}>Abrigo Animal</Text>
            <Octicons name="heart" size={24} color="#FE720C" />
            <Text style={styles.number}>1.560</Text>
          </View>
          <Text style={styles.text}>
            O Bob é um fofo, super carinhoso e adora brincar! Mas nem tudo é
            diversão, não é? Ele precisa ser castrado e para isso precisamos
            arrecadar 1.000 moedinhas.
          </Text>
          <TouchableOpacity
            onPress={() => alert("Você acabou de doar 10 moedinha. Obrigado!")}
            style={styles.btnCoins}
          >
            <Image source={require("../../assets/coins-solid.png")} />
            <Text style={styles.btnCoinsText}>Doar 10 moedinhas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnShare}>
            <Fontisto name="share-a" size={24} color="#FFF" />
            <Text style={styles.btnCoinsText}>Compartilhar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
