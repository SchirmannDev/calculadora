import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class Botao extends Component {
  constructor(props) {
    super(props);
    this.props = {};

    this.styles = StyleSheet.create({
      area: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#999999",
        backgroundColor: "#E0E",
      },
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.area}>
        <Text></Text>
      </TouchableOpacity>
    );
  }
}

export default class calculadora extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Text>Hello World Bitches</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
  },
});
