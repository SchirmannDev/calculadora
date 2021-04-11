import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class Botao extends Component {
  constructor(props) {
    super(props);
    this.props = {};

    let c = 1;
    if (props.c) {
      c = parseInt(props.c);
    }

    this.styles = StyleSheet.create({
      area: {
        flex: c,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#999999",
        backgroundColor: "#E0E0E0",
      },
      text: {
        fontSize: 18,
      },
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.area}>
        <Text style={this.styles.text}></Text>
      </TouchableOpacity>
    );
  }
}

export default class calculadora extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.lines}>
          <Text></Text>
        </View>

        <View style={styles.lines}>
          <Botao c="3" />
          <Botao />
        </View>

        <View style={styles.lines}>
          <Botao />
          <Botao />
          <Botao />
          <Botao />
        </View>

        <View style={styles.lines}>
          <Botao />
          <Botao />
          <Botao />
          <Botao />
        </View>

        <View style={styles.lines}>
          <Botao />
          <Botao />
          <Botao />
          <Botao />
        </View>

        <View style={styles.lines}>
          <Botao />
          <Botao />
          <Botao />
          <Botao />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
  },
  lines: {
    flex: 1,
    flexDirection: "row",
  },
});
