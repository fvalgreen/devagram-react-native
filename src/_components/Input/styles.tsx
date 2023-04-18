import { useFonts } from "expo-font";
import { Dimensions, StyleSheet } from "react-native";


const {height, width} = Dimensions.get("screen")
const {colors} = require("../../../app.json");


const styles = StyleSheet.create({
  containerInput: {
    marginTop: height/20,
    width: width/1.3,
    height: height/25,
    borderBottomColor: colors.corPrimaria2,
    borderBottomWidth: 1
  },
  input:{
    width: width/1.4,
    paddingHorizontal: 12,
    fontSize: 14,
    fontFamily: "BiennaleLight",
    color: colors.corCinza2,    
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  }
})

export default styles;