import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Login() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>É bom fazer o bem.</Text>
          <Text>Vamos lá!</Text>
        </View>
        <View>
          <TextInput></TextInput>
          <TextInput></TextInput>
          <TouchableOpacity>
            <Text>Entar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Ainda não é cadastrado?</Text>
          <TouchableOpacity>
            <Text>Criar uma conta.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
