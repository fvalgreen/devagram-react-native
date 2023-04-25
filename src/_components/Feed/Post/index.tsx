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

const Post = (props: { post: IPost }) => {
  const limitOfDescription = 100;

  const [liked, setLiked] = useState<boolean>(false);
  const [numberOfLikes, setNumberOfLikes] = useState<number>(props.post.likes.length);
  const [commented, setCommented] = useState<boolean>(true);
  const [userLogged, setUserLogged] = useState<IUser>();
  const [textMoreorLess, setTextMoreOrLess] = useState<string>("ver mais");
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
      if(liked){
        setNumberOfLikes(numberOfLikes - 1)
      }else{
        setNumberOfLikes(numberOfLikes + 1)
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
      textMoreorLess === "ver mais"
    ) {
      setDescription(
        props.post.description.substring(0, limitOfDescription) + "..."
      );
      setNumberOfLines(2);
    }else{
      if (
        props.post.description.length > limitOfDescription &&
        textMoreorLess === "ver menos"
      ) {
        setDescription(props.post.description + " ");
        setNumberOfLines(undefined);
    }
    }
  };

  const verifyLengthOfDescription = () => {
    setTextMoreOrLess(textMoreorLess === "ver menos" ? "ver mais" : "ver menos");
    getDescription();
    console.log(textMoreorLess)
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.containerUser}>
          <View>
            <Avatar image={props.post.user.avatar} />
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
            {numberOfLikes}{" "}
            {numberOfLikes > 1 ? "pessoas" : "pessoa"}
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
