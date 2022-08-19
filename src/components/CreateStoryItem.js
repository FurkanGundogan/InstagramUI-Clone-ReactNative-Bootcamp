import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Story from './Story';
import Plus from './Plus';
const secondUrl =
  'https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo';
const CreateStoryItem = () => {
  return (
    <View>
      <Story imageUrl={secondUrl} />
      <Plus />
    </View>
  );
};

export default CreateStoryItem;

const styles = StyleSheet.create({});
