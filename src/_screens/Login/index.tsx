import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import Button from "../../_components/Button";
import Input from "../../_components/Input";
import { useState } from "react";
import UploadImage from "../../_components/UploadImage";
import * as ImagePicker from "expo-image-picker";
import styles from "./styles";



const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>('')
  const [fontsLoaded] = useFonts({
    BiennaleBold: require("../../../assets/fonts/BiennaleBold.otf"),
    BiennaleLight: require("../../../assets/fonts/BiennaleLight.otf"),
    BiennaleRegular: require("../../../assets/fonts/BiennaleRegular.otf"),
  });
  return (
    <View style={styles.container}>

      <Input
        onChangeText={(e: string) =>
          setEmail(e)}
        placeholder={"Digite seu email"}
        icone={require('../../_assets/image/envelope.png')}
        value={email}        
      />
      <Input
        onChangeText={(e: string) =>
          setPassword(e)}
        placeholder={"Digite sua senha"}
        value={password}        
        icone={require('../../_assets/image/key.png')}
        secureTextEntry={true}
      />
      
      <Button
        onPress={() => {}}
        placeholder="Login"
        loading={false}
        disabled={false}
      />
      
      <StatusBar style="auto" />
    </View>
  )
}


export default Login;