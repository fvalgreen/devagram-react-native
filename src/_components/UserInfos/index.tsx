import { Text, View } from "react-native";
import Avatar from "../Avatar";
import { IUser, IUserData } from "../../_services/UserService/types";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import Button from "../Button";

const UserInfos = (props: {profile: IUserData, userLogged: IUser}) => {
  
  
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
            <Text style={styles.textNumber}>{props.profile.followers}</Text>
            <Text style={styles.text}>Seguidores</Text>
          </View>
          <View style={styles.containerInfo}>            
            <Text style={styles.textNumber}>{props.profile.following}</Text>
            <Text style={styles.text}>Seguindo</Text>
          </View>

        </View>
        <View style={styles.containerButton}>
          {props.profile.id == props.userLogged.id? 
          <Button onPress={() => {}} placeholder="Editar perfil" style={[styles.buttonEditProfile]}/>
          :
          <Button onPress={() => {}} placeholder={props.profile.followThisUser? "Deixar de seguir" : "Seguir"} style={props.profile.followThisUser? styles.buttonUnfollow : styles.buttonFollow} />
          }
        </View>
      </View>
    </View>
  )
}

export default UserInfos;