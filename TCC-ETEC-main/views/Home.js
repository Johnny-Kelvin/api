import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { css } from "../assets/css/HomeStyle";

export default function Home({ navigation }) {
  return (
    <ImageBackground style={css.imagemFundo}
      source={require("../assets/img/fundohome.png")}
    >
      <View style={css.containerHome}>
        <TouchableOpacity style={css.cadastroButton}
          onPress={() => navigation.navigate("Registro")}
        >
          <Text style={css.TextButton}> Cadastrar-se </Text>
        </TouchableOpacity>

        <TouchableOpacity style={css.entrarButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={css.TextButton}> Entrar </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
