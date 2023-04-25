import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");
const { colors } = require("../../../../app.json");

const styles = StyleSheet.create({
  containerComments: {
    backgroundColor: colors.corBranco,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 3
    
  }, 
  textContainer: {
    marginBottom: 3
  }, 
  textUserName: {
    fontFamily: "BiennaleBold",
    marginLeft: 8,
    fontSize: 14,
    color: colors.corCinza4
  },
  textComment: {
    fontFamily: "BiennaleRegular",
    color: colors.corCinza4,    
  },
  containerInputComment: {
    width: width,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  containerAvatar: {
    paddingRight: 4
  },
  inputComment: {
    color: colors.corCinza3,
    width: width / 1.7,
    height: height / 22,
    paddingHorizontal: 8,
    fontFamily: "BiennaleRegular"
  }
  

});

export default styles;
