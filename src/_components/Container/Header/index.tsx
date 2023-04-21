import { View, TextInput } from "react-native"
import { IHeader } from "./types";
import styles from "./styles";
import SvgLogoHorizontal from "../../../_assets/image/SvgLogoHorizontal";
import SvgLupa from "../../../_assets/image/SvgLupa";

const Header = (props: IHeader) => {
  const {colors} = require("../../../../app.json");
  return (
    <View style={styles.container} >
      {
        props.default && 
        (
          <View style={styles.row} >
            <SvgLogoHorizontal style={styles.logo} />

            <View style={props?.searchBar?.value.length == 0 ? styles.containerInputSearch : [styles.containerInputSearch, {borderColor: colors.corPrimaria2, borderWidth: 1}]} >
              <SvgLupa style={styles.icon} />
              
              <TextInput
                placeholder="Pesquisar"
                style={props?.searchBar?.value.length == 0 ? styles.input : styles.inputActive}
                value={props?.searchBar?.value}
                onChangeText={props?.searchBar?.onChange}
                autoCapitalize="none"
              />
            </View>
          </View>
        )
      }
    </View>
  )
}

export default Header;