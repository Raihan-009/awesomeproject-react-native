import React from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';


export default function Image(){

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Hello From Second Window</Text>
            <Button
            
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
                

        </View>
    )
}


const styles = StyleSheet.create(
    {
        container : {
            flex : 1,
            backgroundColor : '#fff',
            color : '#00000',
            alignItems : 'center',
            justifyContent : 'center'
        },
        text : {
            color : '#000000',
            marginBottom : 10
        },
        btn : {
            marginTop : 10,
        }
    }
)