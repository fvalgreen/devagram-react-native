import {Dimensions, StyleSheet} from "react-native";

const {height, width} = Dimensions.get("screen");
const {colors} = require("../app.json");

const commumStyles = StyleSheet.create({
  textError:{
    fontFamily: "BiennaleRegular",
    fontSize: 14,
    color: colors.corVermelho,
    lineHeight: 21,
    marginBottom: height * 0.02,
  }
});

export default commumStyles;
