import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../config/firebase";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [errorRegister, setErrorRegister] = useState("");
  const navigation = useNavigation();

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate("Feed", { idUser: user.uid });
      })
      .catch((error) => {
        setErrorRegister(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };
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
              placeholder="Email"
              type="text"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Digite sua senha..."
              type="text"
              onChangeText={(text) => setNovaSenha(text)}
              value={novaSenha}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Digite sua novamente senha..."
              type="text"
              onChangeText={(text) => setSenha(text)}
              value={senha}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={register}>
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
