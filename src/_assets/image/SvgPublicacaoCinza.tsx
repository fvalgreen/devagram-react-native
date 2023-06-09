import Svg, { Path } from "react-native-svg";
import React from "react";
import { View } from "react-native";

const SvgPublicacaoCinza = (props: { style?: any }) => {
  return (
    <View style={props.style}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
          stroke="#4D4C4D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 8V16"
          stroke="#4D4C4D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8 12H16"
          stroke="#4D4C4D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default SvgPublicacaoCinza;
