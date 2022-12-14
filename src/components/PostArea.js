import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Post from './Post';
const postDetails = {
  ownerName: 'furkang',
  profileImg:
    'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg',
    postImg:"https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g",
    likedUsers:[
        {
            ownerName: 'furkang',
            profileImg:
              'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
        },
        {
            ownerName: 'furkang',
            profileImg:
              'https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g',
        },
        {
            ownerName: 'furkang',
            profileImg:
              'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g',
        },
    ]
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
