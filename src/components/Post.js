import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PostHeader from './PostHeader'
import PostImage from './PostImage';
import PostDetailsArea from './PostDetailsArea';

const Post = ({postDetails}) => {
  return (
    <View>
    <PostHeader ownerName={postDetails?.ownerName} profileImg={postDetails?.profileImg}/>
    <PostImage postImg={postDetails?.postImg}/>
    <PostDetailsArea/>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({})