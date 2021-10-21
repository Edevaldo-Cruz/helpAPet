import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Feed() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Feed</Text>
          <Image
            style={styles.coin}
            source={require("../../assets/coin.png")}
          />
          <Text style={styles.number}>130</Text>
        </View>
        <View style={styles.containerLink}>
          <TouchableOpacity>
            <Text style={styles.link}>TODOS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.link}>ANIMAIS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.link}>EVENTOS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.link}>PERTO DE</Text>
            <Text style={styles.link}> MIM</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.line}></View>
          <View style={styles.containerImage}>
            <TouchableOpacity style={styles.bob}>
              <Image
                style={styles.img}
                source={require("../../assets/Bob.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.img}
                source={require("../../assets/Animal.png")}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.evento}
              source={require("../../assets/Evento.png")}
            />
          </TouchableOpacity>
          <View style={styles.containerImage}>
            <TouchableOpacity>
              <View style={styles.doacao}>
                <Image source={require("../../assets/dog-food-bowl.png")} />
                <Text style={styles.text}>
                  Doação de ração para o Abrigo Animal
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.img}
                source={require("../../assets/cat.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
