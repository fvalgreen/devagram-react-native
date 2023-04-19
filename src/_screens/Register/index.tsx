import { Text, View, TouchableOpacity } from "react-native";
import Button from "../../_components/Button";
import Input from "../../_components/Input";
import { useState, useEffect } from "react";
import styles from "./styles";
import SvgChave from "../../_assets/image/SvgChave";
import SvgEnvelope from "../../_assets/image/SvgEnvelope";
import UploadImage from "../../_components/UploadImage";
import SvgUsuarioAtivo from "../../_assets/image/SvgUsuarioAtivo";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import commumStyles from "../../commumStyles";
import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
} from "../../_utils/validation";

const Register = () => {
  type navigationTypes = NativeStackNavigationProp<
    RootStackParamList,
    "Register"
  >;

  const navigation = useNavigation<navigationTypes>();

  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<any | null>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const formIsValid = () => {
    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      error === ""
    ) {
      return false;
    }

    return true;
  };

  const fieldsAreValid = (): boolean => {
    const nameIsValid = validateName(name);
    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);
    const confirmPasswordIsValid = validateConfirmPassword(
      password,
      confirmPassword
    );

    setError("");
    if (!nameIsValid && name !== "") {
      setError("Nome inválido");
    }
    if (!emailIsValid && email !== "") {
      setError("Email inválido");
    }
    if (!passwordIsValid && password !== "") {
      setError("Senha inválida");
    }
    if (!confirmPasswordIsValid && confirmPassword !== "") {
      setError("A confirmação de senha precisa igual a senha");
    }

    return (
      nameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid
    );
  };

  useEffect(() => {
    fieldsAreValid();
  }, [name, email, password, confirmPassword]);

  return (
    <View style={styles.container}>
      <UploadImage image={image} setImage={setImage} />

      {error !== "" && <Text style={commumStyles.textError}>{error}</Text>}

      <Input
        onChangeText={(e: string) => setName(e)}
        placeholder={"Nome Completo"}
        icone={[<SvgUsuarioAtivo />]}
        value={name}
      />
      <Input
        onChangeText={(e: string) => setEmail(e)}
        placeholder={"E-mail"}
        icone={[<SvgEnvelope />]}
        value={email}
      />
      <Input
        onChangeText={(e: string) => setPassword(e)}
        placeholder={"Senha"}
        value={password}
        icone={[<SvgChave />]}
        secureTextEntry={true}
      />
      <Input
        onChangeText={(e: string) => setConfirmPassword(e)}
        placeholder={"Confirmar Senha"}
        value={confirmPassword}
        icone={[<SvgChave />]}
        secureTextEntry={true}
      />

      <Button
        onPress={() => {}}
        placeholder="Cadastrar"
        loading={false}
        disabled={formIsValid()}
      />

      <View style={styles.containerWithoutAccount}>
        <Text>Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textSignIn}>Faça seu login agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
