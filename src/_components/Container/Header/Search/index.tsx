import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { IUserData } from "../../../../_services/UserService/types";
import { search } from "../../../../_services/UserService";
import styles from "./styles";
import SvgAvatar from "../../../../_assets/image/SvgAvatar";
import Avatar from "../../../Avatar";

const Search = (props: { filter: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<IUserData[]>([]);

  const {colors} = require('../../../../../app.json');

  useEffect(() => {
    setUsers([]);
    if(props.filter.length >= 3){
      findUsers();
    }
  },[props.filter])

  const findUsers = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await search(props.filter);
      const usersFormated: IUserData[] = data?.map(
        (user: any, index: number) => {
          const userFormated = {
            index: index,
            id: user._id,
            name: user.nome,
            email: user.email,
            avatar: user.avatar,
            posts: user.publicacoes,
            followers: user.seguidores,
            following: user.seguindo,
          };
          return userFormated;
        });

      setUsers(usersFormated);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
    }
  }, [users]);

  const renderItem = (user: IUserData) => {
    return (
      
      <TouchableOpacity style={user.index % 2 != 0 ? styles.backgroundOdd : styles.backgroundEven } >
        <View style={styles.row} >
          <View>
            <Avatar image={user.avatar}/>
          </View>
          <View  >
            <Text style={styles.name} >{user.name}</Text>
            <Text style={styles.email} >{user.email}</Text>
          </View>
        </View>
      </TouchableOpacity>
      
    )
  }
  

  return (
  <View style={styles.container}>
    {users.length > 0 ?
    <FlatList 
      data={users} 
      renderItem={({item}) => renderItem(item)} 
      keyExtractor={item => item.id?.toString()}
      onEndReachedThreshold={0.1}
      ListFooterComponent={() => (
        loading ?
        <View>
          <ActivityIndicator size={30} color={colors.corPrimaria2} />
        </View>
        :
        null
        )}
      />
      :
      null
    }
  </View>
  );
};

export default Search;
