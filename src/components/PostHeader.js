import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';


const PostHeader = ({ownerName,profileImg}) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: profileImg,
          }}
        />
      </View>
      <Text>{ownerName}</Text>
      <View>
        <Text>...</Text>
      </View>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
    imageContainer:{
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
});
