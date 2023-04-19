import Svg, { Path } from "react-native-svg";
import React from "react";
import { View } from "react-native";

const SvgLupa = (props: { style?: any }) => {
  return (
    <View style={props.style}>
      <Svg width="22" height="20" viewBox="0 0 22 20" fill="none">
        <Path
          d="M10.2322 15.8333C14.1727 15.8333 17.3671 12.8486 17.3671 9.16667C17.3671 5.48477 14.1727 2.5 10.2322 2.5C6.29161 2.5 3.09717 5.48477 3.09717 9.16667C3.09717 12.8486 6.29161 15.8333 10.2322 15.8333Z"
          stroke="#5E49FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M19.1509 17.5L15.2712 13.875"
          stroke="#5E49FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default SvgLupa;
