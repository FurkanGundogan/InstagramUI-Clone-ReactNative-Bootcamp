import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import StoryArea from '../components/StoryArea'
import PostArea from '../components/PostArea'
import SafeAreaView from 'react-native-safe-area-view'

const Home = () => {
  return (
    <SafeAreaView>
        <Header/>
        <StoryArea/>
        <PostArea/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})