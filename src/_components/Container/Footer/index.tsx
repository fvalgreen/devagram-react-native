import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import SvgHomeAtivo from "../../../_assets/image/SvgHomeAtivo";
import SvgHomeCinza from "../../../_assets/image/SvgHomeCinza";
import SvgPublicacaoCinza from "../../../_assets/image/SvgPublicacaoCinza";
import SvgPublicacaoAtivo from "../../../_assets/image/SvgPublicacaoAtivo";
import SvgUsuarioCinza from "../../../_assets/image/SvgUsuarioCinza";
import SvgUsuarioAtivo from "../../../_assets/image/SvgUsuarioAtivo";
import styles from "./styles";
import { IFooter } from "./types";

const Footer = (props: IFooter) => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, "Login">;

  const navigation = useNavigation<navigationTypes>();

  const menu: any = [
    {
      title: "Home",
      onPress: () => {
        navigation.navigate("Home");
      },
      icon: <SvgHomeCinza />,
      iconActived: <SvgHomeAtivo />,
    },
    {
      title: "NewPublication",
      onPress: () => {
        navigation.navigate("NewPublication");
      },
      icon: <SvgPublicacaoCinza />,
      iconActived: <SvgPublicacaoAtivo />,
    },
    {
      title: "Profile",
      onPress: () => {
        navigation.navigate("Profile", props.currentUser);
      },
      icon: <SvgUsuarioCinza />,
      iconActived: <SvgUsuarioAtivo />,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {menu.map((botao: any, index: any) => (
          <TouchableOpacity onPress={botao.onPress} key={index}>
            {props.currentTab === botao.title ? botao.iconActived : botao.icon}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Footer;
