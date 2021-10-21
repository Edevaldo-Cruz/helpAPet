import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Recompensa() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Recompensas</Text>

        <Image
          style={styles.star}
          source={require("../../assets/star-solid.png")}
        />
        <Text style={styles.number}>225</Text>
      </View>

      <View style={styles.itens}>
        <View style={styles.containerBold}>
          <Text style={styles.textBold}>Netflix</Text>
          <Text style={styles.textNumber}>15</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Um mês de Netflix grátis.</Text>
          <Text style={styles.textPts}>PTS</Text>
        </View>
      </View>
      <View style={styles.itens}>
        <View style={styles.containerBold}>
          <Text style={styles.textBold}>GNC</Text>
          <Text style={styles.textNumber}>35</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Um par de ingressos.</Text>
          <Text style={styles.textPts}>PTS</Text>
        </View>
      </View>
      <View style={styles.itens}>
        <View style={styles.containerBold}>
          <Text style={styles.textBold}>Burger King</Text>
          <Text style={styles.textNumber}>20</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>WHOPPER + batata e bebida.</Text>
          <Text style={styles.textPts}>PTS</Text>
        </View>
      </View>
      <View style={styles.itens}>
        <View style={styles.containerBold}>
          <Text style={styles.textBold}>Renner</Text>
          <Text style={styles.textNumber}>40</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>15% de desconto na loja to...</Text>
          <Text style={styles.textPts}>PTS</Text>
        </View>
      </View>
      <View style={styles.itens}>
        <View style={styles.containerBold}>
          <Text style={styles.textBold}>PetVet</Text>
          <Text style={styles.textNumber}>25</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Prmeira consulta grátis.</Text>
          <Text style={styles.textPts}>PTS</Text>
        </View>
      </View>
      <View style={styles.itens}>
        <View style={styles.containerBold}>
          <Text style={styles.textBold}>Bob's</Text>
          <Text style={styles.textNumber}>20</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Um milkshake.</Text>
          <Text style={styles.textPts}>PTS</Text>
        </View>
      </View>
    </View>
  );
}
