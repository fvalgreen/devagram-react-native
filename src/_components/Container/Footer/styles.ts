import {Dimensions ,StyleSheet} from "react-native";

const {width, height} = Dimensions.get('screen');
const {colors} = require("../../../../app.json");

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: colors.corPrimaria4,
    width: width,
    height: height * 0.05,        
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: height * 0.01,
  }
  
});

export default styles;
