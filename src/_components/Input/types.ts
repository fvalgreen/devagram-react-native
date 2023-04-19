import { ImageSourcePropType } from "react-native";

export interface IInpput {
  icone?: any,
  placeholder: string,
  style?: any,
  secureTextEntry?: boolean,
  value: string,
  onChangeText: (e: string) => void
}