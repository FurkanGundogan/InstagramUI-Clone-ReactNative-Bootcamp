import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LikedUser = ({profileImg}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
      style={styles.image}
      source={{
        uri:profileImg
      }}
      />
    </View>
  )
}

export default LikedUser

const styles = StyleSheet.create({
    imageContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'black',
        marginLeft:-18
      },
      image: {
        width: '100%',
        height: '100%',
      },
})