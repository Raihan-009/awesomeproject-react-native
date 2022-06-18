import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const CustomIcon = ({icon, social, bgcolor, fgcolor, btn}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={[bgcolor? {backgroundColor:bgcolor} : {}]} onPress={()=>{console.warn(`Logged in via ${btn}`)}}>
        <View style={styles.sclbtn}>
        <Icon name={icon} style={{color: fgcolor, fontSize:15 ,marginRight:10}}></Icon>
        <Text style={[fgcolor? {color:fgcolor} : {}]}>Login with {social}</Text>
        </View>
     </TouchableHighlight>
    </View>
  )
}

export default CustomIcon;


const styles = StyleSheet.create({
    container :{
        marginVertical:3,
    },
    sclbtn :{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:'center',
        height:30,
        marginVertical:3
    }
})