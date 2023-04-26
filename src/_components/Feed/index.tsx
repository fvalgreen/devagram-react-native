import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { IUserData } from "../../_services/UserService/types";
import { useEffect, useState } from "react";
import * as FeedService from "../../_services/FeedService";
import { IPost } from "./Post/types";
import { IComment } from "./Comments/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import Post from "./Post";

const Feed = (props: { isProfileFeed?: boolean; profile?: IUserData }) => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, "Login">;

  const navigation = useNavigation<navigationTypes>();

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);

  const { colors } = require("../../../app.json");

  useEffect(() => {
    loadPosts();
    navigation.addListener("focus", () => {
      loadPosts();
    });
  }, [props]);

  const loadPosts = async () => {
    if ((props.isProfileFeed && props?.profile?.id) || !props.isProfileFeed) {
      try {
        setLoading(true);
        console.log(props.profile)
        const { data } = await FeedService.getPosts(props.profile?.id);
        

        const postsFormated: IPost[] = data.map((post: any) => {
          const postFormated: IPost = {
            description: post.descricao,
            id: post._id,
            image: post.foto,
            likes: post.likes,
            user: {
              id: post?.idUsuario || props.profile?.id,
              name: post?.usuario?.nome || props.profile?.name,
              avatar: post?.usuario?.avatar || props.profile?.avatar,
              token: "",
              email: "",
            },
            comments: post.comentarios.map((comment: any) => {
              return {
                name: comment.nome,
                message: comment.comentario,
                userId: comment.usuarioId,
              };
            }),
          };
          return postFormated;
        });
        setPosts(postsFormated);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.id?.toString()}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={() =>
          loading ? (
            <ActivityIndicator size={30} color={colors.corPrimaria2} />
          ) : null
        }
      />
    </View>
  );
};

export default Feed;
