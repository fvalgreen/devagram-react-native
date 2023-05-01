import { Alert ,Image, View, TextInput, TouchableOpacity } from "react-native";
import Container from "../../_components/Container";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import SvgPaisagem from "../../_assets/image/SvgPaisagem";
import styles from "./styles";
import * as FeedService from "../../_services/FeedService";

const Publication = () => {
  type navigationTypes = NativeStackNavigationProp<
    RootStackParamList,
    "NewPublication"
  >;
  const navigation = useNavigation<navigationTypes>();

  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<any>();

  useEffect(() => {
    pickImage();
  }, []);

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

  const compartilhar = async () => {
    if (image || description) {
      try {
        const body = new FormData();
        if (image) {
          const file: any = {
            uri: image.uri,
            type: `image/${image.uri.split("/").pop().split(".").pop()}`,
            name: image.uri.split("/").pop(),
          };
          body.append("file", file);
        };
        if (description) {
          body.append("descricao", description);
        };

        await FeedService.sendPost(body)
        navigation.goBack();
      } catch (error) {
        Alert.alert("Error", "Erro ao postar");
        console.log(error);
      }
    }
  };
  return (
    <Container
      footerProps={{ currentTab: "NewPublication" }}
      headerProps={{
        headerNewPublication: {
          onPressContinue: compartilhar,
          continueEnabled: image || description,
        },
      }}
    >
      <View style={styles.container}>
        <View style={styles.containerRow}>
          <TouchableOpacity
            onPress={() => pickImage()}
          >            
          <View style={styles.containerImage}>
            {image ? <Image style={styles.image} source={{uri: image.uri}}/> : <SvgPaisagem />}
          </View>
          </TouchableOpacity>
          <TextInput
          style={styles.description}
            placeholder="Escreva uma legenda ..."
            multiline={true}
            onChangeText={(value) => setDescription(value)}
            value={description}
            autoCapitalize="none"
          ></TextInput>
        </View>
      </View>
    </Container>
  );
};

export default Publication;
