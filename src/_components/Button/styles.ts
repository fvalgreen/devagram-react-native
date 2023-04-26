import { useFonts } from "expo-font";
import { Dimensions, StyleSheet } from "react-native";


const {height, width} = Dimensions.get("screen")
const {colors} = require("../../../app.json");


const styles = StyleSheet.create({
  containerButton: {    
  },
  button:{
    width: width/1.3,
    height: height/17,
    backgroundColor: colors.corPrimaria2,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: colors.corBranco,
    fontSize: 14,
    fontFamily: "BiennaleBold",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonDisabled: {
    backgroundColor: colors.corCinza3,
  }
})

export default styles;