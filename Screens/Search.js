import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

//para deixar o codigo bonito é alt shift f

export default class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Tela de Pesquisa</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc1f7",
  },

  text: {
    color: "#ffffff",
    fontSize: 30,
  },
});
