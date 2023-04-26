import { Alert, Text, View } from "react-native";
import Avatar from "../Avatar";
import { IUser, IUserData } from "../../_services/UserService/types";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import Button from "../Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import * as UserService from "../../_services/UserService"
import { useEffect, useState } from "react";

const UserInfos = (props: {profile: IUserData, userLogged: IUser}) => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, "Profile">;

  const navigation = useNavigation<navigationTypes>();
  
  const [followingThisUser, SetFollowingThisUser] = useState<boolean>(props.profile.followThisUser);
  const [followers, setFollowers] = useState<number>(props.profile.followers);

  

  const toggleFollow = async () => {
    try {
      await UserService.toggleFollow(props.profile.id)
      if(followingThisUser){
        setFollowers(followers - 1);
      }else{
        setFollowers(followers + 1)
      }
      SetFollowingThisUser(!followingThisUser);
    } catch (error) {
      Alert.alert("Error", "Erro ao seguir/deixar de seguir o usuário")
      console.log(error);
    }
  }
  return (
    <View style={styles.container} >
      <Avatar withLinearGradient={true} user={props.profile}/>
      <View style={styles.containerUserInfos} >
        <View style={styles.containerInfos}>
          <View style={styles.containerInfo}>            
            <Text style={styles.textNumber}>{props.profile.posts}</Text>
            <Text style={styles.text}>Publicações</Text>
          </View>
          <View style={styles.containerInfo}>            
            <Text style={styles.textNumber}>{followers}</Text>
            <Text style={styles.text}>Seguidores</Text>
          </View>
          <View style={styles.containerInfo}>            
            <Text style={styles.textNumber}>{props.profile.following}</Text>
            <Text style={styles.text}>Seguindo</Text>
          </View>

        </View>
        <View style={styles.containerButton}>
          {props.profile.id == props.userLogged.id? 
          <Button onPress={() => {navigation.navigate("EditProfile", props.userLogged)}} placeholder="Editar perfil" style={[styles.buttonEditProfile]}/>
          :
          <Button onPress={toggleFollow} placeholder={followingThisUser? "Deixar de seguir" : "Seguir"} style={followingThisUser? styles.buttonUnfollow : styles.buttonFollow} />
          }
        </View>
      </View>
    </View>
  )
}

export default UserInfos;