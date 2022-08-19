import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Post from './Post';
const postDetails = {
  ownerName: 'furkang',
  profileImg:
    'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg',
};
const PostArea = () => {
  return (

      <ScrollView style={styles.containerStyle}>
        <Post postDetails={postDetails} />
        <Post postDetails={postDetails} />
        <Post postDetails={postDetails} />
        <Post postDetails={postDetails} />
        <Post postDetails={postDetails} />
        <Post postDetails={postDetails} />
        <Post postDetails={postDetails} />
        <Post postDetails={postDetails} />
        <Post postDetails={postDetails} />
        <Post postDetails={postDetails} />
        <Post postDetails={postDetails} />
      </ScrollView>
    
  );
};

export default PostArea;

const styles = StyleSheet.create({
  containerStyle: {
    marginTop:8
    
  },
});
