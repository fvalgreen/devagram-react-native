import { Image, TouchableOpacity } from "react-native"
import SvgAvatar from "../../_assets/image/SvgAvatar"
import styles from "./styles"

const Avatar = (props: {image: string | null}) => {
  return (
    <TouchableOpacity style={styles.container}>
          {props.image ? (
            <Image
              style={styles.imageUser}
              source={{ uri: props.image }}
            />
          ) : (
            <SvgAvatar style={styles.imageUser} />
          )}
          
        </TouchableOpacity>
  )
};
export default Avatar;