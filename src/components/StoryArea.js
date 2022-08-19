import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Story from './Story'
import CreateStoryItem from './CreateStoryItem'

const firstUrl="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY";
const StoryArea = () => {
  return (
    <ScrollView contentContainerStyle={{
        paddingRight:16,
    }} horizontal style={styles.storyContainer}>
      <CreateStoryItem imageUrl={firstUrl}/>
      <Story imageUrl={firstUrl}></Story>
      <Story imageUrl={firstUrl}></Story>
      <Story imageUrl={firstUrl}></Story>
      <Story imageUrl={firstUrl}></Story>
      <Story imageUrl={firstUrl}></Story>
      <Story imageUrl={firstUrl}></Story>
      <Story imageUrl={firstUrl}></Story>
      <Story imageUrl={firstUrl}></Story>
     
    </ScrollView>
  )
}

export default StoryArea

const styles = StyleSheet.create({
    storyContainer:{
        marginTop:16,
        paddingBottom:16,
        borderBottomWidth:0.5,
        borderBottomColor:"gray",
        width:"100%",
    },
})