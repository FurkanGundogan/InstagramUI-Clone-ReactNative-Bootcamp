import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AndIcon from 'react-native-vector-icons/AntDesign';
import LikedUser from './LikedUser';

const PostDetailsArea = ({likedUsers}) => {
  return (
    <View style={styles.container}>
      <View style={styles.actionsWrapper}>
      <Icon style={styles.actionButton} name="heart" size={24} color="red" />
      <AndIcon style={styles.actionButton} name="message1" size={24} color="black" />
      <Icon style={styles.actionButton} name="send" size={24} color="black" />
      </View>
      <View style={styles.likedUsers}>
      {
        likedUsers.map((user,i)=><LikedUser key={i} profileImg={user.profileImg}/>)
      }
      <Text style={styles.likedUsersText}>{"furkang and 1414 people liked"}</Text>
      </View>
      <View style={styles.commentArea}>
      
      <Text style={styles.commentText}><Text style={styles.commentOwnerText}>{"@furu "}</Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas veniam dolor nihil?</Text>
      </View>
      
    </View>
  )
}

export default PostDetailsArea

const styles = StyleSheet.create({
  container:{
    marginTop:12,
    
  },
  actionsWrapper:{
    flexDirection:"row",marginTop:8
  },
  actionButton:{
    marginLeft:12
  },
  likedUsers:{
    marginTop:12,
    flexDirection:"row",
    marginLeft: 28,
    alignItems:"center"
  },
  likedUsersText:{
    marginLeft:8,
    color:"black",
    letterSpacing:-0.4,
    fontWeight:"400"
  },
  imageContainer: {
    width: "100%",
    height: 200,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  commentArea:{
    marginTop:6,
    paddingLeft:14,
    paddingRight:14,
  },
  commentOwnerText:{
    color:"black"
  }
})