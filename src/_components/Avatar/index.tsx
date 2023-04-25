import { Image, TouchableOpacity } from "react-native"
import SvgAvatar from "../../_assets/image/SvgAvatar"
import styles from "./styles"
import { IUser, IUserData } from "../../_services/UserService/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";

const Avatar = (props: {user: IUser | IUserData}) => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, "Home">;
  const navigation = useNavigation<navigationTypes>();
  return (
    <TouchableOpacity style={styles.container} onPress={() => {navigation.navigate('Profile', props.user)}}>
          {props.user.avatar ? (
            <Image
              style={styles.imageUser}
              source={{ uri: props.user.avatar }}
            />
          ) : (
            <SvgAvatar style={styles.imageUser} />
          )}
          
        </TouchableOpacity>
  )
};
export default Avatar;