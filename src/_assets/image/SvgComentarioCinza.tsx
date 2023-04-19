import Svg, { Path } from "react-native-svg";
import React from "react";
import { View } from "react-native";

const SvgComentarioCinza = (props: { style?: any }) => {
  return (
    <View style={props.style}>
      <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Path
          d="M17.5 9.58333C17.5029 10.6832 17.2459 11.7682 16.75 12.75C16.162 13.9264 15.2581 14.916 14.1395 15.6077C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6695 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7682 3.33047 10.6832 3.33333 9.58333C3.33384 8.26812 3.70051 6.97904 4.39227 5.86045C5.08402 4.74187 6.07355 3.83797 7.25 3.24999C8.23176 2.7541 9.31678 2.49713 10.4167 2.49999H10.8333C12.5703 2.59582 14.2109 3.32896 15.4409 4.55904C16.671 5.78912 17.4042 7.4297 17.5 9.16666V9.58333Z"
          stroke="#4D4C4D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default SvgComentarioCinza;
