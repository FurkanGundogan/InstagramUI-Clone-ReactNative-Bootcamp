import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleTextWrapper}><Text style={styles.titleText}>Instagram</Text></View>
      <View style={styles.iconWrapper}>
        <Icon name="camera" size={24} color="black" />
        <Icon style={styles.icon}  name="instagram" size={28} color="#f9524d" />
        <Icon style={styles.icon} name="send" size={24} color="black" /></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:16,
        width:"100%"
    },
    titleTextWrapper:{
        flex:2,
        alignItems:"flex-start",
        marginLeft:4
    },
    titleText:{
        fontSize:24,
        fontFamily:"fantasy",
        fontWeight:"800",
        color:"black",
        letterSpacing:-1.5
       
    },
    iconWrapper:{
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        flex:1
    },
    icon:{
        
    }
});
