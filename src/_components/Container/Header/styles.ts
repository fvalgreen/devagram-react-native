import {Dimensions ,StyleSheet} from "react-native";

const {width, height} = Dimensions.get('screen');
const {colors} = require("../../../../app.json");

const styles = StyleSheet.create({
  container: {   
    height: height * 0.075, 
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
  rowProfile: {
    alignItems: "center",
    justifyContent: "space-between",    
    flexDirection: "row",
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 10,
  },
 logo: {       
    marginHorizontal: 6,
    flex: 0.8,    
  },
 leftArrow: {       
    
  },
  icon: {
    marginLeft: 6,
  },
  input: {
    width: width / 2.95,
    paddingHorizontal: 0,
    fontFamily: 'BiennaleLight',
    color: colors.corCinza4,
    marginLeft: 9,
  },
  inputActive:{
    width: width / 2.95,
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
  },
  profileName: {
    fontFamily: "BiennaleBold",
    fontSize: 16,      
 },
 textCancel:{
  color: colors.corCinza3,
  fontFamily: "BiennaleRegular",
  fontSize: 14,
 },
 editProfile: {
    fontFamily: "BiennaleBold",
    fontSize: 20, 
 },
 textSubmit:{
  color: colors.corPrimaria2,
  fontFamily: "BiennaleBold",
  fontSize: 14,
 },
 textSubmitDisable: {
  color: colors.corCinza1,
  fontFamily: "BiennaleBold",
  fontSize: 14,
 }
  
});

export default styles;
