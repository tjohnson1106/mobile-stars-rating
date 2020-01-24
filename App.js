import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  Easing
} from "react-native";

import Star from "./src/Star";

const numStars = 5;

export default class App extends Component {
  state = {
    rating: 1,
    // animated refresher: 1.  Set up animated value
    animation: new Animated.Value(1)
  };

  rate = (star) => {
    this.setState({
      rating: star
    });
  };

  // animated refresher: 2.
  animate = () => {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: true
    }).start(() => {
      this.state.animation.setValue(1);
    });
  };

  render() {
    let stars = [];
    for (let x = 1; x <= numStars; x++)
      stars.push(
        <TouchableWithoutFeedback
          key={x}
          onPress={() => {
            this.rate(x);
          }}
        >
          <Animated.View>
            {/* display filled if state.rating is true  */}
            <Star filled={x <= this.state.rating ? "true" : "false"} />
          </Animated.View>
        </TouchableWithoutFeedback>
      );
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
