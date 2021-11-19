import React from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { Ionicons, Fontisto, Entypo } from "@expo/vector-icons";

import { styles } from "./styles";

export default function Evento() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.img}
            source={require("../../assets/eventoG.png")}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Feed")}
            style={styles.icons}
          >
            <Ionicons name="close" size={40} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <View style={styles.calendario}>
            <Text style={styles.mes}>ABR</Text>
            <Text style={styles.dia}>15</Text>
          </View>
          <Text style={styles.title}>Evento de Castração</Text>
          <View style={styles.containerSubTitle}>
            <Entypo name="location-pin" size={24} color="#FE9E0C" />
            <Text style={styles.locationText}>Abrigo Animal de Joinville</Text>
          </View>
          <Text style={styles.text}>
            O evento de castração é destinado a todos que possuem um bixinho e
            não tem como pagar a castração.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Instituição")}
            style={styles.btnInteresse}
          >
            <Image
              source={require("../../assets/calendar-check-regular.png")}
            />
            <Text style={styles.btnText}>Tenho interesse</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnShare}>
            <Fontisto name="share-a" size={24} color="#FFF" />
            <Text style={styles.btnText}>Compartilhar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
