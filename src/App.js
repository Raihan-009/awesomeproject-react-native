import React from "react";
import { Text, View, StyleSheet } from "react-native";


export default function App(){
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>Hello World!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
    },
    text : {
        color : '#000000',

    }
})