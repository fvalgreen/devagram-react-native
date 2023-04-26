import { Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";
import Container from "../../_components/Container";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import Feed from "../../_components/Feed";
import UserInfos from "../../_components/UserInfos";
import Avatar from "../../_components/Avatar";
import UploadImage from "../../_components/UploadImage";
import Input from "../../_components/Input";
import { useState } from "react";
import SvgLimpar from "../../_assets/image/SvgLimpar";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";

const EditProfile = () => {
  type navigationTypes = NativeStackNavigationProp<
    RootStackParamList,
    "EditProfile"
  >;
  const navigation = useNavigation<navigationTypes>();
  const profile = navigation
    .getState()
    .routes.find((route) => route.name == "EditProfile")?.params;

  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<any>();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result);
    }
  };

  

  return (
    <Container
      footerProps={{ currentTab: "Profile" }}
      headerProps={{
        editProfileHeader: {
          submit: () => {},
        },
      }}
    >
      <View style={styles.container}>
        <View style={styles.containerImage}>
          {profile && (
            <View>
              <Avatar withLinearGradient={true} user={profile} />
            </View>
          )}
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.textUpdateImage}>Alterar foto do perfil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerEditName}>
          <View style={styles.containerEditNameRow}>
          <Text style={styles.textName}>Nome</Text>
          {profile && (
            <TextInput
              onChangeText={(e) => setName(e)}
              placeholder={profile.name ? profile.name : "Digite um nome"}
              value={name}
              style={styles.input}
            />
          )}
          <TouchableOpacity onPress={() => setName('')}>
            <SvgLimpar />
          </TouchableOpacity>            
          </View>
        </View>
      </View>
    </Container>
  );
};

export default EditProfile;
