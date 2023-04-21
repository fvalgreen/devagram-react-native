import {Dimensions ,StyleSheet} from "react-native";

const {width, height} = Dimensions.get('screen');
const {colors} = require("../../../../app.json");

const styles = StyleSheet.create({
  container: {   
    height: height * 0.08, 
    backgroundColor: colors.corBranco,
    borderBottomColor: colors.corCinza1,
    borderBottomWidth: 1,
           
  },  
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    marginHorizontal: 10,
  },
 logo: {       
    marginLeft: 0,
    flex: 0.8,
    
  },
  icon: {
    marginLeft: 9,
  },
  input: {
    width: width / 2.9,
    paddingHorizontal: 0,
    fontFamily: 'BiennaleLight',
    color: colors.corCinza4,
    marginLeft: 9,
  },
  inputActive:{
    width: width / 2.9,
    paddingHorizontal: 12,
    fontFamily: 'BiennaleLight',
    color: colors.corPrimaria2
  },
  containerInputSearch: {
    flexDirection: 'row',
    width: width / 3,
    height: 40, 
    backgroundColor: colors.corPrimaria4,
    alignItems: "center",
    borderRadius: 4,
    flex: 1
  }
  
});

export default styles;
