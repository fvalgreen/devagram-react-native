import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get("screen");

const styles = StyleSheet.create({
  containerAvatar:{
    marginBottom: height/35
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 100
  }
})

export default styles