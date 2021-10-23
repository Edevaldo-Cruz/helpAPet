import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

export default function Login() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>É bom fazer o bem.</Text>
          <Text style={styles.subTitle}>Vamos lá!</Text>
        </View>
        <View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Usuário"
              type="text"
              /*onChangeText={(text) => setEmail(text)}
            value={email}*/
            />
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              type="text"
              /*onChangeText={(text) => setEmail(text)}
            value={email}*/
            />
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Feed")}
          >
            <Text style={styles.btnText}>Entar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Ainda não é cadastrado?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Text style={styles.linkText}>Criar uma conta.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
