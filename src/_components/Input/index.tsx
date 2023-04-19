import { Image, ImageSourcePropType, View, TextInput, Text } from "react-native";
import { IInpput } from "./types";
import styles from "./styles";


const Input = (props: IInpput) => {
  return (
    <View style={styles.containerInput}>
      <View style={styles.row} >
        {props.icone[0]}
        <TextInput 
          placeholder={props.placeholder}
          style={[styles.input, props.style]}
          secureTextEntry={props.secureTextEntry}
          value={props.value}
          onChangeText={props.onChangeText}
          autoCapitalize="none"

        />
        
      </View>
    </View>
  )
}

export default Input;