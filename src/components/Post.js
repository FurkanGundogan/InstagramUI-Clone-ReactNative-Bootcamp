import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PostHeader from './PostHeader'
import PostImage from './PostImage';
import PostDetailsArea from './PostDetailsArea';

const Post = ({postDetails}) => {
  return (
    <View style={styles.container}>
    <PostHeader ownerName={postDetails?.ownerName} profileImg={postDetails?.profileImg}/>
    <PostImage postImg={postDetails?.postImg}/>
    <PostDetailsArea likedUsers={postDetails?.likedUsers}/>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  container:{
    marginBottom:32
  }
})