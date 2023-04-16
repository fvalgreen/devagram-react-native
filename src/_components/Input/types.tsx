import { ImageSourcePropType } from "react-native";

export interface IInpput {
  icone?: ImageSourcePropType,
  placeholder: string,
  style?: any,
  secureTextEntry?: boolean,
  value: string,
  onChangeText: (e: string) => void
}