import { Image, ImageSourcePropType, View, TextInput } from "react-native";
import { IInpput } from "./types";
import styles from "./styles";


const Input = (props: IInpput) => {
  return (
    <View style={styles.containerInput}>
      <View style={styles.row} >
        {props.icone && 
        <Image style={styles.image} source={props.icone}/>
        }
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