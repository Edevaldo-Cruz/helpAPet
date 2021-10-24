import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";

export default function Feed() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent={true}
        onRequestClose={() => {
          alert("Modal foi fechado.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.lineModal} />
            <Image source={require("../../assets/dog-food.png")} />
            <Text style={styles.textModal}>
              O Abrigo Animal precisa de ração para gatos.
            </Text>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Entypo name="location-pin" size={24} color="#FFF" />
              <Text style={styles.textStyle}>Localização</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.cancelar}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
          <TouchableOpacity onPress={() => navigation.navigate("Animal")}>
            <Text style={styles.link}>ANIMAIS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("Evento")}
            >
              EVENTOS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.link}>PERTO DE</Text>
            <Text style={styles.link}> MIM</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.line}></View>
          <View style={styles.containerImage}>
            <TouchableOpacity
              style={styles.bob}
              onPress={() => navigation.navigate("Animal")}
            >
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
          <TouchableOpacity onPress={() => navigation.navigate("Evento")}>
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
