import { useFonts } from "expo-font";
import { Dimensions, StyleSheet } from "react-native";


const {height, width} = Dimensions.get("screen")
const {colors} = require("../../../app.json");


const styles = StyleSheet.create({
  containerButton: {
    marginTop: height/20,
  },
  button:{
    width: width/1.3,
    height: height/15,
    backgroundColor: colors.corPrimaria2,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: colors.corBranco,
    fontFamily: "BiennaleBold",
  },
  buttonDisabled: {
    backgroundColor: colors.corCinza3,
  }
})

export default styles;