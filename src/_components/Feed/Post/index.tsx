import { Image, View, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { IPost } from "./types";
import SvgAvatar from "../../../_assets/image/SvgAvatar";
import styles from "./styles";
import SvgCurtido from "../../../_assets/image/SvgCurtido";
import SvgCurtir from "../../../_assets/image/SvgCurtir";
import SvgComentarioAtivo from "../../../_assets/image/SvgComentarioAtivo";
import SvgComentarioCinza from "../../../_assets/image/SvgComentarioCinza";
import { getCurrentUser } from "../../../_services/UserService";
import { IUser } from "../../../_services/UserService/types";

const Post = (props: { post: IPost }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [commented, setCommented] = useState<boolean>(true);
  const [userLogged, setUserLogged] = useState<IUser>();

  useEffect(() => {
    verifyLiked();
  }, []);

  const toggleLike = async () => {
    setLiked(!liked);
  };
  const toggleComment = async () => {
    setCommented(!commented);
  };

  const verifyLiked = async () => {
    const user = await getCurrentUser();
    setUserLogged(user);
    if (user.id) {
      setLiked(props.post.likes.includes(user.id));
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.containerUser}>
          {props.post.user.avatar ? (
            <Image
              style={styles.imageUser}
              source={{ uri: props.post.user.avatar }}
            />
          ) : (
            <SvgAvatar style={styles.imageUser} />
          )}
          <Text style={styles.textUserName}>{props.post.user.name}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image style={styles.postImage} source={{ uri: props.post.image }} />
      </View>
      <View style={styles.containerActions}>
        <TouchableOpacity onPress={toggleLike}>
          {liked ? (
            <SvgCurtido style={styles.iconActions} />
          ) : (
            <SvgCurtir style={styles.iconActions} />
          )}
        </TouchableOpacity>
        <TouchableOpacity>
          {commented ? (
            <SvgComentarioAtivo style={styles.iconActions} />
          ) : (
            <SvgComentarioCinza style={styles.iconActions} />
          )}
        </TouchableOpacity>
        <Text style={styles.textLikes}>
          Curtido por{" "}
          <Text style={styles.textLikesBold}>
            {props.post.likes.length}{" "}
            {props.post.likes.length > 1 ? "pessoas" : "pessoa"}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Post;
