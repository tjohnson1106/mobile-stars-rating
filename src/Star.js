import React, { Component } from "react";
import { FontAwesome } from "@expo/vector-icons";

class Star extends Component {
  render() {
    return (
      <FontAwesome
        name="star"
        color="blue"
        size={32}
        style={{
          marginHorizonal: 6
        }}
      />
    );
  }
}

export default Star;
