import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Post from './Post'

const PostArea = () => {
  return (
    <ScrollView>
      <Post/>
    </ScrollView>
  )
}

export default PostArea

const styles = StyleSheet.create({})