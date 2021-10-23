import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Ionicons, Fontisto, Entypo } from "@expo/vector-icons";

import { styles } from "./styles";

export default function Instituição() {
  const navigator = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.img}
            source={require("../../assets/instituicao.png")}
          />
          <TouchableOpacity
            onPress={() => navigator.navigate("Evento")}
            style={styles.icons}
          >
            <Ionicons name="close" size={40} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <Text style={styles.title}>Abrigo Animal de Joinville</Text>
          <View style={styles.containerSubTitle}>
            <Entypo name="location-pin" size={24} color="#FE9E0C" />
            <Text style={styles.locationText}>Rua José Schberg</Text>
          </View>
          <Text style={styles.text}>
            Foi fundada em julho de 2001 com o objetivo de proteger animais
            domésticos abandonados e maltratados, providenciar atendimento
            veterinário, castração, vacinação e procurar novos lares para estes
            animais além de promover a conscientização da população.
          </Text>
          <TouchableOpacity style={styles.btnInteresse}>
            <Image
              source={require("../../assets/external-link-alt-solid.png")}
            />
            <Text style={styles.btnText}>Visite Nosso Site</Text>
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
