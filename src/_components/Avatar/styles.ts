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

  },
  postImage: {
    width: width,
    height: height * 0.5,
  },
 
});

export default styles;
