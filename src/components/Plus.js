import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Plus = () => {
  return (
    <View style={styles.plusContainer}>
     <Icon name="plus" size={14} color="black" />
    </View>
  )
}

export default Plus

const styles = StyleSheet.create({
    plusContainer: {
        position: "absolute",
        justifyContent:"center",
        alignItems:"center",
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: "white",
        bottom:0,
        right:0,
        borderWidth:0.7,
        borderColor:"black"
        
      },
})