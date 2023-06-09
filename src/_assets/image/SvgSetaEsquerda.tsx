import Svg, { Path } from "react-native-svg";
import React from "react";
import { View } from "react-native";

const SvgSetaEsquerda = (props: { style?: any }) => {
  return (
    <View style={props.style}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M15 18L9 12L15 6"
          stroke="#5E49FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default SvgSetaEsquerda;
