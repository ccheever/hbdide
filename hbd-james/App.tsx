import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

import AppLoading from "expo-app-loading";

import {
  useFonts,
  AbrilFatface_400Regular,
  KaushanScript_400Regular,
  FredokaOne_400Regular,
} from "@expo-google-fonts/dev";

export default function App() {
  let [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
    KaushanScript_400Regular,
    FredokaOne_400Regular,
  });

  if (!fontsLoaded) {
    return <View />;
  }

  let scale = 0.25;
  let height = 837;
  let width = 1008;
  let textSize = 96;
  let padding = 20;

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "AbrilFatface_400Regular",
          fontSize: textSize,
          color: "yellow",
          padding,
        }}
      >
        Happy
      </Text>
      <Text
        style={{
          fontFamily: "KaushanScript_400Regular",
          fontSize: textSize,
          color: "purple",
          padding,
        }}
      >
        Birthday
      </Text>
      <Text
        style={{
          fontFamily: "FredokaOne_400Regular",
          fontSize: textSize,
          color: "green",
          padding,
        }}
      >
        James!
      </Text>
      <Image
        source={require("./assets/cake.png")}
        width={width}
        height={height}
        style={{
          padding,
          margin: padding,
          height: height * scale,
          width: width * scale,
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    alignItems: "center",
    justifyContent: "center",
  },
});
