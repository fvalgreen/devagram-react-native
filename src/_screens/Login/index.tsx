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
import * as UserService from "../../_services/UserService";
import commumStyles from "../../commumStyles";
import {useCallback, useEffect} from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, "Login">;

  const navigation = useNavigation<navigationTypes>();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    verifyLogged();
  }, [])

  const onLogin = async () => {
    try {
      setLoading(true);
      await UserService.login({ login: email, senha: password });
      setLoading(false);
      navigation.navigate("Home");
    } catch (error: any) {
      console.log(error);
      setError("Erro ao efetuar login, tente novamente");
      setLoading(false);
    }
  };

  const verifyLogged = useCallback( async () => {
    const user = await UserService.getCurrentUser();
    if(user?.token){
      navigation.navigate('Home');
    }
  }, []) 
  return (
    <View style={styles.container}>
      <SvgLogo style={styles.logo} />

      {error !== "" && <Text style={commumStyles.textError}>{error}</Text>}

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
      <View style={styles.button}>
      <Button
        onPress={() => onLogin()}
        placeholder="Login"
        loading={loading}
        disabled={!email || !password}
      />
      </View>

      <View style={styles.containerWithAccount}>
        <Text>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.textSignUp}>Faça seu cadastro agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
