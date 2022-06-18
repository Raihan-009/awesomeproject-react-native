import React from "react";
import { Dimensions, ImageBackground, ScrollView, Text, View, StyleSheet, Button,TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from "../components/CustomButton/CustomButton";
import CustomIcon from "../components/CustomIcon/CustomIcon";
import CustomInput from "../components/CustomInput";

const signInButtonPressed = () =>{
    console.warn('Sign in Successfull')
}

const forgotButtonPressed = () => {
    console.warn("Reset Your Password")
}

const LoginScreen = () =>{
    return (
        <ScrollView style = {{ flex:1,backgroundColor:'whitesmoke' }} showsVerticalScrollIndicator = {false}>
            
            <ImageBackground source={require('../../assets/images/abstract.jpeg')} style = {{ height : Dimensions.get('window').height / 2.5 }}>
                <View style={styles.brandView}>
                    <Icon name="location" style={{ fontSize:60, color:'#ffffff' }}></Icon>
                    <Text style={styles.brandViewText}>Poridhi</Text>
                </View>
            </ImageBackground>
           
           <View style={styles.bottomView}>
             <View style={{ padding:40 }}>
                <Text style={{color:'#0850c4', fontSize:35, fontWeight:'500'}}>Welcome</Text>
                <Text style={{color:'black'}}>Don't have any account?<Text style={{color:'red', fontStyle:'italic'}}> Register Now</Text></Text>
                <View style={{marginTop:40}}>
                    <CustomInput placeholder="username" secureTextEntry={false}></CustomInput>
                    <CustomInput placeholder="password" secureTextEntry={true}></CustomInput>
                    <CustomButton text = "Sign In" onPress={signInButtonPressed}></CustomButton>
                    <CustomButton text = "Forgot Password?" onPress={forgotButtonPressed} type = "TERTIARY"></CustomButton>
                    <View>
                        <CustomIcon icon={'logo-facebook'} social = 'Facebook' bgcolor='#E7EAF4' fgcolor='#4765A9' btn = 'Facebook'></CustomIcon>
                        <CustomIcon icon ={'logo-google'} social = 'Google' bgcolor='#FAE9EA' fgcolor='#DD4D44' btn = 'Google'></CustomIcon>
                    </View>
                </View>
             </View>
           </View>
        </ScrollView>
    )
}

export default LoginScreen;


const styles = StyleSheet.create({
    brandView : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    brandViewText :{
         color : '#080808',
         fontSize : 45,
         fontWeight:"bold"
    },
    bottomView :{
        flex:1.5,
        backgroundColor:'whitesmoke',
        bottom:50,
        borderTopStartRadius:60,
        borderTopEndRadius:60,
    },
    
})