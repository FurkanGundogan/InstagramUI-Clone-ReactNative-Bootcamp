import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostImage = ({postImg}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
      style={styles.image}
      source={{
        uri:postImg
      }}
      />
    </View>
  )
}

export default PostImage

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 200,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})