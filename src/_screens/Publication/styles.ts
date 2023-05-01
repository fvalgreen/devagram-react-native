import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");
const { colors } = require("../../../app.json");

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: colors.corBranco,
  },
  containerRow: {
    flexDirection: "row",
    width: width,
    height: height / 8.5,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.corCinza1,
    marginHorizontal: 16,
    marginVertical: 16,
    
  },
  containerImage: {    
    width: 80,
    height: 80,
    marginRight: 16
  },
  image: {
    width: 80,
    height: 80,
  },
  description: {
    fontFamily: "BiennaleRegular",
    fontSize: 14,
    color: colors.corCinza2,
    width: width / 2,
    height: height / 30,
    paddingHorizontal: 5,
    
  }
});

export default styles;
