import React from "react";
import { View, Text } from "react-native";

const LoginScreen = () =>{
    return (
        <View style = {{ flex:1, justifyContent:'center', alignItems : 'center' }}>
            <Text style = {{ fontSize : 20, color : '#0a0a0a' }}>Log in Screen</Text>
        </View>
    )
}

export default LoginScreen;