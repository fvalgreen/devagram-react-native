import * as DevagramApiService from "../DevagramApiService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getPosts = async (id?: string) => {
  let url = '/feed'

  if(id){
    url = url + "?=" + id;
  }

  return await DevagramApiService.get(url)
};

export { getPosts };
