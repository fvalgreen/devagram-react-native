import * as DevagramApiService from "../DevagramApiService";
import { ILogin, IUser } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const login = async (body: ILogin) => {
  const { data } = await DevagramApiService.post("/login", body);
  await AsyncStorage.setItem("token", data.token);
  updateCurrentUser();
};

const register = async (body: FormData) => {
  await DevagramApiService.post("/cadastro", body, {
    "content-Type": "multipart/form-data",
  });
};

const updateCurrentUser = async () => {
  const user = await DevagramApiService.get("/usuario");

  await AsyncStorage.setItem("name", user.data.nome);
  await AsyncStorage.setItem("email", user.data.email);
  await AsyncStorage.setItem("id", user.data._id);
  await AsyncStorage.setItem("avatar", user.data.avatar);
};

const getCurrentUser = async () => {
  const user: IUser = {
    id: await AsyncStorage.getItem("id"),
    name: await AsyncStorage.getItem("name"),
    email: await AsyncStorage.getItem("email"),
    avatar: await AsyncStorage.getItem("avatar"),
    token: await AsyncStorage.getItem("token"),
  };

  return user;
};

const search = async (filter: string) => {
  console.log(`/pesquisa?filtro=${filter}`);
  return await DevagramApiService.get(`/pesquisa?filtro=${filter}`);
};


export { login, getCurrentUser, updateCurrentUser, register, search };
