import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

import Star from "./src/Star";

const numStars = 5;

export default class App extends Component {
  render() {
    let stars = [];

    for (let x = 1; x <= numStars; x++) {
      stars.push(
        <TouchableWithoutFeedback>
          <Star />
        </TouchableWithoutFeedback>
      );
    }
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>{stars}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
