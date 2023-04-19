import Svg, { Circle, Path } from "react-native-svg";
import React from "react";

const SvgCamera = () => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Circle cx="20" cy="20" r="20" fill="#5E49FF" />
      <Path
        d="M30.5002 26C30.5002 26.3978 30.3421 26.7794 30.0608 27.0607C29.7795 27.342 29.398 27.5 29.0002 27.5H11.0002C10.6024 27.5 10.2208 27.342 9.93952 27.0607C9.65822 26.7794 9.50018 26.3978 9.50018 26V17C9.50018 16.6022 9.65822 16.2206 9.93952 15.9393C10.2208 15.658 10.6024 15.5 11.0002 15.5H12.7582C13.951 15.4993 15.0948 15.0251 15.9382 14.1815L17.1832 12.9395C17.4637 12.6589 17.8439 12.5009 18.2407 12.5H21.7567C22.1545 12.5001 22.5359 12.6582 22.8172 12.9395L24.0592 14.1815C24.4771 14.5996 24.9734 14.9312 25.5195 15.1574C26.0657 15.3837 26.651 15.5001 27.2422 15.5H29.0002C29.398 15.5 29.7795 15.658 30.0608 15.9393C30.3421 16.2206 30.5002 16.6022 30.5002 17V26ZM11.0002 14C10.2045 14 9.44147 14.3161 8.87886 14.8787C8.31625 15.4413 8.00018 16.2044 8.00018 17V26C8.00018 26.7957 8.31625 27.5587 8.87886 28.1213C9.44147 28.6839 10.2045 29 11.0002 29H29.0002C29.7958 29 30.5589 28.6839 31.1215 28.1213C31.6841 27.5587 32.0002 26.7957 32.0002 26V17C32.0002 16.2044 31.6841 15.4413 31.1215 14.8787C30.5589 14.3161 29.7958 14 29.0002 14H27.2422C26.4466 13.9998 25.6837 13.6836 25.1212 13.121L23.8792 11.879C23.3167 11.3164 22.5538 11.0002 21.7582 11H18.2422C17.4466 11.0002 16.6837 11.3164 16.1212 11.879L14.8792 13.121C14.3167 13.6836 13.5538 13.9998 12.7582 14H11.0002Z"
        fill="white"
      />
      <Path
        d="M20.0001 24.5C19.0055 24.5 18.0517 24.1049 17.3484 23.4017C16.6451 22.6984 16.2501 21.7446 16.2501 20.75C16.2501 19.7554 16.6451 18.8016 17.3484 18.0983C18.0517 17.3951 19.0055 17 20.0001 17C20.9946 17 21.9484 17.3951 22.6517 18.0983C23.355 18.8016 23.7501 19.7554 23.7501 20.75C23.7501 21.7446 23.355 22.6984 22.6517 23.4017C21.9484 24.1049 20.9946 24.5 20.0001 24.5ZM20.0001 26C21.3924 26 22.7278 25.4469 23.7124 24.4623C24.6969 23.4777 25.2501 22.1424 25.2501 20.75C25.2501 19.3576 24.6969 18.0223 23.7124 17.0377C22.7278 16.0531 21.3924 15.5 20.0001 15.5C18.6077 15.5 17.2723 16.0531 16.2877 17.0377C15.3032 18.0223 14.7501 19.3576 14.7501 20.75C14.7501 22.1424 15.3032 23.4777 16.2877 24.4623C17.2723 25.4469 18.6077 26 20.0001 26ZM12.5001 17.75C12.5001 17.9489 12.421 18.1397 12.2804 18.2803C12.1397 18.421 11.949 18.5 11.7501 18.5C11.5511 18.5 11.3604 18.421 11.2197 18.2803C11.0791 18.1397 11.0001 17.9489 11.0001 17.75C11.0001 17.5511 11.0791 17.3603 11.2197 17.2197C11.3604 17.079 11.5511 17 11.7501 17C11.949 17 12.1397 17.079 12.2804 17.2197C12.421 17.3603 12.5001 17.5511 12.5001 17.75Z"
        fill="white"
      />
    </Svg>
  );
};

export default SvgCamera;
