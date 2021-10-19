import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Faça parte da família.</Text>
          <Text style={styles.subTitle}>É Facil!</Text>
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
              placeholder="E-mail"
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

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Já é cadastrado?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.linkText}>Login.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
