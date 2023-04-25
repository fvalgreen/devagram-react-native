import { View, Text, TextInput, Image, Alert } from "react-native";
import { IComment, IComments } from "./types";
import styles from "./styles";
import Avatar from "../../Avatar";
import { useState, useEffect } from "react";
import { IUser } from "../../../_services/UserService/types";
import * as FeedService from "../../../_services/FeedService";

const Comments = (props: IComments) => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<IComment[]>(props.comments)
  
  const onComment = async () => {
    
      try {
        if(props.userLogged && props.userLogged.name && props.userLogged.id){

          await FeedService.sendComment(props.postId, comment);
          const commentList = comments
          commentList.push({name: props.userLogged.name, message: comment, userId: props.userLogged.id})
          setComments(commentList);
          setComment('')
          
        }
      } catch (error: any) {
        Alert.alert("Erro", "Erro ao enviar o comentário");
        console.log(error);
      }
    
  }
  return (
    <View style={styles.containerComments}>
      {comments?.length > 0 &&
        comments.map((comment: IComment, index: number) => (
          <View key={index}>
            <Text style={styles.textContainer}>
              <Text style={styles.textUserName}>{comment.name}</Text>{" "}
              <Text style={styles.textComment}>{comment.message}</Text>
            </Text>
          </View>
        ))}
      {props.commentIsActive && (
        <View style={styles.containerInputComment}>
          <View style={styles.containerAvatar}>          
          <Avatar image={props.userLogged.avatar} />
          </View>         
          <TextInput 
            placeholder="Adicione um comentário ... "
            value={comment}
            onChangeText={value => setComment(value)}
            onSubmitEditing={onComment} 
            autoCapitalize="none" 
            style={styles.inputComment}
          />
        </View>
      )}
    </View>
  );
};

export default Comments;
