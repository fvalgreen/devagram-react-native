import Svg, { Circle, G, Path, Mask } from "react-native-svg";
import React from "react";
import {View} from "react-native"


const SvgAvatar = (props: {style?: any }) => {
  return (
    <View style={props.style}>
      <Svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <Mask
          id="mask0_2_38"
          maskUnits="userSpaceOnUse"
          x="12"
          y="24"
          width="96"
          height="96"
        >
          <Path
            d="M19.9999 120C19.9999 120 11.9999 120 11.9999 112C11.9999 104 19.9999 80 59.9999 80C99.9999 80 108 104 108 112C108 120 99.9999 120 99.9999 120H19.9999ZM59.9999 72C66.3651 72 72.4696 69.4714 76.9705 64.9706C81.4714 60.4697 83.9999 54.3652 83.9999 48C83.9999 41.6348 81.4714 35.5303 76.9705 31.0294C72.4696 26.5286 66.3651 24 59.9999 24C53.6347 24 47.5303 26.5286 43.0294 31.0294C38.5285 35.5303 35.9999 41.6348 35.9999 48C35.9999 54.3652 38.5285 60.4697 43.0294 64.9706C47.5303 69.4714 53.6347 72 59.9999 72V72Z"
            fill="#DADADA"
          />
        </Mask>
        <G mask="url(#mask0_2_38)">
          <Circle cx="59.9999" cy="60" r="60" fill="#DADADA" />
        </G>
        <Circle cx="60" cy="60" r="59.5" stroke="#DADADA" />
      </Svg>
    </View>
  );
};

export default SvgAvatar;
