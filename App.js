/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StyleSheet} from 'react-native';
import Home from './src/screens/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const App = () => (
  <SafeAreaProvider>
    <Home />
  </SafeAreaProvider>)


const styles = StyleSheet.create({});

export default App;
