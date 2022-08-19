import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PostHeader from './PostHeader'
import PostImage from './PostImage';
import PostDetailsArea from './PostDetailsArea';
const profileImg="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY";
const Post = ({ownerName,profileImg}) => {
  return (
    <View>
    <PostHeader ownerName={ownerName} profileImg={profileImg}/>
    <PostImage/>
    <PostDetailsArea/>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({})