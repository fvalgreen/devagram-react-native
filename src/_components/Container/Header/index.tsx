import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { IHeader } from "./types";
import styles from "./styles";
import SvgLogoHorizontal from "../../../_assets/image/SvgLogoHorizontal";
import SvgLupa from "../../../_assets/image/SvgLupa";
import SvgSetaEsquerda from "../../../_assets/image/SvgSetaEsquerda";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import SvgLogout from "../../../_assets/image/SvgLogout";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = (props: IHeader) => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, "Home">;
  const navigation = useNavigation<navigationTypes>();
  const { colors } = require("../../../../app.json");

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate("Login")
  };
  return (
    <View style={styles.container}>
      {props.default && (
        <View style={styles.row}>
          <SvgLogoHorizontal style={styles.logo} />

          <View
            style={
              props?.searchBar?.value.length == 0
                ? styles.containerInputSearch
                : [
                    styles.containerInputSearch,
                    { borderColor: colors.corPrimaria2, borderWidth: 1 },
                  ]
            }
          >
            <SvgLupa style={styles.icon} />

            <TextInput
              placeholder="Pesquisar"
              style={
                props?.searchBar?.value.length == 0
                  ? styles.input
                  : styles.inputActive
              }
              value={props?.searchBar?.value}
              onChangeText={props?.searchBar?.onChange}
              autoCapitalize="none"
            />
          </View>
        </View>
      )}

      {props.profileHeader && (
        <View style={styles.rowProfile}>
          <View>
            {props.profileHeader.idExternalProfile && (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <SvgSetaEsquerda style={styles.leftArrow} />
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.profileName}>{props.profileHeader.userName}</Text>
          <View>
            {!props.profileHeader.idExternalProfile && (
              <TouchableOpacity onPress={logout}>
                <SvgLogout />
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}

      {props.editProfileHeader &&
      <View style={styles.rowProfile}> 
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textCancel}>Cancelar</Text>
        </TouchableOpacity>
        <Text style={styles.editProfile}>Editar Perfil</Text>
        <TouchableOpacity onPress={logout}>
          <Text style={styles.textSubmit}>Concluir</Text>
        </TouchableOpacity>
      </View>
      }
    </View>
  );
};

export default Header;
