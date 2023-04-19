import { Image, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";
import SvgAvatar from "../../_assets/image/SvgAvatar";
import SvgCamera from "../../_assets/image/SvgCamera";
import SvgAvatarCamera from "../../_assets/image/SvgAvatarCamera";

const UploadImage = (props: {
  setImage: (imagem: ImagePicker.ImagePickerResult) => void,
  image: any
}) => {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      props.setImage(result);
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.containerAvatar} onPress={pickImage}>
        {props.image ?
        <Image
          style={styles.image}
          source={{uri: props.image.uri}}
        ></Image>
        :
        <View>
          <SvgAvatarCamera
            style={{ width: 110, height: 110 }}          
          />
          
        </View>
        }
        
      </TouchableOpacity>
    </View>
  );
};

export default UploadImage;
