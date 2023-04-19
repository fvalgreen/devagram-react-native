import Svg, { G, Path, Rect, Defs, ClipPath } from "react-native-svg";
import React from "react";
import { View } from "react-native";

const SvgLimpar = (props: { style?: any }) => {
  return (
    <View style={props.style}>
      <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <G clip-path="url(#clip0_28_432)">
          <Path
            d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8C14.6666 4.3181 11.6818 1.33334 7.99992 1.33334C4.31802 1.33334 1.33325 4.3181 1.33325 8C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
            stroke="#5E49FF"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M10 6L6 10"
            stroke="#5E49FF"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M6 6L10 10"
            stroke="#5E49FF"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_28_432">
            <Rect width="16" height="16" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default SvgLimpar;
