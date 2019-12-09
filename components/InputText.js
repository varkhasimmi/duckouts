import React from 'react';
import {View,StyleSheet,Text,TextInput} from 'react-native';

const InputText = ({placeholder,isSecure}) => {
    return(
        <View style={styles.inputStyle}>
            <TextInput 
            placeholder={placeholder} 
            style={styles.textInput} 
            secureTextEntry={isSecure?true:false}/>
        </View>
    )
} 

const styles = StyleSheet.create({

    inputStyle:{
        backgroundColor: 'white',
        height:60,
        borderRadius:5,
        flexDirection:'row',
        margin:5
    },
    textInput:{
        fontSize:20,
        marginHorizontal:15,
        flex:1,
        fontFamily:""
    }
})

export default InputText;