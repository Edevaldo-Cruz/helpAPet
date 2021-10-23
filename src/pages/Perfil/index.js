import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Perfil() {
  return (
    //<ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Perfil</Text>
        <TouchableOpacity>
          <Image
            style={styles.cog}
            source={require("../../assets/cog-solid.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.user}>
        <Image source={require("../../assets/Oval.png")} />
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.nameUser}>Ariana Barros</Text>

        <View style={styles.itensContainer}>
          <View style={styles.medalha}>
            <Image
              style={styles.medal}
              source={require("../../assets/medal-solid.png")}
            />
            <Text style={styles.text}>2º</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.medalha}>
            <Image source={require("../../assets/star-solid.png")} />
            <Text style={styles.number}>225</Text>
          </View>
        </View>
        <View style={styles.containerApadrinhados}>
          <Text style={styles.tituloApadrinhados}>Apadrinhados</Text>
          <View style={styles.containerImgApadrinhados}>
            <Image
              style={styles.imgApadrinhados}
              source={require("../../assets/Bob.png")}
            />
            <Image
              style={styles.imgApadrinhados}
              source={require("../../assets/cat.png")}
            />
          </View>
        </View>
        <View style={styles.containerPlacar}>
          <Text style={styles.tituloPlacar}>Placar dos Amigos</Text>
          <Text style={styles.texto}> 1º Aryn Jacobssen</Text>
          <Text style={styles.userText}>2º Ariana Barros</Text>
          <Text style={styles.texto}>3º Meng Ru</Text>
          <Text style={styles.texto}>4º Shen Zhi</Text>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
}
