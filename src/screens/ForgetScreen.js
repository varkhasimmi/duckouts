import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import InputText from '../../components/InputText';
import LoginButton from '../../components/LoginButton';

const ForgetScreen = () =>{
    return(
        <View style={styles.loginStyle}>
            <Text style={styles.textStyle}>Forget password</Text>
            <View style={styles.viewStyle}>
                <Text style={styles.textMargin}>Please enter your email address. You will receive a link to create a new password via email</Text>
                <InputText placeholder="john@duckouts.com"></InputText>
            </View>
            <LoginButton ButtonText="send"></LoginButton>
        </View>
    )
};
const styles = StyleSheet.create({
    loginStyle:{
        backgroundColor: 'rgb(239, 239, 244)',
        flexDirection:'column',
        flex:1,
        paddingHorizontal:15,
        alignContent:'space-around'
    },
    textStyle:{
        fontWeight:"bold",
        fontSize:40,
        marginVertical:70,

    },
    viewStyle:{
        marginTop:70,
        marginBottom:30
     },
     textMargin:{
         marginVertical:30
     }
})

export default ForgetScreen;

