import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");
const { colors } = require("../../../app.json");

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.corBranco,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  containerUserInfos:{
    paddingHorizontal: 10,
    flexDirection: "column",
    
    
  },
  containerInfos: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10

  },
  containerInfo:{
    alignItems: "center",
    justifyContent: "center",
  },
  containerButton:{
    marginTop: 0,
  },
  buttonFollow: {
    fontFamily: "BiennaleRegular",
    display: "flex",
    width: 216,
    height: 28,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 89,
    paddingVertical: 6,
  },
  buttonUnfollow: {
    fontFamily: "BiennaleRegular",
    display: "flex",
    width: 216,
    height: 28,
    backgroundColor: colors.corBranco,
    borderColor: colors.corPrimaria2,
    borderWidth: 1,
    color: colors.corPrimaria2, 
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 63,
    paddingVertical: 6,
  },  
  buttonEditProfile: {
    fontFamily: "BiennaleRegular",
    display: "flex",
    width: 216,
    height: 28,
    backgroundColor: colors.corBranco,
    borderColor: colors.corPrimaria2,
    borderWidth: 1,
    color: colors.corPrimaria2, 
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 75,
    paddingVertical: 6,
  },
  text:{
    fontFamily: "BiennaleRegular",
    fontSize: 14,
    color: colors.corCinza4
  },
  textNumber:{
    fontFamily: "BiennaleBold",
    fontSize: 14,
    color: colors.corCinza4
  }
 
});

export default styles;
