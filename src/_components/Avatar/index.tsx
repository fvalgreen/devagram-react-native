import { Image, TouchableOpacity, View } from "react-native";
import SvgAvatar from "../../_assets/image/SvgAvatar";
import styles from "./styles";
import { IUser, IUserData } from "../../_services/UserService/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Avatar = (props: {
  withLinearGradient?: boolean;
  user: IUser | IUserData;
  image?: any
}) => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, "Home">;
  const navigation = useNavigation<navigationTypes>();

  const { colors }= require("../../../app.json");
  return props.withLinearGradient ? (
    <LinearGradient
      colors={[colors.corPrimaria2, colors.corPrimaria3]}
      style={styles.linearGradientContainer}
    >
      {props.user.avatar ? (
        <Image style={styles.imageUserLinear} source={props.image ? {uri: props.image.uri} : { uri: props.user.avatar }} />
      ) : (
        <View>
          {props.image ? 
            <SvgAvatar style={styles.imageUserLinear} />
            :
            <Image style={styles.imageUserLinear} source={{uri: props.image.uri}} />
          }
        </View>
      )}
    </LinearGradient>
  ) : (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("Profile", props.user);
      }}
    >
      {props.user.avatar ? (
        <Image style={styles.imageUser} source={{ uri: props.user.avatar }} />
      ) : (
        <SvgAvatar style={styles.imageUser} />
      )}
    </TouchableOpacity>
  );
};
export default Avatar;
