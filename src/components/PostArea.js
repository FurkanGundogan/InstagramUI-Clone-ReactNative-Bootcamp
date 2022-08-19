import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Post from './Post'
const post={
    ownerName:"furkang",
    profileImg:"https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg",
}
const PostArea = () => {
  return (
    <ScrollView>
      <Post postDetails={post}/>
    </ScrollView>
  )
}

export default PostArea

const styles = StyleSheet.create({})