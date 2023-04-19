import Svg, { Path } from "react-native-svg";
import React from "react";

const SvgEnvelope = () => {
  return (
    <Svg width="20" height="15" viewBox="0 0 20 15" fill="none">
      <Path
        d="M18.125 0H1.875C0.820312 0 0 0.859375 0 1.875V13.125C0 14.1797 0.820312 15 1.875 15H18.125C19.1406 15 20 14.1797 20 13.125V1.875C20 0.859375 19.1406 0 18.125 0ZM1.875 1.25H18.125C18.4375 1.25 18.75 1.5625 18.75 1.875V3.51562C17.8906 4.21875 16.6406 5.23438 12.8516 8.24219C12.1875 8.78906 10.8984 10.0391 10 10C9.0625 10.0391 7.77344 8.78906 7.10938 8.24219C3.32031 5.23438 2.07031 4.21875 1.25 3.51562V1.875C1.25 1.5625 1.52344 1.25 1.875 1.25ZM18.125 13.75H1.875C1.52344 13.75 1.25 13.4766 1.25 13.125V5.11719C2.10938 5.85938 3.51562 6.99219 6.32812 9.21875C7.14844 9.88281 8.55469 11.2891 10 11.25C11.4062 11.2891 12.8125 9.88281 13.6328 9.21875C16.4453 6.99219 17.8516 5.85938 18.75 5.11719V13.125C18.75 13.4766 18.4375 13.75 18.125 13.75Z"
        fill="#5E49FF"
      />
    </Svg>
  );
};

export default SvgEnvelope;