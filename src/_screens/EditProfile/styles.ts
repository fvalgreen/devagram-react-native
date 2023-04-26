import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");
const { colors } = require("../../../app.json");

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.corBranco,    
    height: height
  },
  containerEditName: {
    marginHorizontal: 16,   
    alignContent: "center",    
    borderBottomColor: colors.corCinza1,
    borderBottomWidth: 0.5,   
  },
  containerEditNameRow:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 6,
  },
  containerImage:{
    borderBottomColor: colors.corCinza1,
    borderBottomWidth: 0.5,
    alignItems: "center",
    marginTop: 16
  },
  textUpdateImage: {
    color: colors.corPrimaria2,
    fontSize: 14,
    textDecorationLine: "underline",
    marginVertical: 8,
    fontFamily: "BiennaleRegular"
  },
  textName: {
    fontFamily: "BiennaleRegular",
    fontSize: 14,
    color: colors.corCinza3,
    marginRight: 16,    

  },
  input:{
    fontFamily: "BiennaleRegular",
    color: colors.corCinza4,
    fontSize: 14,
    width: width / 1.5,    
    
  }

  
 
});

export default styles;
