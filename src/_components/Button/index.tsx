import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { IButton } from "./types";
import styles from "./styles";

const {colors} = require("../../../app.json");

const Button = (props: IButton) => {
  return (
    <View style={styles.containerButton} >
      <TouchableOpacity
        onPress={props.onPress}
        disabled={props.disabled}
        style={props.disabled ? [styles.button, styles.buttonDisabled, props.style] : [styles.button, props.style]}
      >
        {props.loading ? (
          <ActivityIndicator size={30} color={colors.corBranco} />
        ) : (
          <Text style={styles.text} >{props.placeholder}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
