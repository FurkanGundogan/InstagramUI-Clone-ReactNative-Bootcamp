import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PostHeader = ({ownerName, profileImg}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftSide}>
        <View style={styles.imageContainer}>
          <Image source={{uri:profileImg}} style={styles.image}/>
        </View>
        <View style={styles.ownerName}>
        <Text>{ownerName}</Text>
        </View>
        
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.more}>...</Text>
      </View>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  headerContainer: {flexDirection: 'row', flex: 1},
  leftSide: {flexDirection: 'row', flex: 1,alignItems:"center"},
  rightSide: {
    flex: 1,
  },
  more: {
    alignSelf: 'flex-end',
    left: -12,
  },
  ownerName:{
    marginLeft:12
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
