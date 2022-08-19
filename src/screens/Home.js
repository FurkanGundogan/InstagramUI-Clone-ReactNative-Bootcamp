import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import StoryArea from '../components/StoryArea'

const Home = () => {
  return (
    <SafeAreaView>
        <Header/>
        <StoryArea/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})