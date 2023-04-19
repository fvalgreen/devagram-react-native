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




const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>('')
  
  return (
    <View style={styles.container}>
      <SvgLogo style={styles.logo} />      
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