import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import firebase from "../../config/firebase";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const loginFirebase = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate("Feed", { idUser: user.uid });
      })
      .catch((error) => {
        setErrorLogin(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };

  useEffect(() => {}, []);

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
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            {errorLogin === true ? alert("Email ou senha invalido.") : <View />}
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              type="text"
              onChangeText={(text) => setSenha(text)}
              value={senha}
            />
          </View>

          <TouchableOpacity style={styles.btn} onPress={loginFirebase}>
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
