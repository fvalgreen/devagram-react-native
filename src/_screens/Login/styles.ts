import {Dimensions, StyleSheet} from "react-native";

const {height, width} = Dimensions.get("screen")
const {colors} = require("../../../app.json");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.corBranco,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: height * 0.04
  }
});

export default styles;
