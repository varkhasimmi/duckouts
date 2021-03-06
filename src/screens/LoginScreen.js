import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import InputText from '../../components/InputText';
import LoginButton from '../../components/LoginButton';
import {FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons'

const LoginScreen = ({navigation}) => {
    return(
        <View style={styles.loginStyle}>
            <Text style={styles.textStyle}>Login</Text>
            <View style={styles.viewStyle}>
                <InputText placeholder="john@duckouts.com"></InputText>
                <InputText placeholder="Password" isSecure="true"></InputText>

                <TouchableOpacity onPress={() => navigation.navigate('ForgetScreen')} style={styles.forgetStyle} >
                    <Text >Forgot Your Password?</Text>
                    <FontAwesome style={styles.iconStyle} name="long-arrow-right" size={25}/>
                </TouchableOpacity>
                <LoginButton ButtonText="Login"></LoginButton>
                
            </View>
            <TouchableOpacity style={styles.facebookLink}>
                <Text>Or login with social account</Text>
                <MaterialCommunityIcons style={styles.faceIcon} name="facebook-box" size={40}/>
            </TouchableOpacity>
            
        </View>
    )
} 

const styles = StyleSheet.create({
    loginStyle:{
        backgroundColor: 'rgb(239, 239, 244)',
        flexDirection:'column',
        flex:1,
        paddingHorizontal:15
    },
    textStyle:{
        fontWeight:"bold",
        fontSize:40,
        marginVertical:70,
    },
    viewStyle:{
       marginTop:70
    },
    forgetStyle:{
        alignSelf:'flex-end',
        marginVertical:20,
        flexDirection:'row',
        
    },
    iconStyle:{
        color:'red',
        marginTop:-3,
        margin:10
    },
    facebookLink:{
        margin:40,
        position:"absolute",
        bottom:0,
        alignSelf:'center'
    },
    faceIcon:{
        alignSelf:'center',
        backgroundColor:'white',
        padding:10,
        borderRadius:30,
        margin:10,
        color:'#3b5998',
        paddingHorizontal:20
    }
})

export default LoginScreen;