import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { IContainer } from "./types";
import styles from "./styles";
import Search from "./Header/Search";
import * as UserService from '../../_services/UserService'
import { IUser } from "../../_services/UserService/types";

const Container = (props: IContainer) => {
  const [userLogged, setUserLogged] = useState<IUser>();
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    getCurrentUser();
  }, [userLogged])

  const getCurrentUser = async () =>{
    const user = await UserService.getCurrentUser();
    if(user){
      setUserLogged(user);
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <Header        
        editProfileHeader={props.headerProps.editProfileHeader}
        profileHeader={props.headerProps.profileHeader}
        default={props.headerProps.default}
        headerNewPublication={props.headerProps.headerNewPublication}
        searchBar={{
          value: filter,
          onChange: (value: string) => {setFilter(value);}
        }}
      />
      <Search filter={filter}/>
      <View style={styles.content}>{props.children}</View>
      <View>
      <Footer currentTab={props.footerProps.currentTab} currentUser={userLogged} />

      </View>
    </SafeAreaView>
  );
};
export default Container;
