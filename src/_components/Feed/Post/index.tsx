import { Image, View, Text, TouchableOpacity, Alert } from "react-native";
import { useState, useEffect } from "react";
import { IPost } from "./types";
import styles from "./styles";
import SvgCurtido from "../../../_assets/image/SvgCurtido";
import SvgCurtir from "../../../_assets/image/SvgCurtir";
import SvgComentarioAtivo from "../../../_assets/image/SvgComentarioAtivo";
import SvgComentarioCinza from "../../../_assets/image/SvgComentarioCinza";
import { getCurrentUser } from "../../../_services/UserService";
import { IUser } from "../../../_services/UserService/types";
import Comments from "../Comments";
import Avatar from "../../Avatar";
import * as FeedService from "../../../_services/FeedService";
import { err } from "react-native-svg/lib/typescript/xml";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";

const Post = (props: { post: IPost }) => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, "Home">;
  const navigation = useNavigation<navigationTypes>();

  const limitOfDescription = 100;

  const [liked, setLiked] = useState<boolean>(false);
  const [numberOfLikes, setNumberOfLikes] = useState<number>(
    props.post.likes.length
  );
  const [commented, setCommented] = useState<boolean>(true);
  const [userLogged, setUserLogged] = useState<IUser>();
  const [textMoreorLess, setTextMoreOrLess] =
    useState<string>("ver mais/menos");
  const [description, setDescription] = useState<string>(
    props.post.description
  );
  const [numberOfLines, setNumberOfLines] = useState<number | undefined>(2);
  const [commentIsActive, setCommentIsActive] = useState<boolean>(false);

  useEffect(() => {
    verifyLiked();
  }, []);

  const toggleLike = async () => {
    try {
      setLiked(!liked);
      await FeedService.toggleLike(props.post.id);
      if (liked) {
        setNumberOfLikes(numberOfLikes - 1);
      } else {
        setNumberOfLikes(numberOfLikes + 1);
      }
    } catch (error: any) {
      Alert.alert("Erro", "Erro ao efetuar a curtida");
      console.log(error);
    }
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

  const getDescription = () => {
    if (
      props.post.description.length > limitOfDescription &&
      textMoreorLess === "ver mais/menos"
    ) {
      setDescription(
        props.post.description.substring(0, limitOfDescription) + "..."
      );
      setNumberOfLines(2);
    } else {
      if (
        props.post.description.length > limitOfDescription &&
        textMoreorLess === "ver mais\\menos"
      ) {
        setDescription(props.post.description + " ");
        setNumberOfLines(undefined);
      }
    }
  };

  const verifyLengthOfDescription = () => {
    setTextMoreOrLess(
      textMoreorLess === "ver mais/menos" ? "ver mais\\menos" : "ver mais/menos"
    );
    getDescription();
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.containerUser} onPress={() => navigation.navigate("Profile", props.post.user)}>
          <View>
            <Avatar user={props.post.user} />
          </View>
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
        <TouchableOpacity onPress={() => setCommentIsActive(!commentIsActive)}>
          {commentIsActive ? (
            <SvgComentarioAtivo style={styles.iconActions} />
          ) : (
            <SvgComentarioCinza style={styles.iconActions} />
          )}
        </TouchableOpacity>
        <Text style={styles.textLikes}>
          Curtido por{" "}
          <Text style={styles.textLikesBold}>
            {numberOfLikes} {numberOfLikes > 1 ? "pessoas" : "pessoa"}
          </Text>
        </Text>
      </View>
      <View style={styles.containerDescription}>
        <Text numberOfLines={numberOfLines} ellipsizeMode="tail">
          <Text style={styles.textUserName}>{props.post.user.name}</Text>{" "}
          <Text style={styles.textDescription}>{description}</Text>
        </Text>
        <Text
          style={
            props.post.description.length > limitOfDescription
              ? styles.textMoreOrLess
              : styles.displayNone
          }
          onPress={verifyLengthOfDescription}
          suppressHighlighting={false}
        >
          {props.post.description.length > limitOfDescription
            ? textMoreorLess
            : null}
        </Text>
      </View>
      {userLogged && (
        <Comments
          commentIsActive={commentIsActive}
          comments={props.post.comments}
          userLogged={userLogged}
          postId={props.post.id}
        />
      )}
    </View>
  );
};

export default Post;
