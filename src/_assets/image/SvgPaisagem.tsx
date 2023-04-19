import Svg, { Path } from "react-native-svg";
import React from "react";

const SvgPaisagem = () => {
  return (
    <Svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <Path
        d="M63.3333 10H16.6667C12.9848 10 10 12.9848 10 16.6667V63.3333C10 67.0152 12.9848 70 16.6667 70H63.3333C67.0152 70 70 67.0152 70 63.3333V16.6667C70 12.9848 67.0152 10 63.3333 10Z"
        stroke="#25CBD3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28.333 33.3333C31.0944 33.3333 33.333 31.0948 33.333 28.3333C33.333 25.5719 31.0944 23.3333 28.333 23.3333C25.5716 23.3333 23.333 25.5719 23.333 28.3333C23.333 31.0948 25.5716 33.3333 28.333 33.3333Z"
        stroke="#25CBD3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M70.0003 50L53.3337 33.3333L16.667 70"
        stroke="#25CBD3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SvgPaisagem;
