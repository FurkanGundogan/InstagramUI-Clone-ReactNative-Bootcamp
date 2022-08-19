import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Story = ({imageUrl,children}) => {
  return (
    <View style={styles.story}>
      <Image
            style={styles.image}
            source={{
                uri:imageUrl
            }}
      />
      {children}
    </View>
  )
}

export default Story

const styles = StyleSheet.create({
    story:{
        width:100,
        height:100,
        borderRadius: 50,
        overflow: "hidden",
        borderWidth:1,
        borderColor:"black",
        marginLeft:16
    },
    image:{
        width:"100%",
        height:"100%",
    }
})