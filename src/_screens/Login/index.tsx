import { Text, View, TouchableOpacity } from "react-native";
import Button from "../../_components/Button";
import Input from "../../_components/Input";
import { useState } from "react";
import styles from "./styles";
import SvgLogo from "../../_assets/image/SvgLogo";
import SvgChave from "../../_assets/image/SvgChave";
import SvgEnvelope from "../../_assets/image/SvgEnvelope";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../_routes/RootStackParams";

const Login = () => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Login'>

  const navigation = useNavigation<navigationTypes>();


  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  return (
    <View style={styles.container}>
      <SvgLogo style={styles.logo} />

      <Text></Text>
      
      <Input
        onChangeText={(e: string) => setEmail(e)}
        placeholder={"Digite seu email"}
        icone={[<SvgEnvelope />]}
        value={email}
      />
      <Input
        onChangeText={(e: string) => setPassword(e)}
        placeholder={"Digite sua senha"}
        value={password}
        icone={[<SvgChave />]}
        secureTextEntry={true}
      />

      <Button
        onPress={() => {}}
        placeholder="Login"
        loading={false}
        disabled={false}
      />

      <View style={styles.containerWithAccount}>
        <Text>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} >
          <Text style={styles.textSignUp}>Faça seu cadastro agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
