import {Dimensions, StyleSheet} from "react-native";

const {width, height} = Dimensions.get('screen');
const {colors} = require("../../../../../app.json");

const styles = StyleSheet.create({
  container: {
    zIndex: 9,
    position: "absolute",
    top: 100,
    backgroundColor: colors.corBranco,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundOdd: {
    width: width,
    height: 50,
    backgroundColor: colors.corBranco,
  },
  backgroundEven: {
    width: width,
    height: 50,
    backgroundColor: colors.corCinza,
  },
  imageUser: {
    width: 32,
    height: 32,
    borderRadius: 100,
  },
  name: {
    fontFamily: "BiennaleBold",
    marginLeft: 8,
    fontSize: 12,
    lineHeight: 12,
  },
  email: {
    fontFamily: "BiennaleRegular",
    marginLeft: 8,
    fontSize: 12,
    lineHeight: 12,
  },
  row:{
    flexDirection: "row",
    alignItems:"center",
    marginLeft: 12,
    marginVertical: 10,
  }

   
});

export default styles;
