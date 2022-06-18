import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';

const CustomInput = ({placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} 
      placeholder={placeholder}
      placeholderTextColor="#D3D3D3"
      secureTextEntry = {secureTextEntry}></TextInput>
    </View>
  )
}

export default CustomInput;



const styles = StyleSheet.create({
    container : {
        marginTop:0,
        color: 'white',
        width:'100%',
        height: 40,

        borderColor: 'grey',
        borderWidth:1,
        borderRadius:2,

        marginVertical:5,
        padding:1

    },
    input : {
        color:'black'
    }
})