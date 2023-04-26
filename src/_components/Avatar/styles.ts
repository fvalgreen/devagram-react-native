import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");
const { colors } = require("../../../app.json");

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    paddingBottom: 0,    
    
  },
  imageUser: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: colors.corBranco

  },
  imageUserLinear: {
    width: 88,
    height: 88,
    borderRadius: 100,
    backgroundColor: colors.corBranco
  },
  linearGradientContainer: {
    width: 95,
    height: 95,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  }
 
});

export default styles;
