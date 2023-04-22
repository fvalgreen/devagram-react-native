import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");
const { colors } = require("../../../../app.json");

const styles = StyleSheet.create({
  container: {
    
  },
  imageUser: {
    width: 32,
    height: 32,
    borderRadius: 100,

  },
  containerUser: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",    
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.corBranco,
    width: width,
  },
  postImage: {
    width: width,
    height: height * 0.5,
  },
  textUserName: {
    fontFamily: "BiennaleBold",
    marginLeft: 8,
    fontSize: 14,
    color: colors.corCinza4
  },
  containerActions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: width,
    backgroundColor: colors.corBranco,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  iconActions: {
    paddingHorizontal: 3
  },
  textLikes: {
    paddingLeft: 5,
    fontFamily: "BiennaleLight",
    color: colors.corCinza4,
  },
  textLikesBold: {
    fontFamily: "BiennaleBold",
  } 
});

export default styles;
