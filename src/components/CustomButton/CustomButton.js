import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text , type="PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.button, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

export default CustomButton;

const styles = StyleSheet.create({
    container :{ 
        // backgroundColor:'#2f72de',
        padding:10,
        marginVertical:5,
        alignItems:'center',
        borderRadius:2,
    },
    button : {
        color : 'white',
        fontWeight : 'bold'
    },
    container_PRIMARY:{
        backgroundColor:'#2f72de'
    },
    container_TERTIARY:{},
    text_PRIMARY:{
        color: 'white',
        fontWeight: 'bold'
    },
    text_TERTIARY:{
        color:'grey'
    }
})