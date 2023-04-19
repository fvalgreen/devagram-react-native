import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import Button from "../../_components/Button";
import Input from "../../_components/Input";
import { useState } from "react";
import UploadImage from "../../_components/UploadImage";
import * as ImagePicker from "expo-image-picker";
import styles from "./styles";
import SvgLogo from "../../_assets/image/SvgLogo";
import SvgChave from "../../_assets/image/SvgChave";
import SvgEnvelope from "../../_assets/image/SvgEnvelope";
import SvgLogout from "../../_assets/image/SvgLogout";
import SvgLupa from "../../_assets/image/SvgLupa";
import SvgPaisagem from "../../_assets/image/SvgPaisagem";
import SvgPublicacaoAtivo from "../../_assets/image/SvgPublicacaoAtivo";
import SvgPublicacaoCinza from "../../_assets/image/SvgPublicacaoCinza";
import SvgSetaEsquerda from "../../_assets/image/SvgSetaEsquerda";
import SvgTextura from "../../_assets/image/SvgTextura";
import SvgUsuarioAtivo from "../../_assets/image/SvgUsuarioAtivo";
import SvgUsuarioCinza from "../../_assets/image/SvgUsuarioCinza";



const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>('')
  
  return (
    <View style={styles.container}>
      <SvgUsuarioCinza/>
      
      <Input
        onChangeText={(e: string) =>
          setEmail(e)}
        placeholder={"Digite seu email"}
        icone={[<SvgEnvelope/>]}
        value={email}        
      />
      <Input
        onChangeText={(e: string) =>
          setPassword(e)}
        placeholder={"Digite sua senha"}
        value={password}        
        icone={[<SvgChave/>]}
        secureTextEntry={true}
      />
      
      <Button
        onPress={() => {}}
        placeholder="Login"
        loading={false}
        disabled={false}
      />
      
    </View>
  )
}


export default Login;