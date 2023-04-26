import { Text, View } from "react-native";
import Container from "../../_components/Container";
import Feed from "../../_components/Feed";
import { Alert } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import * as UserService from "../../_services/UserService"
import { useState, useEffect } from "react";
import { IUser, IUserData } from "../../_services/UserService/types";
import UserInfos from "../../_components/UserInfos";

const Profile = () => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, "Profile">;
  const navigation = useNavigation<navigationTypes>();
  
  const [userLogged, setUserLogged] = useState<IUser>();
  const [profile, setProfile] = useState<IUserData>();
  const [isInPersonalProfile, setIsInPersonalProfile] = useState<boolean>(false);

  useEffect(() => {
    getProfile();
    if(navigation.getState().routes.find(route => route.name == "Profile")){
      getProfile()
    }
  },[navigation.getState().routes.find(route => route.name == "Profile")?.params])


  const getProfile = async () => {

  const profileParams = navigation.getState().routes.find(route => route.name == "Profile")?.params;
  console.log(profileParams)
  
    try {
      const user = await UserService.getCurrentUser();
      setUserLogged(user);

      var profile;
      if(profileParams && profileParams.id){
        profile = await UserService.getProfile(profileParams.id); 
        setIsInPersonalProfile(false);       
      }else if(user && user.id){
        profile = await UserService.getProfile(user?.id);
        setIsInPersonalProfile(true)
      }        
        
        if(profile){
          const profileFormated : IUserData = {            
              id: profile.data._id,
              name: profile.data.nome,
              email: profile.data.email,
              avatar: profile.data.avatar,
              posts: profile.data.publicacoes,
              followers: profile.data.seguidores,
              following: profile.data.seguindo,
              followThisUser: profile.data.segueEsseUsuario,
              index: 1
          }
          setProfile(profileFormated);

        }
    } catch (error) {
      Alert.alert("Error", "Erro ao carregar dados do perfil")
      console.log(error)
    }
  };
  return (
    <Container
      footerProps={{ currentTab: userLogged?.id == profile?.id ? "Profile" : "Home", currentUser: userLogged}}
      headerProps={{ profileHeader: {
        idExternalProfile: userLogged?.id != profile?.id ,
        userName: profile?.name || ""
      } }}
    >
      <View>
        {profile && userLogged &&
          <UserInfos  profile={profile} userLogged={userLogged}/>        
        }
      <Feed isProfileFeed={true} profile={profile}/>
      </View>
    </Container>
  );
};

export default Profile;
