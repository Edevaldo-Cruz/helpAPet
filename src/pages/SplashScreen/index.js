import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import { Dimensions, SafeAreaView } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/core";

import { styles } from "./styles";
import dogJson from "../../assets/dog.json";

const size = Dimensions.get("window").width * 0.5;

export default function SplashScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Login" }],
        })
      );
    }, 6000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        style={{ width: size, height: size }}
        resizeMode="contain"
        source={dogJson}
        autoPlay
        loop
      />
    </SafeAreaView>
  );
}
