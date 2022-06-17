import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";

export default function Home(){

    const [text, setText] = useState('Hello World!')

    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>Enter Your Text</Text>
            <TextInput 
            style = {styles.input}
            placeholder = 'e.g. Hello World!'
            placeholderTextColor="#D3D3D3" 
            textAlign="center"
            caretHidden = {true}
            onChangeText = {(val) => setText(val)}
            />
            <Text style = {styles.text2}> Demo Output : {text}</Text>
            <Button
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
        color : '#000000',
        alignItems : "center",
        justifyContent : "center",
    },
    text : {
        color : '#000000',

    },
    text2 : {
        color : '#078f29',
        fontSize : 20,
        marginBottom : 10
    },
    input :{
        borderWidth : 1,
        borderColor : '#777',
        color : '#000000',
        padding : 5,
        margin : 10,
        width : 180,
    }
})