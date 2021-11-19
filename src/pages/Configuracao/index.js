import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

export default function Configuracao() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containertitle}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Perfil")}
            style={styles.icons}
          >
            <Ionicons name="chevron-back" size={35} color="#F7BF29" />
          </TouchableOpacity>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Configurações</Text>
          </View>
        </View>
        <View style={styles.containerList}>
          <TouchableOpacity style={styles.list}>
            <View style={styles.image}>
              <Image source={require("../../assets/envelope-regular.png")} />
            </View>
            <View style={styles.containerText}>
              <Text style={styles.text}>Conta</Text>
            </View>
            <View style={styles.icon}>
              <Image source={require("../../assets/Path.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <View style={styles.image}>
              <Image source={require("../../assets/bell-regular.png")} />
            </View>
            <View style={styles.containerText}>
              <Text style={styles.text}>Notificações</Text>
            </View>
            <View style={styles.icon}>
              <Image source={require("../../assets/Path.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <View style={styles.image}>
              <Image source={require("../../assets/users-solid.png")} />
            </View>
            <View style={styles.containerText}>
              <Text style={styles.text}>Rede Sociais</Text>
            </View>
            <View style={styles.icon}>
              <Image source={require("../../assets/Path.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <View style={styles.image}>
              <Image source={require("../../assets/user-shield-solid.png")} />
            </View>
            <View style={styles.containerText}>
              <Text style={styles.text}>Privacidade</Text>
            </View>
            <View style={styles.icon}>
              <Image source={require("../../assets/Path.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <View style={styles.image}>
              <Image source={require("../../assets/bullhorn-solid.png")} />
            </View>
            <View style={styles.containerText}>
              <Text style={styles.text}>Feedback</Text>
            </View>
            <View style={styles.icon}>
              <Image source={require("../../assets/Path.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <View style={styles.image}>
              <Image source={require("../../assets/sign-out-alt-solid.png")} />
            </View>
            <View style={styles.containerText}>
              <Text style={styles.text}>Sair</Text>
            </View>
            <View style={styles.icon}>
              <Image source={require("../../assets/Path.png")} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
